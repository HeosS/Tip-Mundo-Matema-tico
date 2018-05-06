//variables del juego
var time;
var caraBoton = ['personaje-btn-0', 'personaje-btn-1', 'personaje-btn-2', 'personaje-btn-3', 'personaje-btn-4', 'personaje-btn-5', 'personaje-btn-6', 'personaje-btn-7'];
var cont = 0;
var timerTime = 1000;
var numeroObjetivo;
var controlador1;
var controlador2;
var resetCalculadora = false;
var comboTriple = 0;
var mejorComboBasicoMat2, mejorComboMedioMat2, mejorComboAvanzadoMat2;
var tm =0;
//comun creador
function comunCreadorMat2(){
	createJuegoBase2('mat-2');
	$('.juego-mat-2-active .contenedor-pregunta').append('');
}
//creador del html para el juego
function createJuegoBase2(name){
	$('.container').append('<div class="consola"></div>');
	$('.consola').append('<div class="juego-' + name + '-active">' +
		'<div class="fondo-juego"></div>' + 
		'<div class="piso-juego"></div>' + 
		'<div class="lente-pregunta lente-salida"></div>' +
		'</div>');
	
	$('.juego-' + name + '-active').append('<div class="contenedor-pregunta index-initial"> </div>');
	//niveles de dificultad
	if(nivel == 1){
		$('.juego-' + name + '-active').append('<div class="calculadora slide-top"><div class="choices-juego1"></div></div>');
		totalPreguntas = 5;
	}else if(nivel == 2){
		$('.juego-' + name + '-active').append('<div class="calculadora slide-top"><div class="choices-juego2"></div></div>');
		totalPreguntas = 10;	
	}else if(nivel == 3){
		$('.juego-' + name + '-active').append('<div class="calculadora slide-top"><div class="choices-juego3"></div></div>');
		totalPreguntas = 20;
	}
	setTimeout(function(){
		$('.consola').addClass('jugando');
	}, 300);
}
//creacion de juego
function creacionMat2(){
	//backPosition = 6;
	$('.juego-mat-2-active').removeClass('score-salida');
	$('.ui-container, .cont-alternativa').remove();
	$('.choices-juego' + nivel).addClass('juego-' + nivel);
	cargaPreguntasMat2();
}
//carga de cartas
function cargaPreguntasMat2(){
	//cargador de preguntas y actividades
	while(i == numberCreate){
		cargadorPreguntas2();
		juegoMat2();
		numberCreate++;
	}
}
//carga componentes del escenario
var numNivel;
function cargadorPreguntas2(){
	var valor;
	var feedBackBuena;
	var feedBackMala;
	totalAlternativas = 21;
	
	//switch dependiendo del nivel
	switch(nivel){
		case 1: 
			time = 60;
			numNivel = 1;
			valorObjetivo();
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta(); 
			break;
		case 2:
			time = 55;
			numNivel = 3;
			valorObjetivo();
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta();
			break;
		case 3:
			time = 50;
			numNivel = 6;
			valorObjetivo();
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta();
			break;
	}
	//se crea el html de la pregunta
	function contenedorPregunta(){		
		$('.contenedor-pregunta').append('<div class="ui-container">' +
			'<div class="pantallas slide-top">' +
			//numero que se pide
			'<div class="numero-objetivo"><small>Debes obtener:</small><p>' + numeroObjetivo + '</p></div>' +
			//numero que elige el usuario
			'<div class="numero-referencia"><small></small><p>0</p></div>' +
			//timer, puntaje, combo y feedback
			'<div class="reloj"><p class="time"></p><div class="feedback-calculadora"><span><p class="max-puntaje"></p><p class="max-combo"></p></span><p class="mensaje-calculadora"></p></div></div>' +
			'</div>' +
			'</div>');
	
		switch(nivel){
			case 1:
				mejorComboBasicoMat2 = localStorage.getItem('comboBasicoMat2') || 0;
				$('.feedback-calculadora .max-puntaje').append('Mejor puntaje: ' + mejorPuntajeBasicoMat2 + 'pt');
				$('.feedback-calculadora .max-combo').append('Mejor combo: ' + mejorComboBasicoMat2);
			break;
			case 2:
				mejorComboMedioMat2 = localStorage.getItem('comboMedioMat2') || 0;
				$('.feedback-calculadora .max-puntaje').append('Mejor puntaje: ' + mejorPuntajeMedioMat2 + 'pt');
				$('.feedback-calculadora .max-combo').append('Mejor combo: ' + mejorComboMedioMat2);
			break;
			case 3:
				mejorComboAvanzadoMat2 = localStorage.getItem('comboAvanzadoMat2') || 0;
				$('.feedback-calculadora .max-puntaje').append('Mejor puntaje: ' + mejorPuntajeAvanzadoMat2 + 'pt');
				$('.feedback-calculadora .max-combo').append('Mejor combo: ' + mejorComboAvanzadoMat2);
			break;
		}
		if(resetCalculadora == true){
			$('.ui-container .pantallas').removeClass('slide-top');
			resetCalculadora = false;
		}
		for(var j = 0; j < totalAlternativas; j++){
			$('.choices-juego' + nivel).append('<div class="cont-alternativa opacity-out"><div class="alternativaBtn ' + caraBoton[Math.floor((Math.random()*7) + 1)] + '">' + Math.floor((Math.random() * 9) + numNivel) + '</div></div>');
			$('.alternativaBtn').data('use', 'false');
		}
	}
}
//valor del puntaje, se llama a la entrada de botones y se carga el feedback
function alternativas2(){
	switch(nivel){
		case 1:
			valor = 20;
		break;
		case 2:
			valor = 10;
		break;
		case 3:
			valor = 5;
		break;
	}

	inOutBotones('in');
	
	feedBackBuena = ['Muy bien', 'Excelente', 'Genial'];
	feedBackMala = ['Muy mal', 'Error', 'Intentalo otra vez'];
    feed = Math.floor(Math.random() * 3);
}
//entrada de botones 
var delay = 11;
function inOutBotones(modo){
	if(modo == 'in'){
		if(cont < totalAlternativas){
			setTimeout(function(){
				$('.cont-alternativa').eq(cont).removeClass('opacity-out');
				cont++
				inOutBotones('in');
			}, delay);
		}else{
			cont = 0;
			setTimeout(function(){
				$('.juego-mat-2-active .lente-pregunta').addClass(fondoJuego[Math.floor((Math.random() * 7) + 1)]);
			}, 550);
		}
	}else if(modo == 'out'){
		if(cont < totalAlternativas){
			setTimeout(function(){
				$('.cont-alternativa').eq(cont).addClass('opacity-out');
				cont++
				inOutBotones('out');
			}, delay);
		}else{
			cont = 0;
		}
	}
}
//corazon del juego
function juegoMat2(){
	$('.juego-mat-2-active .lente-pregunta').removeClass('lente-salida lente-final');
	alternativas2();
	setTimeout(function(){
		$('.calculadora, .contenedor-pregunta .ui-container .pantallas').removeClass('slide-top');
	}, 300);
	setTimeout(function(){
		$('.contenedor-pregunta').removeClass('index-initial');
	}, 1200);
	
	function cuentaRegresiva(){
		function timer(){
			if(time > 1){
				time--;
				$('.reloj p.time').html('<small>Tiempo: </small>' + time + 's');
				setTimerTime();
				controlador2 = setTimeout(timer, timerTime);
		  	}else{
		  		if(time < 0){
		  			$('.reloj p.time').html('<small>Tiempo: </small>0s');
		  		}else{
		  			$('.reloj p.time').html('<small>Tiempo: </small>' + (time - 1) + 's');
		  		}
			 	setTimerTime();
			 	finTimer();
		  	}	  
		}
		controlador1 = setTimeout(timer, timerTime);
	}

	cuentaRegresiva();
	activarChoice('.alternativaBtn');
}
//suma el numero seleccionado
var arraySumNum = [];
function sumarPantalla(num){
	var currentNumber = parseInt( $('.numero-referencia p').text());
	var suma = currentNumber + num;
	$('.numero-referencia p').text(suma);
	arraySumNum.push(num);
	$('.numero-referencia small').empty();
	for(var y = 0; y < arraySumNum.length; y++){
		if(y == 0){
			$('.numero-referencia small').append(arraySumNum[y]);
		}else{
			$('.numero-referencia small').append('+' + arraySumNum[y]);
		}
	}
	evaluacionBotones(suma);
}
//resta el numero seleccionado
function restarPantalla(num){
	var currentNumber = parseInt( $('.numero-referencia p').text());
	var resta = currentNumber - num;
	
	//arraySumNum.pop();
	arraySumNum.splice(arraySumNum.indexOf(num), 1);
	console.log("arraySumNum " + arraySumNum);
	$('.numero-referencia small').empty();
	for(var y = 0; y < arraySumNum.length; y++){
		if(y == 0){
			$('.numero-referencia small').append(arraySumNum[y]);
		}else{
			$('.numero-referencia small').append('+' + arraySumNum[y]);
		}
	}
	$('.numero-referencia p').text(resta);	
}
//esta es la función de evaluacion
function evaluacionBotones(object){
	var numero = parseInt($('.numero-objetivo p').text());
	if(object == numero){
		correcta();
	}else if(object > numero){
		incorrecta();
	}
}
//si la suma es correcta
function correcta(){
	comboTriple++;
	$('.feedback-calculadora p.mensaje-calculadora').empty();	
	$('.feedback-calculadora p.mensaje-calculadora').append(feedBackBuena[feed]);
	//animacion de segundos
	$('.pantallas').append('<div class="mas-seg">+3s</div>');
	setTimeout(function(){
		$('.pantallas .mas-seg').addClass('bounce-seg anim-left');
	}, 10);
	//se envia el puntaje
	score(valor);
	//reset de la calculadora
	resetChoice('buena');
	validadorPista();
	if(sonidoGeneral == 0){
		$('audio')[7].play();
	}
	//evaluador de combo
	if(comboTriple >= 3 ){
		$('.super-combo').remove();
		$('.juego-mat-2-active').append('<div class="super-combo">' + comboTriple + '</div>');
		if(comboTriple >= 3 && comboTriple < 6){ 
			$('.super-combo').append('<small>Super Combo</small>');
		}else if(comboTriple >= 6 && comboTriple < 9){ 
			$('.super-combo').append('<small>Mega Combo</small>');
		}else if(comboTriple >= 9){ 
			$('.super-combo').append('<small>Hyper Combo</small>');
		}
		setTimeout(function(){
			$('.super-combo').addClass('activeCombo');
		}, 100);

		setTimeout(function(){
			$('.super-combo').removeClass('activeCombo');
		}, 1100);

		setTimeout(function(){
			$('.super-combo').remove();
		}, 1700);
	}
	//se graba el mejor combo
	switch(nivel){
		case 1:
			if(comboTriple > 3 && comboTriple > mejorComboBasicoMat2){
				localStorage.comboBasicoMat2 = comboTriple;
				$('.feedback-calculadora .max-combo').empty();
				$('.feedback-calculadora .max-combo').append('Mejor combo: ' + comboTriple);
			}
		break;
		case 2:
			if(comboTriple > 3 && comboTriple > mejorComboMedioMat2){
				localStorage.comboMedioMat2 = comboTriple;
				$('.feedback-calculadora .max-combo').empty();
				$('.feedback-calculadora .max-combo').append('Mejor combo: ' + comboTriple);
			}
		break;
		case 3:
			if(comboTriple > 3 && comboTriple > mejorComboAvanzadoMat2){
				localStorage.comboAvanzadoMat2 = comboTriple;
				$('.feedback-calculadora .max-combo').empty();
				$('.feedback-calculadora .max-combo').append('Mejor combo: ' + comboTriple);
			}
		break;
	}
}
//si la suma es incorrecta
function incorrecta(){
	comboTriple = 0;
	$('.feedback-calculadora p.mensaje-calculadora').empty();	
	$('.feedback-calculadora p.mensaje-calculadora').append(feedBackMala[feed]);
	//animacion de segundos
	$('.pantallas').append('<div class="menos-seg">-6s</div>');
	setTimeout(function(){
		$('.pantallas .menos-seg').addClass('bounce-seg anim-left');
	}, 10);
	//se envia el puntaje
	score(0);
	//reset de la calculadora
	resetChoice('mala');
	$('.calculadora, .pantallas').addClass('vibrate');
	setTimeout(function(){
		$('.calculadora, .pantallas').removeClass('vibrate');
	}, 500);
	window.navigator.vibrate(500);
	if(sonidoGeneral == 0){
		$('audio')[6].play();
	}
}
//se activan los botones de la calculadora
function activarChoice(choice){
	var state = true;
	$(choice).removeClass('resaltado');
	$(choice).on('click', function(){
		var dataUse = $(this).data('use');
		var numeroChoice = parseInt($(this).text())
		$(this).removeClass('resaltado');
		if(dataUse == 'false'){
			$(this).data('use', 'true');
			$(this).addClass('activeBtn');
			sumarPantalla(numeroChoice);
		}else{
			$(this).data('use', 'false');
			$(this).removeClass('activeBtn');
			restarPantalla(numeroChoice);
		}
		state = !state;
	});
}
//se aumenta la velocidad del tiempo
function setTimerTime(){
	tm++;
	if(tm >= 30){
		if(timerTime > 500){
			timerTime -=10;
		}
	}
}
//numero que se debe obtener  
function valorObjetivo(){
	switch(nivel){
		case 1: 
			numeroObjetivo = Math.floor((Math.random() * (10 - numNivel)) + 11);
		break;
		case 2:
			numeroObjetivo = Math.floor((Math.random() * (20 - numNivel)) + 16);
		break;
		case 3:
			numeroObjetivo = Math.floor((Math.random() * (30 - numNivel)) + 18);
		break;
	}
		
	$('.numero-objetivo p').empty().append(numeroObjetivo);
}
//ayuda para la suma
var arrayNumAyuda = [];
var arrayNumNoEncontrado = [];
function funcionAyuda(){
	var numeroComparar = parseInt($('.numero-objetivo p').text());
	var numeroActual =  parseInt($('.numero-referencia p').text());
	var ayuda1 = 0;
	var ayuda2 = 0;
	var ayuda3 = 0;
	var random1 = 0;
	var numEncontrado = 0;

	function numeroRandomAyudaVacio(){
		ayuda1 = Math.floor((Math.random() * 9) + numNivel);
		random1 = numeroComparar - ayuda1;
		ayuda2 = Math.floor((Math.random() * random1) + 1);
		ayuda3 = numeroComparar - ayuda1 - ayuda2;
		arrayNumAyuda.push(ayuda1, ayuda2, ayuda3);
	}

	function numAyudas(modo){
		arrayNumAyuda = [];
		
		switch(modo){
			case 1:
				if(numeroActual == 0){
					numeroRandomAyudaVacio();
					validarNumeroAyuda();
				}else{
					arraySumNum = [];
					$('.numero-referencia small').empty();
					$('.numero-referencia p').empty().append('0');
					$('.alternativaBtn').removeClass('activeBtn');
					numeroActual =  parseInt($('.numero-referencia p').text());
					numeroRandomAyudaVacio();
					validarNumeroAyuda();
				}
			break;
			case 2:
				if(numeroActual == 0){
					var encon = 0;
					numeroRandomAyudaVacio();
					
					for(var g = 0; g < arrayNumNoEncontrado.length; g++){
						for(var h = 0; h < arrayNumAyuda; h++){
							if(arrayNumNoEncontrado[g] == arrayNumAyuda[h]){
								encon++;
							}
						}
						if(encon > 0){
							numeroRandomAyudaVacio();
							numAyudas(2);
						}else{
							arrayNumNoEncontrado = [];
							validarNumeroAyuda();
						}
					}
				}else{
					arraySumNum = [];
					$('.numero-referencia small').empty();
					$('.numero-referencia p').empty().append('0');
					$('.alternativaBtn').removeClass('activeBtn');
					numeroActual =  parseInt($('.numero-referencia p').text());
					numeroRandomAyudaVacio();
					validarNumeroAyuda();
				}
			break;
		}
	}

	function validarNumeroAyuda(){
		var current = arrayNumNoEncontrado.length;
		if(current > 0){
			numAyudas(2);
		}else{
			buscaNum();
		}
	}

	function buscaNum(){
		var find = false;

		for(var count = 0; count < arrayNumAyuda.length; count++){

			$('.cont-alternativa').each(function(index){
				var numAyuda = $(this).children('.alternativaBtn').text();
				var dataUso = $(this).attr('class');
				if(numAyuda == arrayNumAyuda[count] && dataUso == 'cont-alternativa'){
					numEncontrado++;
					$(this).addClass('encontrado');
					find = true;
					return false;
				}
			});

			if(find == false){
				arrayNumNoEncontrado.push(arrayNumAyuda[count]);
			}

			find = false;
		}

		if(numEncontrado == arrayNumAyuda.length){
			mostrarAyuda();
		}else{
			numEncontrado = 0;
			$('.cont-alternativa').removeClass('encontrado');
			numAyudas(2);
		}
	}

	function mostrarAyuda(){
		$('.cont-alternativa.encontrado').children('.alternativaBtn').addClass('activeAyuda');
	}

	numAyudas(1);
}
//reset de la calculadora
function resetChoice(respuesta){
	$('.alternativaBtn').data('use', 'false');
	$('.cont-alternativa.encontrado').removeClass('encontrado');
	$('.alternativaBtn').removeClass('activeAyuda')
	$('.alternativaBtn').off();
	$('.juego-mat-2-active .lente-pregunta').removeClass('lente-0 lente-1 lente-2 lente-3 lente-4 lente-5 lente-6 lente-7');

	inOutBotones('out');
	arraySumNum = [];
	arrayNumNoEncontrado = [];

	setTimeout(function(){
		$('.alternativaBtn').removeClass('activeBtn personaje-btn-0 personaje-btn-1 personaje-btn-2 personaje-btn-3 personaje-btn-4 personaje-btn-5 personaje-btn-6 personaje-btn-7');
		valorObjetivo();
		$('.numero-referencia small').empty();
		$('.numero-referencia p').empty().append('0');
		$('.feed-back').removeClass('feed-back-active');
		for(var j = 0; j < totalAlternativas; j++){
			$('.alternativaBtn').eq(j).empty().addClass(caraBoton[Math.floor((Math.random()*7) + 1)]).append(Math.floor((Math.random() * 9) + numNivel));
			$('.alternativaBtn').eq(j).data('use', 'false');
			$('.cont-alternativa').eq(j).addClass('opacity-out');
		}
		//inOutBotones('in');
		activarChoice('.alternativaBtn');
	}, 600);

	setTimeout(function(){
		$('.pantallas .mas-seg, .pantallas .menos-seg').removeClass('bounce-seg');
		if(respuesta == 'buena'){
			time += 3;
		}else{
			time -= 6;
		}
		inOutBotones('in');
	}, 900);

	setTimeout(function(){
		$('.feedback-calculadora p.mensaje-calculadora').empty();
		$('.pantallas .mas-seg, .pantallas .menos-seg').remove();
	}, 1600);
}
//fin del juego  
function finTimer(){
	$('.feedback-calculadora p.mensaje-calculadora').empty();	
	$('.feedback-calculadora p.mensaje-calculadora').append('Se acabó el tiempo');
	$('.alternativaBtn').off();
	arraySumNum = [];
	comboTriple = 0;
	tm = 0;

	switch(nivel){
		case 1:
			i = 5;
			evaluacion('mat-2', 'Mat2', mejorPuntajeBasicoMat2, 'Basico', 'basico', 5);
		break;
		case 2:
			i = 10;
			evaluacion('mat-2', 'Mat2', mejorPuntajeMedioMat2, 'Medio', 'medio', 10);
		break;
		case 3:
			i = 20;
			evaluacion('mat-2', 'Mat2', mejorPuntajeAvanzadoMat2, 'Avanzado', 'avanzado', 20);
		break;
	}
}