//variables del juego
var voids = 0;
var arreglo = [];
var arregloVoids = [];
var arregloUsedVoids = [];
var arregloCartas = [];
var arregloValores = [];
var index = 0;
var estado = 'false';
var totalAlternativas = 0;
var fondoCarta = ['carta-0', 'carta-1', 'carta-2', 'carta-3'];
var fondoJuego = ['lente-0', 'lente-1', 'lente-2', 'lente-3', 'lente-4', 'lente-5', 'lente-6', 'lente-7'];
var totalPreguntas;
//comun creador
function comunCreadorMat1(){
	createJuegoBase('mat-1');
	$('.juego-mat-1-active .contenedor-pregunta').append('<div class="presentador slide-top"></div>' + 
		'<div class="mesa-cartas slide-top"></div>' +
		'<div class="piso-juego"></div>' + 
		'<div class="pokerhand-left enterhand-left"></div>' +
		'<div class="pokerhand-right enterhand-right"></div>' +
		'<div class="lente-pregunta lente-salida"></div>');
}
//creador del html para el juego
function createJuegoBase(name){
	$('.container').append('<div class="consola"></div>');
	$('.consola').append('<div class="juego-' + name + '-active"></div>');
	$('.juego-' + name + '-active').append('<div class="contenedor-pregunta"></div>');
	//niveles de dificultad
	if(nivel == 1){
		$('.juego-' + name + '-active').append('<div class="opciones-juego1"></div>');	
	}else if(nivel == 2){
		$('.juego-' + name + '-active').append('<div class="opciones-juego2"></div>');
	}else if(nivel == 3){
		$('.juego-' + name + '-active').append('<div class="opciones-juego3"></div>');
	}
	//feedback
	$('.consola').append('<div class="feed-back"></div>');
	setTimeout(function(){
		$('.consola').addClass('jugando');
	}, 300);
}
//creacion de juego
function creacionMat1(){
	//backPosition = 6;
	$('.cartas-pregunta').remove();
	$('.opciones-juego' + nivel).addClass('juego-' + nivel);
	//puntaje de los niveles
	if(nivel == 1){
		evaluacion('mat-1', 'Mat1', mejorPuntajeBasicoMat1, 'Basico', 'basico', 5);
		totalPreguntas = 5;
	}else if(nivel == 2){
		evaluacion('mat-1', 'Mat1', mejorPuntajeMedioMat1, 'Medio', 'medio', 10);
		totalPreguntas = 10;
	}else if(nivel == 3){
		evaluacion('mat-1', 'Mat1', mejorPuntajeAvanzadoMat1, 'Avanzado', 'avanzado', 20);
		totalPreguntas = 20;
	}
	cargaPreguntasMat1();
}
//carga de cartas
function cargaPreguntasMat1(){
	//cargador de preguntas y actividades
	if(i < totalPreguntas){
		cargadorPreguntas();
		juegoMat1();
	}
}
//cargador de cartas
function cargadorPreguntas(){
	//variables de carga para las cartas
	var numberTarget;
	var maximo = 0;
	var opcion1;
	var opcion2;
	var opcion3;
	var opcion4;
	var opcion5;
	var opcion6;
	var opcion7;
	var respuesta1;
	var respuesta2;
	var respuesta3;
	var respuesta4;
	var respuesta5;
	var respuesta6;
	var voidSpace = "<div class='void-space' data-estado='false'></div>";
	var signo = "<div class='signo'>+</div>";
	var randomAlternativas;
	var valor;
	var feedBackBuena;
	arreglo.length = 0;
	arregloVoids.length = 0;
	arregloCartas.length = 0;
	arregloValores.length = 0;
	index = 0;
	//switch dependiendo del nivel
	switch(nivel){
		case 1: 
			maximo = 9; 
			voids = 2;
			totalAlternativas = 3;
			opcionesNivel1();
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta(); 
			$('.cartas-pregunta .voids').append(voidSpace + signo + voidSpace);
			break;
		case 2: 
			maximo = 20; 
			voids = 3;
			totalAlternativas = 5;
			opcionesNivel2();
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta(); 
			$('.cartas-pregunta .voids').append(voidSpace + signo + voidSpace + signo + voidSpace); 
			break;
		case 3: 
			maximo = 50;
			voids = 4;
			totalAlternativas = 7;
			opcionesNivel3(); 
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta(); 
			$('.cartas-pregunta .voids').append(voidSpace + signo + voidSpace + signo + voidSpace + signo + voidSpace);
			break;
	}
	//se carga la cantidad de espacios en el arreglo
	for(var n = 0; n < voids; n++){
		arregloVoids.push($(".voids .void-space").eq(n));
	}
	//opcion 1
	var count;
	function opcionesNivel1(){
		numberTarget = Math.floor((Math.random() * maximo) + 1);
		opcion1 = (numberTarget - Math.floor((Math.random() * numberTarget) + 1));
		opcion2 = numberTarget - opcion1 ;
		opcion3 = Math.floor((Math.random() * maximo) + 1);
		arregloCartas.push(opcion1, opcion2, opcion3);
		respuesta1 = opcion1;
		respuesta2 = opcion2;
		count = 2;
		if(opcion1 == 0){
			arregloCartas.length = 0;
			opcionesNivel1();
		}
	}
	//opcion 2
	function opcionesNivel2(){
		var margen = 10;
		opcion1 = Math.floor((Math.random() * margen) + 1);
		opcion2 = Math.floor((Math.random() * margen) + 1) ;
		opcion3 = Math.floor((Math.random() * margen) + 1);
		opcion4 = Math.floor((Math.random() * maximo) + 1);
		opcion5 = Math.floor((Math.random() * maximo) + 1);
		arregloCartas.push(opcion1, opcion2, opcion3, opcion4, opcion5);
		numberTarget = opcion1 + opcion2 + opcion3;
		respuesta1 = opcion1;
		respuesta2 = opcion2;
		respuesta3 = opcion3;
		count = 3;
		if(opcion1 == 0){
			arregloCartas.length = 0;
			opcionesNivel2();
		}	
	}
	//opcion 3	
	function opcionesNivel3(){
		var margen = 20;
		opcion1 = Math.floor((Math.random() * margen) + 1);
		opcion2 = Math.floor((Math.random() * margen) + 1) ;
		opcion3 = Math.floor((Math.random() * margen) + 1);
		opcion4 = Math.floor((Math.random() * margen) + 1);
		opcion5 = Math.floor((Math.random() * maximo) + 1);
		opcion6 = Math.floor((Math.random() * maximo) + 1);
		opcion7 = Math.floor((Math.random() * maximo) + 1);
		arregloCartas.push(opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7);
		numberTarget = opcion1 + opcion2 + opcion3 + opcion4;
		respuesta1 = opcion1;
		respuesta2 = opcion2;
		respuesta3 = opcion3;
		respuesta4 = opcion4;
		count = 4;
		if(opcion1 == 0){
			arregloCartas.length = 0;
			opcionesNivel3();
		}	
	}
	//se crea el html de la pregunta
	function contenedorPregunta(){
		//arreglo de clases para colores del lente (elaborar)
		$('.contenedor-pregunta .lente-pregunta').addClass(fondoJuego[Math.floor((Math.random() * 7) + 1)]);
		//html de la ayuda 
		$('.contenedor-pregunta').append('<div class="cartas-pregunta entrada">' + 
			//inicio carta number
			'<div class="carta-number ' + fondoCarta[Math.floor((Math.random() * 3) + 1)] + '" data-num="' + numberTarget + '">' +
			//carta principal
			'<span class="numero-principal"> ' + numberTarget + '</span>' +
			'</div>' +
 			//fin carta number
			//contenedor de espacios
			'<div  class="voids"></div>' +
			//fin contenedor de espacios
			'</div>'
			//fin de pregunta
		);
	}
	//alternativas
	for(var j = 0; j < totalAlternativas; j++){
		if(j < count){
			$('.opciones-juego' + nivel).append('<div class="alternativa"><div class="carta nice ' + fondoCarta[Math.floor((Math.random() * 3) + 1)] + '" data-num="' + arregloCartas[j] + '">' + arregloCartas[j] + '</div></div>');
		}else{
			$('.opciones-juego' + nivel).append('<div class="alternativa"><div class="carta ' + fondoCarta[Math.floor((Math.random() * 3) + 1)] + '" data-num="' + arregloCartas[j] + '">' + arregloCartas[j] + '</div></div>');
		}
	}
	//feedback
	$('.feed-back').append('<div class="buena"></div>');
	if(nivel == 1){
		$('.feed-back').append(
			//feedback respuesta mala
			'<div class="mala">' + 
			'<h2>La respuesta es ' + respuesta1 + ' + ' + respuesta2 + '</h2>' +
			'</div>');
	}else if(nivel == 2){
		$('.feed-back').append(
			//feedback respuesta mala
			'<div class="mala">' + 
			'<h2>La respuesta es ' + respuesta1 + ' + ' + respuesta2 + ' + ' + respuesta3 + '</h2>' +
			'</div>');
	}else if(nivel == 3){
		$('.feed-back').append(
			//feedback respuesta mala
			'<div class="mala">' + 
			'<h2>La respuesta es ' + respuesta1 + ' + ' + respuesta2 + ' + ' + respuesta3 + ' + ' + respuesta4 + '</h2>' +
			'</div>');
	}
	$('.buena, .mala, .alternativa, .respuesta').hide();
}
//angulo cartas
function anguloCartas(){
	var alternativaNum = $('.alternativa').length;
	var angle = 100;
	var distance = 80;
	var startingAngle = 180 + (-angle/2);
	var slice = angle / (alternativaNum-1);
	//var numCarta = $('.alternativa').length;

	$('.alternativa').each(function(i){
		var angle = startingAngle + (slice*i);
		$(this).css({
			transform: 'rotate(' + angle + 'deg)',
			//zIndex: numCarta
		});
		$(this).find('.carta').css({
			transform: 'translate3d(0px, ' + distance + 'px, 0px) rotate(' + 180 + 'deg)'
		});
		//--numCarta;
	})
};
//entrada de las alternativas
function alternativas(){
	randomAlternativas = $(".alternativa").get().sort(function(){ 
		return Math.round(Math.random())-0.3;
	});

	$(randomAlternativas).appendTo(randomAlternativas[0].parentNode).hide();

	anguloCartas();
	
	if(nivel == 1){
		valor = 20;
		for(var cont = 0; cont < totalAlternativas; cont++){
			var delay = 120 * cont;
			$('.alternativa').eq(cont).delay(delay).fadeIn('slow');
		}
	}
	
	if(nivel == 2){
		valor = 10;
		for(var cont = 0; cont < totalAlternativas; cont++){
			var delay = 120 * cont;
			$('.alternativa').eq(cont).delay(delay).fadeIn('slow');
		}
	}
	
	if(nivel == 3){
		valor = 5;
		for(var cont = 0; cont < totalAlternativas; cont++){
			var delay = 120 * cont;
			$('.alternativa').eq(cont).delay(delay).fadeIn('slow');
		}
	}
	
	feedBackBuena = ['Muy bien', 'Excelente', 'Genial'];
    feed = Math.floor(Math.random() * 3);
}
//corazon del juego
function juegoMat1(){
	var valorCarta;
	$('.contenedor-pregunta .lente-pregunta').removeClass('lente-salida lente-final');
	$('.contenedor-pregunta .presentador').removeClass('slide-top');
	setTimeout(function(){
		$('.contenedor-pregunta .mesa-cartas').removeClass('slide-top');
		$('.contenedor-pregunta .cartas-pregunta').removeClass('entrada');
	}, 300);
	setTimeout(function(){
		$('.pokerhand-left').removeClass('enterhand-left');
		$('.pokerhand-right').removeClass('enterhand-right');
		alternativas();
	}, 800);
	
	var respuestaMuestra = ".juego-mat-" + juegoActive + "-active .opciones-juego" + nivel;

	this.$alternativa = $(respuestaMuestra).find(".alternativa");

	function activarCarta(carta){
		carta.on('click', function(){
			$(this).fadeOut('slow');
			$(this).children().addClass('selectCarta');
			$(this).unbind("click");
			var classCarta = $(this).children().attr('class');
			valorCarta = $(this).text();
			completarMesa($(this) , valorCarta, classCarta);
			comprobar();
		});
	}
	
	activarCarta($alternativa);
	
	function completarMesa(cartaTarget, valorCarta, classCarta){			
		for(n = 0; n < arregloVoids.length; n++){
			if(arregloVoids[n].data("estado") == false){
				arregloVoids[n].data("estado", "true");
				escribirVoid(arregloVoids[n], cartaTarget, classCarta);
				break;
			}
		}
	}

	function escribirVoid(targetObject, cartaContenida, classCarta){
		cartaContenida.unbind();
		targetObject.text(valorCarta);
		targetObject.addClass(classCarta).removeClass('carta selectCarta');
		targetObject.attr('data-num', valorCarta);
			
		targetObject.click(function(event){
			var object = event.target;
			resetVoid($(object));
			resetCarta(cartaContenida);
		});
	}
	
	function comprobar(){
		arreglo = [];
		
		for(x = 0; x < arregloVoids.length; x++){
			if(arregloVoids[x].data("estado") == 'true'){
				if(x + 1 == arregloVoids.length){
					for(y = 0; y < arregloVoids.length; y++){
						var num = parseInt(arregloVoids[y].text());
						arregloVoids[y].unbind();
						arreglo.push(num);
					}
					evaluacionCartas(arreglo);
				}
			}
		}
	}

	function resetVoid(targetObject){
		targetObject.unbind();
		targetObject.text("");
		targetObject.removeClass('carta-0 carta-1 carta-2 carta-3');				
		targetObject.data("estado", false);
		targetObject.attr("data-num", "");
	}
	
	function resetCarta(cartaTarget){
		cartaTarget.fadeIn('slow');
		cartaTarget.children().removeClass('selectCarta');
		cartaTarget.bind("click", activarCarta(cartaTarget));
	}
	
	//esta es la función de evaluacion
	function evaluacionCartas(object){
		var suma;
		var numero = parseInt($(".numero-principal").text());
		switch(nivel){
			case 1: 
				suma = object[0] + object[1]; 
				break;
			case 2: 
				suma = object[0] + object[1] + object[2]; 
				break;
			case 3: 
				suma = object[0] + object[1] + object[2] + object[3];
				break;
		}

		$('.voids').addClass('complete');
		
		if(suma == numero){
			correcta();
		}else{
			incorrecta();
		}
		
	}
	
	function correcta(){
		$('.feed-back').addClass('feed-back-active');
		$('.buena').html('<h2>' + feedBackBuena[feed] + '</h2>');
		$('.buena, .respuesta').fadeIn('slow');
		$('.presentador').addClass('cara-nice');
		i++;
		correct++;
		score(valor);
		removeMat1();
		validadorPista();
		if(sonidoGeneral == 0){
			$('audio')[7].play();
		}
	}
	
	function incorrecta(){
		$('.presentador').addClass('cara-bad');
		$('.feed-back').addClass('feed-back-active');
		$('.mala').fadeIn('slow');
		i++;
		score(0);
		removeMat1();
		window.navigator.vibrate(500);
		if(sonidoGeneral == 0){
			$('audio')[6].play();
		}
	}
	
}
//remove de muestra
function removeMat1(){
	removeJuegoComun();
	$('.alternativa').off();
	$('.contenedor-pregunta .cartas-pregunta').addClass('entrada');
	setTimeout(function() {
		$('.juego-mat-' + juegoActive + '-active .alternativa').fadeOut('slow');
	}, 1000);
	setTimeout(function() {
		$('.contenedor-pregunta .cartas-pregunta').remove();
	}, 2000);
	setTimeout(function() {
		$('.presentador').removeClass('cara-bad cara-nice');
		creacionMat1();
	}, 2500);
}