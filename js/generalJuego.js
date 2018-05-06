//general juego
//create juego
function createJuego(name1, name2, juegosHide){
	$(name1 + '.juego-small').on('click', function(){
		//remove swipe
		var targetElement = document.getElementById('move');
		removeMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
		removeMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
		removeMultipleListeners(targetElement, 'mouseup touchend', swipeEnd);
		
		sonidoBtn();
		$(juegosHide).hide();
		juegoEnConsola = name1;
		backPosition = 4;
		juegosComun();
		if(evaluadorBack){
			evaluadorBackSmall();
		}
		$(name1 + '.juego-small').off();
		$(name2 + '.juego-small').addClass('slide-top');
		setTimeout(function() {
			$(name1).removeClass('juego-small').addClass('juego-open');
		}, 500);
		setTimeout(function() {
			$(name1).removeClass('juego-datos');
			$(name2 + '.juego-small').hide();
		}, 1000);
		/*if(sonidoGeneral == 0){
			$('.audio-6').prop('volumen', 0.5);
			$('audio')[5].play();
		}*/
		return evaluadorBack = false;
	});
}
//vista comun de juego
function juegosComun(){
	$('.nivel-1 h2, .nivel-2 h2, .nivel-3 h2, .puntos, .back-small').show();
	$('.perfil, .menu-juego-perfil').addClass('slide-bottom');
	$('.header-juego').addClass('header-juego-active');
	setTimeout(function() {
		$('.categoria-juego').removeClass('juego-small');
		$('.categoria-juego').removeClass('juego-datos');
	}, 1200);
}
//juego de mat
function juego1(){
	createJuego('.juego-mat-1', '.juego-mat-2', '.juego-mat-3, .juego-mat-4');
}
function juego2(){
	createJuego('.juego-mat-2', '.juego-mat-1', '.juego-mat-3, .juego-mat-4');
}
function juego3(){
	createJuego('.juego-mat-3', '.juego-mat-4', '.juego-mat-1, .juego-mat-2');
}
//funciones del juego//
//comienza juego dependiendo del nivel
function beginGame(id){
	$('.juego-mat-' + id + ' .nivel-1 h2').on('click', function(){
		sonidoBtn();
		nivel = 1;
		trofeoGame(id);
		sonido = 6;
		sonidoApp(sonido);
	});
	$('.juego-mat-' + id + ' .nivel-2 h2').on('click', function(){
		sonidoBtn();
		nivel = 2;
		trofeoGame(id);
		sonido = 6;
		sonidoApp(sonido);
	});
	$('.juego-mat-' + id + ' .nivel-3 h2').on('click', function(){
		sonidoBtn();
		nivel = 3;
		trofeoGame(id);
		sonido = 6;
		sonidoApp(sonido);
	});
}
//arranque del juego en modo basico
var juegoActive;
function trofeoGame(id){
	juegoActive = id;
	//openTutorial = id;
	//tutorial();
	createScene(juegoActive);
}
function createScene(juegoActive){
	backPosition = 6;
	if(pista != totalPista){
		pistaCreate(juegoActive);
	}

	if(juegoActive == 1){
		comunCreadorMat1();
	}else if(juegoActive == 2){
		comunCreadorMat2();
		setTimeout(function(){
			$('.score').addClass('score-calculadora');
		}, 10);
	}else if(juegoActive == 3){
		comunCreadorMat3();
	}

	$('.consola').append('<div class="division-4"></div>	<div class="lente-score"><div class="score"><div class="score-trofeo-' + nivel + '"><div class="soporte"></div></div><p>' + puntaje + ' pt<br><small class="contador">0 / 5</small></p></div></div>');

	switch(nivel){
		case 1:
			$('.score-trofeo-' + nivel).append('<div class="trofeo-basico"></div>');
		break;
		case 2:
			$('.score-trofeo-' + nivel).append('<div class="trofeo-medio"></div>');
		break;
		case 3:
			$('.score-trofeo-' + nivel).append('<div class="trofeo-avanzado"></div>');
		break;
	}

	menuCreate();
	shuffle(number);
	setTimeout(function() {
		$('.menu-juego').removeClass('menu-in');
		if(juegoActive == 1){
			creacionMat1();
		}else if(juegoActive == 2){
			creacionMat2();
		}else if(juegoActive == 3){
			creacionMat3();
		}
		menuJuegoActive();
	}, 300);
}
//random
function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;
	
	while(0 != currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
//puntaje y desbloqueo de copa
function generalEvaluador(mejorPuntaje, scoreTrofeo, juegoActivo, nivel, nivelNext, insignia, juegoDashboard, copa, dificultad){
	$('.score p').empty();
	if(mejorPuntaje < puntaje){
		mejorPuntaje = puntaje;
		savePuntaje(mejorPuntaje);
		nuevoRecord();
		if (mejorPuntaje >= 100){
			$('.bloqueo').remove();
			$('.score' + scoreTrofeo).addClass('ganado');
			$(juegoActivo + ' ' + nivel + ' ' + '.puntos').addClass('puntos-active');
			$(juegoActivo + ' ' + nivel).addClass('superado');
			$(juegoActivo + ' ' + insignia).show();
			$(juegoActivo + ' ' + nivelNext + ' ' + '.bloqueado').hide();
			$(juegoActivo + ' ' + nivel + ' ' + '.imagen-nivel').removeClass('copa-bloqueada');
			celebracion();
			totalCopasDashboard(copa, juegoDashboard);
		}
		$(juegoActivo + ' ' + nivel + ' ' + '.puntos').empty();
		$(juegoActivo + ' ' + nivel + ' ' + '.puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntaje + ' pt<b> / 100 pt</b>');
		setTimeout(function() {
			$('.score p').append('<small>Puntaje</small>' + puntaje + ' pt<br><br><b><small class="opacity-out">Hola</small>' + mejorPuntaje + ' pt</b>').removeClass('lente-salida');
		}, 500);
	}else{
		setTimeout(function() {
			$('.score p').append('<small>Puntaje</small>' + puntaje + ' pt<br><br><b><small>Mejor puntaje</small>' + mejorPuntaje + ' pt</b>').removeClass('lente-salida');
		}, 500);
	}
	evaluacionComun(mejorPuntaje, dificultad);

	return mejorPuntaje;
}
//evaluacion de los juegos
function evaluacion(name, Name, puntajeEvaluacion, Dificultad, dificultad, total){
	while(i == total){
		var nivelNext = nivel + 1;
		var storage = generalEvaluador(puntajeEvaluacion, '.score-trofeo-' + nivel + ' .trofeo-' + dificultad, '.juego-' + name, '.nivel-' + nivel, '.nivel-' + nivelNext, '.insignia-' + nivel, Name, 'copa' + Dificultad + Name, dificultad);
	}
}
//save de mejor puntaje
function savePuntaje(storage){
	if(juegoActive == 1){
		if(nivel == 1){
			mejorPuntajeBasicoMat1 = storage;
			localStorage.puntajeBasicoMat1 = storage;
		}else if(nivel == 2){
			mejorPuntajeMedioMat1 = storage;
			localStorage.puntajeMedioMat1 = storage;
		}else{
			mejorPuntajeAvanzadoMat1 = storage;
			localStorage.puntajeAvanzadoMat1 = storage;
		}
	}
	
	if(juegoActive == 2){
		if(nivel == 1){
			mejorPuntajeBasicoMat2 = storage;
			localStorage.puntajeBasicoMat2 = storage;
		}else if(nivel == 2){
			mejorPuntajeMedioMat2 = storage;
			localStorage.puntajeMedioMat2 = storage;
		}else{
			mejorPuntajeAvanzadoMat2 = storage;
			localStorage.puntajeAvanzadoMat2 = storage;
		}
	}

	if(juegoActive == 3){
		if(nivel == 1){
			mejorPuntajeBasicoMat3 = storage;
			localStorage.puntajeBasicoMat3 = storage;
		}else if(nivel == 2){
			mejorPuntajeMedioMat3 = storage;
			localStorage.puntajeMedioMat3 = storage;
		}else{
			mejorPuntajeAvanzadoMat3 = storage;
			localStorage.puntajeAvanzadoMat3 = storage;
		}
	}
}
//evaluacion comun
function evaluacionComun(evaluacionPuntaje, dificultad){
	if(evaluacionPuntaje != 100 && evaluacionPuntaje < 100){
		$('.score').append('<div class="bloqueo score-salida"></div>');
	}
	
	complete(dificultad);
	i = 0;
	
	if(juegoActive == 1){

	}else if(juegoActive == 2){

	}else if(juegoActive == 3){

	}
}
//evalucaion comun para los juegos
function totalCopasDashboard(copa, juego){
	if(nivel == 1){
		var copa1 = 'copaBasico' + juego;
	}else if(nivel == 2){
		var copa2 = 'copaMedio' + juego;
	}else if(nivel == 3){
		var copa3 = 'copaAvanzado' + juego;
	}
	//add copa
	if(copa == copa1){
		totalCopasBasico++;
		$('.total-copa-basico').empty().append(totalCopasBasico);
	}else if(copa == copa2){
		totalCopasMedio++;
		$('.total-copa-medio').empty().append(totalCopasMedio);
	}else if(copa == copa3){
		totalCopasAvanzado++;
		$('.total-copa-avanzado').empty().append(totalCopasAvanzado);
	}
}
//nuevo record
function nuevoRecord(){
	$('.score').append('<div class="nuevo-puntaje score-salida">Nuevo record</div>');
}
//imprime el puntaje
function score(valor){
	puntaje = puntaje + valor;
	$('.score p').empty();
	$('.score p').append(puntaje + ' pt<br><small class="contador">' + i + ' / ' + totalPreguntas + '</small>');
}
//complete de los juegos
function complete(dificultad){
	if(puntaje >= 100){
		desbloqueoPersonajes = localStorage.getItem('personajesDesbloqueadosMat') || '<empty>';
		if(nivel == 1 && desbloqueoPersonajes == '<empty>'){
			$('.ingreso-avatar-perfil .personaje.no').off();	
			$('.ingreso-avatar-perfil .personaje.no').removeClass('no').addClass('si');
			localStorage.personajesDesbloqueadosMat = 'desbloqueo';
			notificacionPersonaje('personajes');
		}
		$('.score .score-trofeo-' + nivel + ' .trofeo-' + dificultad).addClass('ganado');
		celebracion();
		completeGeneral();
	}else{
		completeGeneral();
	}
	
	function botonResetActive(){
		$('.repeat-juego').on('click', function(){
			sonidoBtn();
			reseteoJuego();
		});
	}
	
	function botonSalirActive(){
		$('.fin-juego').on('click', function(){
			sonidoBtn();
			sonido = 7;
			sonidoApp(sonido);
			finJuego();
		});
	}
	
	function completeGeneral(){
		backPosition = 0;
		var opcion = ".opciones-juego" + nivel;
		var juego = "juego-" + nivel;
		
		$(opcion).removeClass(juego);
		
		$('.lente-score').addClass('active');
		$('.score').addClass('score-active');
		$('.menu-juego').addClass('right-out');
		
		salidaMenuJuego();
		removePista();
		$('.lente-pregunta').addClass('lente-final');
		$('.score p').addClass('lente-salida').empty();
		$('.score').append('<div class="repeat-juego score-salida"><i class="fa fa-repeat"></i> Repetir</div><div class="fin-juego score-salida"><i class="fa fa-sign-out"></i> Salir</div>');
		setTimeout(function() {
			if(pistaRestantes < 5){
				$('.score').append('<div class="recuperar-ayuda video score-salida" onClick="showInterstitial()"><i class="ayuda-recuperacion"></i> Puedes ver este anuncio y recuperar tus ayudas</div>');
				$('.recuperar-bloqueado').off();
				recuperarAyuda();
			}else{
				$('.score').append('<div class="recuperar-ayuda recuperar-bloqueado score-salida"><i class="ayuda-recuperacion"></i> Puedes ver este anuncio y recuperar tus ayudas</div>');
				$('.recuperar-ayuda').off();
				$('.recuperar-bloqueado').on('click', function(){
					sonidoBtn();
					mensajeToast('addCredito', 'Ya tienes todas tus ayudas');
				});
			}
			$('.nuevo-puntaje, .repeat-juego, .fin-juego, .bloqueo, .recuperar-ayuda').removeClass('score-salida');
		}, 700);
		botonResetActive();
		botonSalirActive();
	}
}
//constructor de menu de juego
function menuCreate(){
	$('.consola').append('<div class="menu-juego menu-in"><div class="menu-juego-lente"></div><div class="cont-menu-juego"><h2 class="score-salida">Opciones</h2><div class="repeat-juego score-salida"><i class="fa fa-repeat"></i> Repetir</div><div class="fin-juego score-salida"><i class="fa fa-sign-out"></i> Salir</div></div><div class="menu-open"><i class="fa fa-times-circle"></i></div><div class="cerrar-menu-juego"><i class="fa fa-bars"></i></div></div>');
	$('.menu-juego .menu-open').hide();
	sonidoBtn();
}
function openMenuJuego(){
	backPosition = 7;
	$('.menu-juego .menu-open').show();
	$('.menu-juego .cerrar-menu-juego').hide();
	$('.menu-juego').addClass('menu-juego-active');
	setTimeout(function() {
		$('.cont-menu-juego').addClass('cont-menu-juego-active');
	}, 500);
	setTimeout(function() {
		$('.cont-menu-juego h2, .repeat-juego, .fin-juego').removeClass('score-salida');
	}, 1000);
}
//menu juego entrada
function menuJuegoActive(){
	menuJuegoBotonOpen();
	function menuJuegoBotonOpen(){
		$('.cerrar-menu-juego').on('click', function(){
			sonidoBtn();
			onBackKeyDown();
			menuJuegoBotonOpenOff();
			setTimeout(function(){
				menuJuegoBotonClose();
			}, 1200);
            /*if(sonidoGeneral == 0){
                $('.audio-6').prop('volumen', 0.5);
                $('audio')[5].play();
		    }*/
		});
	}
	function menuJuegoBotonClose(){
		$('.menu-juego .menu-open, .menu-juego .menu-juego-lente').on('click', function(){
			sonidoBtn();
			onBackKeyDown();
			menuJuegoBotonCloseOff();
			setTimeout(function(){
				menuJuegoBotonOpen();
			}, 1200);
            /*if(sonidoGeneral == 0){
                $('.audio-6').prop('volumen', 0.5);
                $('audio')[5].play();
		    }*/
		});
	}
	function menuJuegoBotonOpenOff(){
		$('.cerrar-menu-juego').off();
	}
	function menuJuegoBotonCloseOff(){
		$('.menu-juego .menu-open, .menu-juego .menu-juego-lente').off();
	}
	$('.menu-juego .cont-menu-juego .fin-juego').on('click', function(){
		sonidoBtn();
		sonido = 7;
		sonidoApp(sonido);
		finJuego();
	});
	$('.menu-juego .cont-menu-juego .repeat-juego').on('click', function(){
		sonidoBtn();
		reseteoActividad();
		setTimeout(function(){
			menuJuegoBotonOpen();
		}, 1200);
	});
}
//salida de menu
function salidaMenuJuego(){
	backPosition = 6;
	$('.cont-menu-juego h2, .repeat-juego, .fin-juego').addClass('score-salida');
	setTimeout(function() {
		$('.cont-menu-juego').removeClass('cont-menu-juego-active');
		$('.cerrar-menu-juego').show();
		$('.menu-juego .menu-open').hide();
	}, 500);
	setTimeout(function() {
		$('.menu-juego').removeClass('menu-juego-active');
	}, 1000);
}
//remove header cuando el juego se activa
function removeHeader(){
	$('.header-juego').removeClass('top-2');
	setTimeout(function() {
		$('.juego, .header-juego').hide();
	}, 1000);
}
//constructor de pista
function pistaCreate(juegoActive){
	if(pistaOpen == 'false'){
		setTimeout(function() {
			$('.consola').append('<div class="contador-pista opacity-out"></div><div class="pista"><div class="ayuda"></div></div>');
			$('.contador-pista').empty();
			$('.contador-pista').append(pistaRestantes);
		}, 300);
		var pistaClass = 'pista-active-' + juegoActive;
		setTimeout(function() {
			$('.ayuda').fadeIn('slow');
			$('.pista').addClass('pista-agotada ' + pistaClass);
			pistaActive(pistaClass, juegoActive);
		}, 800);
		setTimeout(function() {
			$('.contador-pista').removeClass('opacity-out');
		}, 1500);
		pistaOpen = 'true';
	}else{
		var pistaClass = 'pista-active-' + juegoActive;
		$('.' + pistaClass).off();
		pistaActive(pistaClass, juegoActive);
	}
}
//pista y acciones para cada juego
function pistaActive(pistaClass, juegoActive){
	$('.' + pistaClass).on('click', function(){
		sonidoBtn();
		pistaComun();
		if(juegoActive == 1){
			$('.carta.nice').addClass('active');
		}
		if(juegoActive == 2){
			funcionAyuda();
		}
		if(juegoActive == 3){

		}
	});
	
	function pistaComun(){
		$('.pista').addClass('active');
		pista++;
		usoPista = 1;
		contadorPista();
		if(sonidoGeneral == 0){
			$('audio')[8].play();
		}
	}
}
//contador de pistas
function contadorPista(){
	//if(pista == totalPista){
	if(pista == 100){
		removePista();
	}else if(pista != totalPista){
		pistaRestantes = totalPista - pista;
		localStorage.totalPistasMat = pistaRestantes;
		$('.contador-pista').empty();
		$('.contador-pista').append(pistaRestantes);
	}
	
	if(usoPista == 1){
		$('.pista').off();
	}
}
//remover pista
function removePista(){
	if(pista == totalPista){
		totalPista = 0;
		pista = 0;
		localStorage.totalPistasMat = totalPista;
	}
	
	$('.contador-pista').addClass('opacity-out');
	setTimeout(function() {
		$('.ayuda').fadeOut('slow');
		$('.pista').removeClass('pista-agotada');
	}, 500);
	setTimeout(function() {
		$('.pista, .contador-pista').remove();
	}, 1200);
	
	pistaOpen = 'false';
}
//validador de pistas
function validadorPista(){
	if(usoPista == 1){
		validadorComun();
		/*$('.cont-ayuda .pista-nombre').addClass('opacity-out');
		setTimeout(function() {
			$('.cont-ayuda').addClass('inicio opacity-out');
		}, 800);
		setTimeout(function() {
			$('.cont-ayuda').remove();
		}, 1600);*/
	}
	
	function validadorComun(){
		usoPista = 0;
		$('.pista').removeClass('active');
		setTimeout(function() {
			var pistaClass = 'pista-active-' + juegoActive;
			pistaActive(pistaClass, juegoActive);
		}, 2000);
	}
}
//validar si esta conectado a internet
function checkNetConnection(){
	online = window.navigator.onLine;
	if (navigator.onLine) {
		re = true;
	} else {
		re = false;
	}
	return re;
}
//recuperar las ayudas
var oddPosition;
function recuperarAyuda(){
	$('.recuperar-ayuda.video').on('click', function(){
		sonidoBtn();
		oddPosition = backPosition;
		backPosition = 0;
		if(videoDescarga == 0){
			$('.container-table').append('<div class="lente-publicidad transition">	<div class="loader"><i></i><i></i><i></i><i></i></div>	<p>Cargando</p>	</div>');
			$('body').append('<div id="video"></div>');
			setTimeout(function(){
				$('.lente-publicidad').addClass('active');
			}, 200);
			setTimeout(function(){
				if(videoDescarga == 0){
					recuperarPistaError = 1;
                    if(openMensaje == 0){
                        openMensaje = 1;
                        mensajeToast();
                    }
                    $('.lente-publicidad').removeClass('active');
					setTimeout(function(){
						$('.lente-publicidad, #video').remove();
						backPosition = oddPosition;
					}, 200);
				}
			}, 30000);
		}else{
			backPosition = oddPosition;
			recuperarPistaDesconectado = 1;
			if(openMensaje == 0){
				openMensaje = 1;
				mensajeToast();
			}
		}
	});
}
//error en carga del video
function errorDescargaVideo(){
	recuperarPistaError = 1;
	if(openMensaje == 0){
		openMensaje = 1;
		mensajeToast();
	}
	$('.lente-publicidad').removeClass('active');
	setTimeout(function(){
		$('.lente-publicidad, #video').remove();
		backPosition = oddPosition;
	}, 200);
}
//recuperacion de las pistas y despliegue de la publicidad
function recuperado(){
	backPosition = oddPosition;
	pistasRecuperadas = 1;
	if(openMensaje == 0){
		openMensaje = 1;
		setTimeout(function(){
			mensajeToast();
		}, 1000);
	}
	pista = 0;
	totalPista = 5;
	pistaRestantes = 5;
	localStorage.totalPistas = totalPista;
	$('.lente-publicidad').removeClass('active');
	setTimeout(function(){
		$('.lente-publicidad, #video').remove();
	}, 200);
	$('.recuperar-ayuda').addClass('recuperar-bloqueado');
	$('.recuperar-ayuda').removeAttr('onclick');
	$('.recuperar-ayuda').removeClass('video');
	$('.recuperar-ayuda').off();
	$('.contador-pista').empty();
    videoDescarga = 0;
}
//celebracion
function celebracion(){
	var dat = ".score .score-trofeo-" + nivel;
	
	$(dat).append('<div class="confeti confeti-left score-salida"></div><div class="confeti confeti-right score-salida"></div>');
	$(dat).append('<div class="winner winner-1 score-salida"></div>');
	$(dat).addClass('triunfo');
	setTimeout(function() {
		$('.winner, .confeti').removeClass('score-salida');
		$('.confeti').addClass('confeti-animate');
	}, 600);
}
//remove comun
function removeJuegoComun(){
	setTimeout(function() {
		$('.feed-back').removeClass('feed-back-active');
		$('.buena, .mala, .cont-ayuda').fadeOut('slow');
		$('.contenedor-pregunta .pregunta').addClass('salida');
		$('.contenedor-pregunta .lente-pregunta').addClass('lente-salida');
		$('.opciones-juego1, .opciones-juego2, .opciones-juego3').empty();
	}, 2000);
	setTimeout(function() {
		$('.contenedor-pregunta .lente-pregunta').removeClass('lente-0 lente-1 lente-2 lente-3 lente-4 lente-5 lente-6 lente-7');
		$('.contenedor-pregunta .pregunta, .contenedor-pregunta .cont-ayuda').remove();
		$('.feed-back').empty();
	}, 2500);
}
function reseteoActividad(){
	salidaMenuJuego();
	reseteoGeneral();
	$('.pista, .menu-open, .cerrar-menu-juego').off();
	setTimeout(function() {
		var pistaClass = 'pista-active-' + juegoActive;
		pistaActive(pistaClass, juegoActive);
	}, 2000);
}
//reset juegos
function reseteoJuego(){
	reseteoGeneral();
	$('.menu-juego').removeClass('right-out');
	$('.lente-score').removeClass('active');
	if(puntaje == 100){
		$('.confeti').removeClass('confeti-animate');
		$('.winner, .confeti').addClass('score-salida');
	}
	setTimeout(function() {
		$('.trofeo-basico, .trofeo-medio, .trofeo-avanzado').removeClass('ganado');
		$('.score').removeClass('score-active');
		$('.score-trofeo-1, .score-trofeo-2, .score-trofeo-3').removeClass('triunfo');
		if(pista != totalPista){
			pistaCreate(juegoActive);
		}
	}, 1000);
	setTimeout(function() {
		$('.winner, .confeti').remove();
		$('.menu-juego').removeClass('menu-in');
	}, 1500);
}

function reseteoGeneral(){
	backPosition = 6;
	reseteoComun();
	setTimeout(function() {
		var opcionRemove = ".opciones-juego" + nivel;
		var juegoRemove = "juego-" + nivel;
		numberCreate = 0;
		puntaje = 0;
		i = 0;

		$(opcionRemove).removeClass(juegoRemove).empty();
		
		$('.contenedor-pregunta .lente-pregunta').removeClass('lente-0 lente-1 lente-2 lente-3 lente-4 lente-5 lente-6 lente-7');
		$('.nuevo-puntaje, .score .fin-juego, .score .repeat-juego, .bloqueo, .contenedor-pregunta .pregunta, .recuperar-ayuda, .cont-ayuda').remove();
		$('.score p').empty().append('0 pt<br><small class="contador">' + i + ' / ' + totalPreguntas + '</small>');
		shuffle(number);

		if(juegoActive == 1){
			creacionMat1();
		}
		if(juegoActive == 2){
			timerTime = 1000;
			clearTimeout(controlador1);
			clearTimeout(controlador2);
			resetCalculadora = true;
			creacionMat2();
		}if(juegoActive == 3){
			creacionMat3();
		}
	}, 1000);
	setTimeout(function() {
		$('.score, .contenedor-pregunta, .opciones-juego1, .opciones-juego2, .opciones-juego3, .lente-pregunta, .juego-mat-1-active, .juego-mat-2-active').removeClass('score-salida');
	}, 2000);
}

function reseteoComun(){
	$('.score, .cont-menu-juego .repeat-juego, .cont-menu-juego .fin-juego, .recuperar-ayuda, .lente-pregunta, .juego-mat-1-active, .juego-mat-2-active').addClass('score-salida');
	$('.pista').removeClass('active');
}

function finJuego(){
	backPosition = 4;
	$('.juego, .header-juego').show();
	$('.juego-mat-' + juegoActive + ' .nivel-1 h2, .juego-mat-' + juegoActive + ' .nivel-2 h2, .juego-mat-' + juegoActive + ' .nivel-3 h2').off();
	reseteoComun();
	salidaMenuJuego();
	removePista();
	setTimeout(function() {
		$('.menu-juego').addClass('menu-in');
	}, 500);
	setTimeout(function() {
		$('.nuevo-puntaje').remove();
		$('.consola').removeClass('jugando');
		$('.header-juego').addClass('top-2');
		$('.score p').empty();
		$('.score p').append('0 pt');
		numberCreate = 0;
		puntaje = 0;
		i = 0;
	}, 1000);
	setTimeout(function() {
		$('.consola').remove();
		if(juegoActive == 2){
			timerTime = 1000;
			clearTimeout(controlador1);
			clearTimeout(controlador2);
		}if(juegoActive == 3){
		
		}
		beginGame(juegoActive);
		juegoActive = 0;
	}, 2200);
}