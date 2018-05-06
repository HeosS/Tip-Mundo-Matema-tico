//variables del juego

var minuendo;
var sustraendo;
var diferencia;
var numSelect;
//comun creador
function comunCreadorMat3(){
	nivel = 1;
	createJuegoBase3('mat-3');
	$('.juego-mat-3-active .contenedor-pregunta').append('');
}
//creador del html para el juego
function createJuegoBase3(name){
	$('.container').append('<div class="consola"></div>');
	$('.consola').append('<div class="juego-' + name + '-active"></div>');
	$('.juego-' + name + '-active').append('<div class="contenedor-pregunta"> <div class="lente-pregunta lente-salida"></div> </div>');
	//niveles de dificultad
	console.log("nivel " + nivel)
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
function creacionMat3(){
	//backPosition = 6;
	$('.opciones-juego' + nivel).addClass('juego-' + nivel);
	//puntaje de los niveles
	if(nivel == 1){
		evaluacion('mat-3', 'Mat3', mejorPuntajeBasicoMat2, 'Basico', 'basico', 5);
	}else if(nivel == 2){
		evaluacion('mat-3', 'Mat3', mejorPuntajeMedioMat2, 'Medio', 'medio', 10);
	}else if(nivel == 3){
		evaluacion('mat-3', 'Mat3', mejorPuntajeAvanzadoMat2, 'Avanzado', 'avanzado', 20);
	}
	cargaPreguntasMat3();
}
//carga de cartas
function cargaPreguntasMat3(){
	//cargador de preguntas y actividades
	while(i == numberCreate){
		cargadorPreguntas3();
		juegoMat3();
		numberCreate++;
	}
}
//cargador de cartas
function cargadorPreguntas3(){
	//variables de carga para las cartas
	var totalPreguntas;
	
	
	//switch dependiendo del nivel
	switch(nivel){
		case 1: 
		minuendo = Math.floor((Math.random() * (9-5)) + 5);
		sustraendo = Math.floor((Math.random() * 9) + 1);
		sustraendo = definirSustraendo(minuendo , sustraendo);
		diferencia = minuendo - sustraendo;
			opcionesNivel1();
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta(); 
			break;
		case 2: 
		minuendo = Math.floor((Math.random() * 30) + 15);
		sustraendo = Math.floor((Math.random() * 25) + 11);
		sustraendo = definirSustraendo(minuendo , sustraendo);
		diferencia = minuendo - sustraendo;
			opcionesNivel2();
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta();
			break;
		case 3: 
		minuendo = Math.floor((Math.random() * (999-100)) + 100);
		sustraendo = Math.floor((Math.random() * (700-100)) + 100);
		sustraendo = definirSustraendo(minuendo , sustraendo);
		diferencia = minuendo - sustraendo;
			opcionesNivel3(); 
			//se instancia la creacion del contenedor de la pregunta
			contenedorPregunta();
			break;
	}
	
	console.log( "diferencia "+ diferencia)
	//opcion 1
	function opcionesNivel1(){
		/*if(opcion1 == 0){
			opcionesNivel1();
		}*/
	}
	//opcion 2
	function opcionesNivel2(){
		/*if(opcion1 == 0){
			opcionesNivel2();
		}*/	
	}
	//opcion 3	
	function opcionesNivel3(){
		/*if(opcion1 == 0){
			opcionesNivel3();
		}*/	
	}
	
	function definirSustraendo(num1 , num2){
		console.log( "num2.1 ", num2);
		if(num2 >= num1)
		{
			console.log( "num2.2 ", num2);
			for( num2; num2 >= num1; num2 --)
			{
				num2 = num2;
				console.log( "num2.3 ", num2);
				if(num1 > num2)
				{	
					return(num2);
					console.log( "num2.4 ", num2);
				}
				
			}	
		}else {
			return(num2);
			console.log( "num2.5 ", num2);
		}
			
			return(num2);
		console.log( "num2.6 ", num2);
	}
	
	//se crea el html de la pregunta
	function contenedorPregunta(){
		//arreglo de clases para colores del lente (elaborar)
		$('.contenedor-pregunta .lente-pregunta').addClass(fondoJuego[Math.floor((Math.random() * 7) + 1)]);
		//html de la ayuda y de la pregunta
		$('.contenedor-pregunta').append('<div class="boton-confirmar">CONFIRMAR</div>');
		
		switch (nivel){
			case 1: 
					$('.contenedor-pregunta').append('<div class="fondo-caja"></div>' +
					'<div class="puerta-caja">' +
					'<div class="password"></div>' +
					'</div>' +
					'<div class="pokerhand-left enterhand-left">' +
					'<div class="papel top-papel"><small>El resultado es la clave</small>' + minuendo + ' - ' + sustraendo + '= <span class="result"></span></div>' +
					'</div>');
					break;
			case 2: $('.contenedor-pregunta').append('<div class="fondo-caja"></div>' +
					'<div class="puerta-caja">' +
					'<div class="password"></div>' +
					'<div class="password2"></div>' +
					'</div>' +
					'<div class="pokerhand-left enterhand-left">' +
					'<div class="papel top-papel"><small>El resultado es la clave</small>' + minuendo + ' - ' + sustraendo + '= <span class="result"></span></div>' +
					'</div>');
					break;
			case 3: $('.contenedor-pregunta').append('<div class="fondo-caja"></div>' +
					'<div class="puerta-caja">' +
					'<div class="password"></div>' +
					'<div class="password2"></div>' +
					'<div class="password3"></div>' +
					'</div>' +
					'<div class="pokerhand-left enterhand-left">' +
					'<div class="papel top-papel"><small>El resultado es la clave</small>' + minuendo + ' - ' + sustraendo + '= <span class="result"></span></div>' +
					'</div>');
					break;
		}
		
		
	}
	//feedback
	
	$('.feed-back').append('<div class="buena"></div>');
	
	if(nivel == 1){
		$('.feed-back').append(
			//feedback respuesta mala
			'<div class="mala">' + 
			'<h2>La respuesta es </h2>' + diferencia + 
			'</div>');
			console.log("mala1 " + diferencia);
	}else if(nivel == 2){
		$('.feed-back').append(
			//feedback respuesta mala
			'<div class="mala">' + 
			'<h2>La respuesta es </h2>' + diferencia + 
			'</div>');
			console.log("mala1 " + diferencia);
	}else if(nivel == 3){
		$('.feed-back').append(
			//feedback respuesta mala
			'<div class="mala">' + 
			'<h2>La respuesta es </h2>' + diferencia + 
			'</div>');
			console.log("mala1 " + diferencia);
	}
	//$('.buena, .mala, .alternativa, .respuesta').hide();

	password();
}
//numeros para la clave
var totalNum = [];
function password(){
	totalNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var numView = 1;
	
	switch(nivel){
		case 1:  
			for(var m = 0; m < 3; m++){
			if(m == 0){
				$('.password').append('<div class="num sup">' + totalNum[numView - 1] + '</div>');
			}else if(m == 1){
				$('.password').append('<div class="num select">' + totalNum[numView] + '</div>');
				//diferencia = totalNum[numView];
			}else{
				$('.password').append('<div class="num sub">' + totalNum[numView + 1] + '</div>');
				
				}
			};
		break;
		
		case 2: 
			for(var m = 0; m < 3; m++){
			if(m == 0){
				$('.password').append('<div class="num sup">' + totalNum[numView - 1] + '</div>');
				$('.password2').append('<div class="num sup">' + totalNum[numView - 1] + '</div>');
			}else if(m == 1){
				$('.password').append('<div class="num select">' + totalNum[numView] + '</div>');
				$('.password2').append('<div class="num select">' + totalNum[numView] + '</div>');
				//diferencia = totalNum[numView];
			}else{
				$('.password').append('<div class="num sub">' + totalNum[numView + 1] + '</div>');
				$('.password2').append('<div class="num sub">' + totalNum[numView + 1] + '</div>');
				}
			};
					
		break;
		
		case 3: 
			for(var m = 0; m < 3; m++){
			if(m == 0){
				$('.password').append('<div class="num sup">' + totalNum[numView - 1] + '</div>');
				$('.password2').append('<div class="num sup">' + totalNum[numView - 1] + '</div>');
				$('.password3').append('<div class="num sup">' + totalNum[numView - 1] + '</div>');
			}else if(m == 1){
				$('.password').append('<div class="num select">' + totalNum[numView] + '</div>');
				$('.password2').append('<div class="num select">' + totalNum[numView] + '</div>');
				$('.password3').append('<div class="num select">' + totalNum[numView] + '</div>');
				//diferencia = totalNum[numView];
			}else{
				$('.password').append('<div class="num sub">' + totalNum[numView + 1] + '</div>');
				$('.password2').append('<div class="num sub">' + totalNum[numView + 1] + '</div>');
				$('.password3').append('<div class="num sub">' + totalNum[numView + 1] + '</div>');
				}
			};
					
		break;
	}
	
	
	

	
	swipeNum(numView);
}
//funcionde swipe
function swipeNum(numView){
	var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {
            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });

    $('.juego-mat-3-active .contenedor-pregunta').append('<div class="password-move"></div>');

	$('.password-move').on('swipeup',function(){
		if(numView == 10){
			numView = 0;
		}
		numView++;
		moveNum('up', numView);
	});

	$('.password-move').on('swipedown',function(){
		if(numView == -1){
			numView = 9;
		}
		numView--;
		moveNum('down', numView);
	});
	
	diferencia = numView;
}
//movimiento de selector
function moveNum(pos, numView){
	$('.num').empty();

	switch(pos){
		case 'up':
			for(var m = 0; m < 3; m++){
				if(m == 0){
					if(numView == 0){
						$('.num.sup').append(totalNum[numView + 9]);
					}else{
						$('.num.sup').append(totalNum[numView - 1]);
					}
				}else if(m == 1){
					if(numView == 10){
						$('.num.select').append(totalNum[numView - numView]);
					}else{
						$('.num.select').append(totalNum[numView]);
					}
				}else{
					if(numView == 9){
						$('.num.sub').append(totalNum[numView - numView]);
					}else if(numView == 10){
						$('.num.sub').append(totalNum[numView - 9]);
						numView = 0;
					}else{
						$('.num.sub').append(totalNum[numView + 1]);
					}
				}
			}
			//alert('up ' + numView);
		break;
		case 'down':
			//numView--;
			for(var m = 0; m < 3; m++){
				if(m == 0){
					if(numView == 0){
						$('.num.sup').append(totalNum[numView + 9]);
					}else if(numView == -1){
						$('.num.sup').append(totalNum[numView + 9]);
						numView = 9;
					}else{
						$('.num.sup').append(totalNum[numView - 1]);
					}
				}else if(m == 1){
					$('.num.select').append(totalNum[numView]);
				}else{
					if(numView == 9){
						$('.num.sub').append(totalNum[numView - numView]);
					}else{
						$('.num.sub').append(totalNum[numView + 1]);
					}
				}
			}
			//alert('down ' + numView);
		break;
	}
}
//entrada de las alternativas
function alternativas3(){
	randomAlternativas = $(".alternativa").get().sort(function(){ 
		return Math.round(Math.random())-0.3;
	});
	
	if(nivel == 1){
		valor = 20;
		totalPreguntas = 5;
		for(var cont = 0; cont < 3; cont++){
			var delay = 120 * cont;
			$('.alternativa').eq(cont).delay(delay).fadeIn('slow');
		}
	}
	
	if(nivel == 2){
		valor = 10;
		totalPreguntas = 10;
		for(var cont = 0; cont < 5; cont++){
			var delay = 120 * cont;
			$('.alternativa').eq(cont).delay(delay).fadeIn('slow');
		}
	}
	
	if(nivel == 3){
		valor = 5;
		totalPreguntas = 20;
		for(var cont = 0; cont < 7; cont++){
			var delay = 120 * cont;
			$('.alternativa').eq(cont).delay(delay).fadeIn('slow');
		}
	}
	
	feedBackBuena = ['Muy bien', 'Excelente', 'Genial'];
    feed = Math.floor(Math.random() * 3);
}
//corazon del juego
function juegoMat3(){
	$('.contenedor-pregunta .lente-pregunta').removeClass('lente-salida lente-final');
	//$('.contenedor-pregunta .presentador').removeClass('slide-top');
	setTimeout(function(){
		//$('.contenedor-pregunta .mesa-cartas').removeClass('slide-top');
		//$('.contenedor-pregunta .cartas-pregunta').removeClass('entrada');
		$('.pokerhand-left').removeClass('enterhand-left');
	}, 300);
	setTimeout(function(){
		$('.papel').removeClass('top-papel');
		//$('.pokerhand-right').removeClass('enterhand-right');
		alternativas3();
	}, 800);
	
	var respuestaMuestra = ".juego-mat-" + juegoActive + "-active .opciones-juego" + nivel;
	
	
	
	//console.log("numSelected "+ numSelected );
	
	this.$alternativa = $(respuestaMuestra).find(".alternativa");
	
	$(".boton-confirmar").click(function(){
		evaluacion();
	});
	
	//esta es la función de evaluacion
	function evaluacion(){
		
		var numSelected;
		var numSelected1 = "";
		
		diferencia = minuendo - sustraendo;
		$(".result").append(diferencia.toString());
		
		//var numero = parseInt($(".numero-principal").text());
		switch(nivel){
			case 1:
			numSelected = parseInt($(".num.select").text());
				break;
			case 2: 
				numSelected1 = $(".password .num.select").text() + $(".password2 .num.select").text(); 
				console.log("numSelected1 " , numSelected1);
				numSelected = parseInt(numSelected1);
				
				break;
			case 3: 
				numSelected1 = $(".password .num.select").text() + $(".password2 .num.select").text() + $(".password3 .num.select").text(); 
				
				console.log("numSelected1 " , numSelected1);
				
				numSelected = parseInt(numSelected1);
				break;
		}
		
		
		console.log("evaluacion " , numSelected);
		
		
		if(numSelected == diferencia){
			correcta();
		}else{
			incorrecta();
		}	
	}
	
	function correcta(){
		console.log("correcta");
		$('.feed-back').addClass('feed-back-active');
		$('.buena').html('<h2>' + feedBackBuena[feed] + '</h2>');
		$('.buena, .respuesta').fadeIn('slow');
		i++;
		correct++;
		score(valor);
		removeMat3();
		validadorPista();
		if(sonidoGeneral == 0){
			$('audio')[7].play();
		}
	}
	
	function incorrecta(){
		console.log("incorrecta");
		$('.feed-back').addClass('feed-back-active');
		$('.mala').fadeIn('slow');
		i++;
		score(0);
		removeMat3();
		window.navigator.vibrate(500);
		if(sonidoGeneral == 0){
			$('audio')[6].play();
		}
	}
}
//remove de muestra
function removeMat3(){
	removeJuegoComun();
	//$('.alternativa').off();
	//$('.contenedor-pregunta .cartas-pregunta').addClass('entrada');
	setTimeout(function() {
		$('.juego-mat-' + juegoActive + '-active .fondo-caja, .juego-mat-' + juegoActive + '-active .puerta-caja, .juego-mat-' + juegoActive + '-active .pokerhand-left, .juego-mat-' + juegoActive + '-active .password-move, .boton-confirmar').fadeOut('slow');
	}, 1000);
	setTimeout(function() {
		$('.juego-mat-' + juegoActive + '-active .fondo-caja, .juego-mat-' + juegoActive + '-active .puerta-caja, .juego-mat-' + juegoActive + '-active .pokerhand-left, .juego-mat-' + juegoActive + '-active .password-move, .boton-confirmar').remove();
	}, 2000);
	setTimeout(function() {
		//$('.presentador').removeClass('cara-bad cara-nice');
		creacionMat3();
	}, 2500);
}