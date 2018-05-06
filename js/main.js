document.getElementById("cargador").addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//variables generales
var datosBorrados = 0;
//pistas
var recuperarPistaDesconectado = 0;
var recuperarPistaError = 0;
var pistasRecuperadas = 0;
var creditoExtra = 0;
//navegacion
var backPosition = 0;
var openMensaje = 0;
var menuPerfil = 0;
var createOpcion1 = false;
var createOpcion2 = false;
var evaluadorBack = true;
//datos de usuario
var nombreIn = 0;
var avatarIn = 0;
var cambioNombreIn = 0;
var cambioAvatarIn = 0;
var cambioNombreOut = 0;
var cambioAvatarOut = 0;
var nombreBlanco = '';
var avatarSeleccionadoPerfil = '';
var nombreCreado = '';
var avatarSeleccionado = '';
//variable vibracion
window.navigator.vibrate = window.navigator.vibrate || window.navigator.webkitVibrate;
//juego seleccionado
var totalGame = 4;
var juegoEnConsola;
//variables comunes
var nivel = 0;
var correct = 0;
var puntaje = 0;
var pista = 0;
var usoPista = 0;
var pistaOpen = 'false';
//datos para crear las actividades
var numberCreate = 0;
var i = 0;
//total de actividades
var number = [0, 1, 2, 3, 4];
var numberAlternativa = [0, 1, 2, 3];
//preguntas
var preguntaDrag;
//variables vacias
var totalPista, pistaRestantes;
//datos de copas
var copaBasicoMat1, copaMedioMat1, copaAvanzadoMat1, copaBasicoMat2, copaMedioMat2, copaAvanzadoMat2, copaBasicoMat3, copaMedioMat3, copaAvanzadoMat3, copaBasicoMat4, copaMedioMat4, copaAvanzadoMat4;
//sonido
var sonidoGeneral;
var btnSonido;
var sonido;
//precarga de imagenes
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
//documento ready
$(document).ready(function(){
	$(['image/iconoBloqueo.svg', 'image/iconoNo.svg', 'image/icono.svg', 'image/logo-intro.svg', 'image/icono-2.svg', 'image/ayuda.svg', 'image/cara-nice-portada.svg', 'image/cara-nice.svg', 'image/cara-bad.svg', 'image/personaje-1.svg', 'image/personaje-2.svg', 'image/personaje-3.svg', 'image/personaje-4.svg', 'image/personaje-5.svg', 'image/personaje-6.svg', 'image/personaje-7.svg', 'image/personaje-8.svg', 'image/personaje-9.svg', 'image/personaje-10.svg', 'image/personaje-11.svg', 'image/personaje-12.svg', 'image/personaje-13.svg', 'image/personaje-14.svg', 'image/personaje-15.svg', 'image/personaje-16.svg', 'image/icono-juego-1.svg', 'image/icono-juego-2.svg', 'image/icono-juego-3.svg', 'image/icono-juego-4.svg', 'image/contenido-0.svg', 'image/contenido-1.svg', 'image/contenido-2.svg', 'image/contenido-3.svg', 'image/contenido-4.svg', 'image/contenido-5.svg', 'image/contenido-0-1.svg', 'image/contenido-1-1.svg', 'image/contenido-2-1.svg', 'image/contenido-3-1.svg', 'image/contenido-4-1.svg', 'image/contenido-5-1.svg']).preload();
	ready();
});
//funcion de arranque
function ready(){
	//se leen los datos guardados
	lecturaDatos();
	//pistas
	totalPista = totalPistaData;
	pistaRestantes = totalPista;
	//puntaje
	//juego 1
	mejorPuntajeBasicoMat1 = puntajeBasicoMat1;
	mejorPuntajeMedioMat1 = puntajeMedioMat1;
	mejorPuntajeAvanzadoMat1 = puntajeAvanzadoMat1;
	//juego 2
	mejorPuntajeBasicoMat2 = puntajeBasicoMat2;
	mejorPuntajeMedioMat2 = puntajeMedioMat2;
	mejorPuntajeAvanzadoMat2 = puntajeAvanzadoMat2;
	//juego 3
	mejorPuntajeBasicoMat3 = puntajeBasicoMat3;
	mejorPuntajeMedioMat3 = puntajeMedioMat3;
	mejorPuntajeAvanzadoMat3 = puntajeAvanzadoMat3;
	//juego 4
	mejorPuntajeBasicoMat4 = puntajeBasicoMat4;
	mejorPuntajeMedioMat4 = puntajeMedioMat4;
	mejorPuntajeAvanzadoMat4 = puntajeAvanzadoMat4;
	//sonido
    sonidoGeneral = sonido;
    btnSonido = botonSonido;
    //crear portada
    createPortada();
	//al terminar la carga
	$(window).load(function(){
		//sonido de la app
		sonido = 0;
		sonidoApp(sonido);
		//fastclick
		$(function() {
    		FastClick.attach(document.body);
		});
		setTimeout(function() {
			//animación de entrada
        	$('.fondo').addClass('top');
			$('.container').show().addClass('top-2');
			sonido = 1;
			sonidoApp(sonido);
    	}, 3000);
		setTimeout(function() {
        	$('.fondo').remove();
    	}, 4000);
		//ganar creditos
		$('.logo-titulo').on('click', function(){
			addCreditos();
		});
		//boton entrar
		$('.entrar').on('click', function(){
			backPosition = 1;
			$('.titulo').addClass('left-negativo');
			setTimeout(function() {
				$('.titulo').remove();
    		}, 1000);
			sonido = 2;
			sonidoApp(sonido);
			sonidoBtn();
			inicio();
			calificacioApp();
		});
	});
};
//inicio de la app
function inicio(){
	createMenuGeneral();
	menuGeneral();
	subMenuGeneral();
}
//ganar creditos
function addCreditos(){
	if(addCredito == '<empty>'){
		$('.logo-titulo .pregunta .cara').addClass('cara-nice');
		totalPista += 3;
		pistaRestantes = totalPista;
		creditoExtra = 1;
		if(openMensaje == 0){
			openMensaje = 1;
			mensajeToast('addCredito', 'Haz ganado 3 ayudas');
		}
		addCredito = 'usado';
		localStorage.addCreditoMat = addCredito;
		localStorage.totalPistasMat = totalPista;
		window.navigator.vibrate(1000);
	}
};
//portada
function createPortada(){
	$('.container').append('<div class="titulo"><div class="logo-titulo"><div class="pregunta"><div class="content-cara"><div class="logo-cara"></div></div><div class="cara"><div class="cara-1"></div><div class="cara-2"></div></div></div></div><div class="entrar"><h2 class="boton"><i class="fa fa-sign-in"></i> Entrar</h2></div><small><strong>HeosS®</strong> 2018</small><div class="division-2"></div></div>');
	if(addCredito != '<empty>'){
		setTimeout(function(){
			$('.logo-titulo .pregunta .cara').addClass('cara-nice');
		}, 300);
	}
}
//menu general
function createMenuGeneral(){
	$('.container').append('<div class="menu-general degradacion active-menu">' +
		//inicio contenedor de opciones
		'<div class="opciones-generales">' +
		//opcion 1
		'<div class="opcion-menu-1">	<div class="container-opcion">	<div class="content-image-1">' +
		'<div class="image-opcion-fondo"><div class="muestra"></div></div>	<div class="image-opcion-cal"></div><div class="image-opcion"></div>' +
		'</div>	</div>	<h2 class="menu-general-opcion-1">Mundo Matemático</h2>	</div>' + 
		//opcion 2
		'<div class="opcion-menu-2">	<div class="container-opcion">	<div class="content-image-2">' +
		'<div class="image-opcion-fondo"></div>	<div class="image-opcion"></div>' +
		'<div class="image-opcion-brillo-content">	<div class="brillo-1"></div>	<div class="brillo-2"></div>	</div>' + 
		'</div>	</div>	<h2 class="menu-general-opcion-2">Aprende jugando</h2>	</div>' + 
		//fin contenedor de opciones
		'</div>' +
		//boton cerrar
		'<div class="cerrar"><i class="fa fa-times-circle"></i></div>' +
		//lente
		'<div class="lente-menu"></div>' +
		//menu final
		'<div class="opcion-menu-3 in">	<h2 class="menu-general-opcion-3">Menu</h2>	<div class="opciones-menu-3 opacity-out">	<h2 class="opcion-exit">Salir</h2>	<h2 class="opcion-erase">Borrar datos</h2>	<h2 class="opcion-creditos">Creditos</h2>	<h2 class="opcion-sonido">Sonido <b><b></b></b></h2>	</div>	</div>	</div>');
	//objectos ocultos
	$('.lente-menu, .opciones-menu-3').hide();
	//switch de sonido
	if(botonSonido == 'true'){
        $('.opcion-sonido').addClass('active');
        botonSonido = 'true';
	}else{
		$('.opcion-sonido').removeClass('active');
		botonSonido = 'false';
    }
}
//close menu general
function salidaMenuGeneralNav(){
	$('.menu-general .cerrar').removeClass('opacity-in');
	$('.opciones-generales, .opcion-menu-3').addClass('opacity-out');
	setTimeout(function() {
		$('.menu-general').removeClass('active-menu');
	},700);
	setTimeout(function() {
		$('.menu-general, .menu-general .cerrar, .opciones-generales').hide();
	},1500);
}
//close sub menu general
function salidaMenuGeneral(){
	if(entrada == 0){
		backPosition = 9;
		$('.lente-menu').fadeOut('slow');
		$('.opciones-menu-3').addClass('opacity-out');
		setTimeout(function() {
			$('.opcion-menu-3').removeClass('opcion-3-active');
			$('.opciones-menu-3').hide();
		},300);
	}else{
		backPosition = 1;
		$('.lente-menu').fadeOut('slow');
		$('.opciones-menu-3').addClass('opacity-out');
		setTimeout(function() {
			$('.opcion-menu-3').removeClass('opcion-3-active');
			$('.opciones-menu-3').hide();
		},300);
	}
}
//open menu general
function openMenuGeneralNav(){
	$('.menu-general, .menu-general .cerrar, .opciones-generales').show();
	$('.opciones-generales').addClass('opacity-out');
	setTimeout(function() {
		$('.menu-general').addClass('active-menu');
	},300);
	setTimeout(function() {
		$('.opciones-generales, .opcion-menu-3').removeClass('opacity-out');
		$('.menu-general .cerrar').addClass('opacity-in');
	},700);
}
//menu general de la app
var menuOpcion1 = false;
var menuOpcion2 = false;
function menuGeneral(){
	$('.container').append('<div class="header degradacion">' +
		'<div class="icono"></div>' +
		'<h2>Menu principal</h2>' +
		//'<div class="buscador"><i class="fa fa-search"></i><input type="text" id="tfBuscar" placeholder="Buscar..."></div>' +
		'</div>');
	$('.icono, .header h2').on('click', function(){
		sonidoBtn();
		backPosition = 2;
		onBackKeyDown();
	});
	$('.menu-general .cerrar').on('click', function(){
		sonidoBtn();
		backPosition = 8;
		onBackKeyDown();
	});
	//envia a la tabla
	$('.menu-general .opciones-generales .opcion-menu-1 .menu-general-opcion-1').on('click', function(){
		if(menuOpcion2){
			$('.juego, .menu-juego-perfil, .create-perfil').remove();
			$('.header.header-juego-active').removeClass('header-juego-active');
			if(perfilUndefined){
				perfilUndefined = false;
			}
		}
		sonidoBtn();
		backPosition = 2;
		entrada = 1;
		comunContenido();
		if(!menuOpcion1){
			entradaDashboardContenido();
		}
		setTimeout(function() {
			removeMenu();
		}, 300);
		sonido = 3;
		sonidoApp(sonido);
		menuOpcion2 = false;
		menuOpcion1 = true;
	});
	//envia al dashboard de juegos
	$('.menu-general .opciones-generales .opcion-menu-2 .menu-general-opcion-2').on('click', function(){
		if(menuOpcion1){
			$('.content-contenido').remove();
			menuPerfil = 0;
			evaluadorBackSmall();
		}

		sonidoBtn();

		if(!menuOpcion2){
			evaluadorPerfil();
			/*if(!createOpcion2){
				alert('if if');
				evaluadorPerfil();
			}else{
				alert('if else');
				entradaDashboardJuego();
				for(var p = 0; p < totalGame; p++){
					$('.juego-mat-' + (p + 1)).addClass('slide-top');
				}
				$('.perfil, .menu-juego-perfil').addClass('slide-bottom');
				setTimeout(function(){
					$('.perfil').removeClass('slide-bottom');
				}, 700);
				setTimeout(function() {
					$('.juego-mat-1, .juego-mat-3').removeClass('slide-top');
				}, 900);
				setTimeout(function() {
					$('.menu-juego-perfil').removeClass('slide-bottom');
					$('.juego-mat-2, .juego-mat-4').removeClass('slide-top');
				}, 1200);
				createOpcion2 = true;
			}*/
		}

		comunJuego();
		setTimeout(function(){
			removeMenu();
		}, 300);

		sonido = 3;
		sonidoApp(sonido);
		menuOpcion1 = false;
		menuOpcion2 = true;
	});
}
//adapta menu superior
function removeMenu(){
	$('.opciones-generales, .opcion-menu-3').addClass('opacity-out');
	setTimeout(function() {
		$('.menu-general').removeClass('active-menu');
	}, 600);
	setTimeout(function() {
		removeMenuComun();
	}, 1200);
}
//oculta menu general	
function removeMenuComun(){
	$('.header').addClass('top-2');
	setTimeout(function() {
		$('.menu-general, .menu-general .cerrar, .opciones-generales').hide();
		$('.opcion-menu-3').removeClass('menu-left menu-right');
		$('.opciones-generales').removeClass('opacity-out opcion-active-1 opcion-active-2');
		$('.opcion-menu-1 h2 .sombra-boton, .opcion-menu-2 h2 .sombra-boton').show();
	}, 500);
}
//evaluador de perfil creado
function evaluadorPerfil(){
	for(var p = 0; p < totalGame; p++){
		$('.juego-mat-' + (p + 1) + '.juego-small').off();
		if(p < 2){
			$('.juego-mat-' + (p + 1)).addClass('slide-top');
		}else{
			$('.juego-mat-' + (p + 1)).show().removeClass('slide-top').addClass('juego-datos');
		}
	}
	$('.perfil, .menu-juego-perfil').addClass('slide-bottom');
	backPosition = 2;
	entrada = 1;
	if(nombre == 0){
		comunJuego();
		createPerfil();
	}else{
		comunJuego();
		dashboardJuegoComun();
	}
}
function comunContenido(){
	$('.opcion-menu-3').addClass('menu-right');
	$('.header').removeClass('top-2');
	$('.header').addClass('header-juego');
	$('.header .buscador').fadeIn('slow');
	$('.opciones-generales').addClass('opcion-active-1');
	$('.menu-general .cerrar').removeClass('opacity-in');
}
function comunJuego(){
	$('.opcion-menu-3').addClass('menu-left');
	$('.header').removeClass('top-2');
	$('.header').addClass('header-juego');
	$('.header .buscador').hide();
	$('.opciones-generales').addClass('opcion-active-2');
	$('.menu-general .cerrar').removeClass('opacity-in');
}
//sub menu general
function subMenuGeneral(){
	var exit = 0;
	var erase = 0;
	opcionesSubMenuGeneral();
	
	$('.opcion-menu-3.in').on('click', function(){
		sonidoBtn();
		backPosition = 1;
		$('.opcion-menu-3').addClass('opcion-3-active');
		$('.opciones-menu-3').show();
		setTimeout(function() {
       		$('.opciones-menu-3').removeClass('opacity-out');
			$('.lente-menu').fadeIn('slow');
   		},300);
	});
	//opciones del menu
	function opcionesSubMenuGeneral(){
		$('.lente-menu').on('click', function(){
			sonidoBtn();
			entrada = 1;
			onBackKeyDown();
		});
        $('.opcion-sonido').on('click', function(){
        	sonidoBtn();
            if(btnSonido == 'false'){
                $(this).addClass('active');
                sonidoGeneral = 1;
                localStorage.sonidoGeneralMat = sonidoGeneral;
                sonido = 4;
                sonidoApp(sonido);
                btnSonido = 'true';
                localStorage.botonSonidoMat = btnSonido;
				sonidoBtn();
            }else if(btnSonido == 'true'){
                $(this).removeClass('active');
                sonidoGeneral = 0;
                localStorage.sonidoGeneralMat = sonidoGeneral;
                sonido = 5;
                sonidoApp(sonido);
                btnSonido = 'false';
                localStorage.botonSonidoMat = btnSonido;
				sonidoBtn();
            }
        });
		$('.opcion-exit').on('click', function(){
			sonidoBtn();
			exit = 1;
			cuadroConfimacion();
		});
		$('.opcion-erase').on('click', function(){
			sonidoBtn();
			erase = 1;
			cuadroConfimacion();
		});
		$('.opcion-creditos').on('click', function(){
			sonidoBtn();
			setTimeout(function() {
       			backPosition = 10;
   			},300);
			creador();
		});
	}
	//close sub menu general
	function salidaSubMenuGeneral(){
		$('.lente-menu').fadeOut('slow');
		$('.opciones-menu-3').addClass('opacity-out');
		setTimeout(function() {
			$('.opcion-menu-3').removeClass('opcion-3-active');
			$('.opciones-menu-3').hide();
   		},300);
	}
	//open cuadro de confirmacion
	function cuadroConfimacion(){
		$('.menu-general').append('<div class="dialogo slide-bottom"><h2></h2><div class="boton-dialogo aceptar">Si</div>	<div class="boton-dialogo cancelar">No</div></div>');
		$('.dialogo h2').empty();
		setTimeout(function() {
			backPosition = 0;
       		$('.dialogo').removeClass('slide-bottom');
   		}, 300);
		sonidoBtn();
		$('.lente-menu, .opcion-exit, .opcion-erase, .opcion-creditos, .opcion-sonido').off();
		if(exit == 1){
			$('.dialogo h2').append('¿Quieres salir de Tip?');
			$('.boton-dialogo.aceptar').on('click', function(){
				sonidoBtn();
				navigator.app.exitApp();
				salidaSubMenuGeneral();
				salidaDialogo();
			});
			$('.boton-dialogo.cancelar').on('click', function(){
				sonidoBtn();
				salidaDialogo();
				opcionesSubMenuGeneral();
				backPosition = 1;
				exit = 0;
			});
		}
		if(erase == 1){
			$('.dialogo h2').append('¿Quieres borrar todos los datos?');
			$('.boton-dialogo.aceptar').on('click', function(){
				sonidoBtn();
				datosBorrados = 1;
				eraseData();
				salidaSubMenuGeneral();
				salidaDialogo();
				if(openMensaje == 0){
					openMensaje = 1;
					mensajeToast('siAction', 'Datos borrados');
				}
				opcionesSubMenuGeneral();
				erase = 0;
			});
			$('.boton-dialogo.cancelar').on('click', function(){
				sonidoBtn();
				salidaDialogo();
				opcionesSubMenuGeneral();
				backPosition = 1;
				erase = 0;
			});
		}
	}
	//close cuadro de dialogo
	function salidaDialogo(){
		backPosition = 8;
		$('.dialogo').addClass('slide-bottom');
		setTimeout(function() {
       		$('.dialogo').remove();
   		}, 600);
	}
}
//creador
function creador(){
	$('.container').append('<div class="creador"></div>');
	$('.creador').append('<div class="content-seba">   <div class="resplandor"></div>	<div class="compu"></div>	<div class="seba"></div>	<div class="sombra-compu"></div>  </div>	<div class="credito">	<h2>Créditos</h2>	<p>Información extraida de <b></b>.<br>Desarrollado por <b>HeosS</b> y <b>Patrick</b>.<br>Música por <b></b>.</p>	<a href="#" onclick="openLink(1);" class="boton-credito web"><i class="fa fa-user"></i>   HeosS      </a>	<a href="#" onclick="openLink(2);" class="boton-credito face"><i class="fa fa-soundcloud"></i>Auster  </a>	<a href="#" onclick="openLink(3);" class="boton-credito beha"><i class="fa fa-flask"></i> Sitio web </a>	<small>Versión 1.0</small>	</div>	<div class="cerrar-credito"><div class="sombra-boton"></div><i class="fa fa-times-circle"></i></div>');
	sonidoBtn();
	$('.cerrar-credito').on('click', function(){
		sonidoBtn();
		onBackKeyDown();
		return $('.cerrar-credito').off();
	});
	setTimeout(function(){
		$('.creador').addClass('bounce-entrada');
	}, 300);
}
function openLink(url){
	sonidoBtn();
	if(url == 1){
		window.open('http://www.heoss.cl', '_system', 'location=yes');	
	}else if(url == 2){
		window.open('https://soundcloud.com/ausster', '_system', 'location=yes');	
	}else if(url == 3){
		window.open('http://www.heoss.cl/tip-mundomatematico.html', '_system', 'location=yes');
	}else{
		window.open('https://play.google.com/store/apps/details?id=com.HeosS.Tabla_Periodica', '_system', 'location=yes');
		localStorage.calificadoMat = 'calificado';
	}
}
//close creador
function closeCreador(){
	backPosition = 1;
	$('.creador').removeClass('bounce-entrada');
	setTimeout(function(){
		$('.creador').remove();
	}, 500);
}
//crear perfil de usuario
var perfilUndefined = false;
function createPerfil(){
	$('.container').append('<div class="create-perfil degradacion">' +
		'<div class="container-perfil">' +
		'<div class="ingreso-nombre slide">' +
		'<input maxlength="15" placeholder="Ingresa tu nombre">' +
		'</div>' +
		'<div class="ingreso-avatar slide">' +
		'<p>Elige tu personaje</p>' +
		'<div class="container-personajes">' +
		'<div class="scroller">' +
		'<div class="personaje personaje-0 si" data-personaje="0"></div>' +
		'<div class="personaje personaje-1 si" data-personaje="1"></div>' +
		'<div class="personaje personaje-2 si" data-personaje="2"></div>' +
		'<div class="personaje personaje-3 si" data-personaje="3"></div>' +
		'<div class="personaje personaje-4 si" data-personaje="4"></div>' +
		'<div class="personaje personaje-5 si" data-personaje="5"></div>' +
		'<div class="personaje personaje-6 si" data-personaje="6"></div>' +
		'<div class="personaje personaje-7 si" data-personaje="7"></div>' +
		'<div class="personaje personaje-8 no" data-personaje="8"></div>' +
		'<div class="personaje personaje-9 no" data-personaje="9"></div>' +
		'<div class="personaje personaje-10 no" data-personaje="10"></div>' +
		'<div class="personaje personaje-11 no" data-personaje="11"></div>' +
		'<div class="personaje personaje-12 no" data-personaje="12"></div>' +
		'<div class="personaje personaje-13 no" data-personaje="13"></div>' +
		'<div class="personaje personaje-14 no" data-personaje="14"></div>' +
		'<div class="personaje personaje-15 no" data-personaje="15"></div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div class="guardar slide">Crear</div>' +
		'</div>' +
		'</div>');
	$('.ingreso-nombre input').val('');
	if(perfilUndefined == false){
		perfilUndefined = true;
		clickPersonaje();
		guardarPerfil();
	}
	setTimeout(function() {
		removeMenu();
	}, 300);
	setTimeout(function() {
		$('.ingreso-nombre, .ingreso-avatar').removeClass('slide');
	}, 1200);
	setTimeout(function() {
		$('.guardar').removeClass('slide');
	}, 1400);
	$('.create-perfil').removeClass('out-perfil');
	$('.create-perfil').show();
	//click en personaje
	function clickPersonaje(){
		$('.personaje.si').on('click', function(){
			sonidoBtn();
			avatarSeleccionado = $(this).data('personaje');
			$('.personaje').removeClass('personaje-click avatar-active');
			avatarSeleccionadoPerfil = 'personaje-' + avatarSeleccionado;
			reactivarClickPersonaje();
			$('.personaje').off();
		});
		$('.personaje.no').on('click', function(){
			sonidoBtn();
			cambioAvatarIn = 2;
			if(openMensaje == 0){
				openMensaje = 1;
				mensajeToast('bloqueoIcono', 'Gana una copa');
			}
		});
	}
	//seleccionar personaje
	function reactivarClickPersonaje(){
		$('.personaje-' + avatarSeleccionado).addClass('personaje-click');
		$('.personaje-click').removeClass('avatar-active');
		setTimeout(function() {
			$('.personaje-click').addClass('avatar-active');
			clickPersonaje();
		}, 300);
	}
	//validor de datos para guardar perfil de usuario	
	function guardarPerfil(){
		$('.guardar').on('click', function(){
			sonidoBtn();
			nombreCreado = $('.ingreso-nombre input').val();
			if(nombreCreado == nombreBlanco){
				nombreIn = 1;
				if(openMensaje == 0){
					openMensaje = 1;
					mensajeToast('noAction', 'Ingresa un nombre');
				}
			}else if(nombreCreado != nombreBlanco){
				if(avatarSeleccionadoPerfil != nombreBlanco){
					perfilCreado();
					createOpcion2 = true;
					$('.guardar').off();
				}else{
					avatarIn = 1;
					if(openMensaje == 0){
						openMensaje = 1;
						mensajeToast('noAction', 'Elige un personaje');
					}
				}
			}
		});
	}
	//perfil de usuario creado
	function perfilCreado(){
		$('.ingreso-nombre, .ingreso-avatar, .guardar').addClass('slideCreate');
		setTimeout(function() {
			$('.create-perfil').addClass('out-perfil');
			dashboardJuego();
			$('.perfil h2').empty();
			$('.perfil h2').append(nombreCreado);
			$('.avatar').addClass(avatarSeleccionadoPerfil);
		}, 600);
		setTimeout(function() {
			$('.create-perfil').remove();
		}, 1200);
		localStorage.nombrePerfilMat = nombreCreado;
		localStorage.avatarPerfilMat = avatarSeleccionadoPerfil;
		nombre = 1;
		$('.guardar').off('click', guardarPerfil);
	}
}
//llama al constructor del dashboard del juego	
function dashboardJuego(){
	dashboardJuegoComun();
}
//se crea el dashboard del juego
function dashboardJuegoComun(){
	$('.container').append('<div class="juego">' +
		'<div class="perfil slide-bottom">' +
		'<div class="avatar"></div>' +
		'<h2></h2>' +
		'<table class="tabla-perfil">' +
		'<tr>' +
		'<td><div class="insignia-perfil-1"></div><div class="trofeo-basico-perfil"></div></td>' +
		'<td class="contador total-copa-basico"></td>' +
		'<td><div class="insignia-perfil-2"></div><div class="trofeo-medio-perfil"></div></td>' +
		'<td class="contador total-copa-medio"></td>' +
		'<td><div class="insignia-perfil-3"></div><div class="trofeo-avanzado-perfil"></div></td>' +
		'<td class="contador total-copa-avanzado"></td>' +
		'</tr>' +
		'</table>' +
		'</div>' +
		'<div class="categoria-juego juego-small juego-datos" id="move">' +
        '</div>' +
        '</div>');

	backSmall();

	if(nombre != 0){
		var nombreCreado = localStorage.getItem('nombrePerfilMat');
        var avatarSeleccionadoPerfil = localStorage.getItem('avatarPerfilMat');
		$('.perfil h2').append(nombreCreado);
		$('.avatar').addClass(avatarSeleccionadoPerfil);
	}

	//generalJuego
	for(var p = 0; p < totalGame; p++){
		if(p <= 1){$('.container .juego .categoria-juego').append('<div class="juego-mat-' + (p + 1) + ' degradacion juego-small juego-datos slide-top">' +
        	'<div class="imagen-juego">' +
        	'</div>' +
        	'</div>');
		}else{$('.container .juego .categoria-juego').append('<div class="juego-mat-' + (p + 1) + ' degradacion juego-small juego-datos slide-top">' +
        	'<div class="imagen-juego">' +
        	'<div class="imagen"></div>' +
        	'<h2>Nombre del juego ' + (p + 1) + '</h2>' +
        	'</div>' +
        	'</div>');
		}
		addJuego('.juego-mat-' + (p + 1));
		beginGame((p + 1));
	}
	//se crea acciones del juego 1
	juego1();
	//se crea acciones del juego 2
	juego2();
	//se crea acciones del juego 2
	juego3();

	$('.juego-mat-3, .juego-mat-4').removeClass('slide-top');

	$('.insignia-1, .insignia-2, .insignia-3').hide();

	lecturaPuntaje();
	
	menuCambioPerfil();
	menuPerfil = 1;
	setTimeout(function() {
		removeMenu();
		navJuego();
	}, 300);
	setTimeout(function() {
		$('.perfil').removeClass('slide-bottom');
	}, 700);
	setTimeout(function() {
		$('.juego-mat-1').removeClass('slide-top');
	}, 1000);
	setTimeout(function() {
		$('.menu-juego-perfil').removeClass('slide-bottom');
		$('.juego-mat-2').removeClass('slide-top');
	}, 1300);
}
//open dashboard juego
function entradaDashboardJuego(){
	for(var p = 0; p < totalGame; p++){
		$('.juego-mat-' + (p + 1)).addClass('juego-datos').show();
	}
	$('.categoria-juego').addClass('juego-small');
	setTimeout(function() {
		for(var p = 0; p < totalGame; p++){
			$('.juego-mat-' + (p + 1)).addClass('juego-small').removeClass('juego-open');
		}
	}, 800);
	setTimeout(function() {
		for(var p = 0; p < totalGame; p++){
			$('.juego-mat-' + (p + 1)).addClass('juego-small').removeClass('slide-top');
		}
		$('.header-juego').removeClass('header-juego-active');
	}, 1600);
	setTimeout(function() {
		$('.perfil, .menu-juego-perfil').removeClass('slide-bottom');
		$('.nivel-1 h2, .nivel-2 h2, .nivel-3 h2, .puntos, .back-small').hide();
		if(juegoEnConsola == '.juego-mat-1'){
			juego1();
		}else if(juegoEnConsola == '.juego-mat-2'){
			juego2();
		}else if(juegoEnConsola == '.juego-mat-3'){
			juego3();
		}else if(juegoEnConsola == '.juego-mat-4'){
			juego4();
		}
		juegoEnConsola = '';
	}, 1300);
}
//cierra 
function backSmall(){
	$('.categoria-juego').removeClass('slideDashboard');
	setTimeout(function() {
		for(var p = 0; p < totalGame; p++){
			$('.juego-mat-' + (p + 1)).show().addClass('juego-small').removeClass('juego-open');
			if(p < 2){
				$('.juego-mat-' + (p + 1)).addClass('juego-datos slide-top');
			}
		}
		$('.header-juego').removeClass('header-juego-active');
		$('.categoria-juego').addClass('juego-small').removeClass('juego-open');
		$('.nivel-1 h2, .nivel-2 h2, .nivel-3 h2, .puntos, .back-small').hide();
	}, 500);
}
//navegacion por los juegos
function navJuego(){
	var targetElement = document.getElementById('move');

	addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
	addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
	addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd);
}
//add html de juego
function addJuego(name){
	$(name).append('<div class="nivel-juego">' +
		'<div class="nivel-1">' +
		'<div class="insignia-1"></div>' +
		'<div class="imagen-nivel copa-bloqueada">' +
		'<div class="brillo-copa">' +
		'<div class="brillo-1"></div>' +
		'<div class="brillo-2"></div>' +
		'</div>' +
		'</div>' +
		'<p class="puntos"></p>' +
		'<h2>Comenzar</h2>' +
		'</div>' +
		'<div class="nivel-2">' +
		'<div class="insignia-2"></div>' +
		'<div class="imagen-nivel copa-bloqueada">' +
		'<div class="brillo-copa">' +
		'<div class="brillo-1"></div>' +
		'<div class="brillo-2"></div>' +
		'</div>' +
		'</div>' +
		'<p class="puntos"></p>' +
		'<h2>Comenzar</h2>' +
		'<div class="bloqueado"></div>' +
		'</div>' +
		'<div class="nivel-3">' +
		'<div class="insignia-3"></div>' +
		'<div class="imagen-nivel copa-bloqueada">' +
		'<div class="brillo-copa">' +
		'<div class="brillo-1"></div>' +
		'<div class="brillo-2"></div>' +
		'</div>' +
		'</div>' +
		'<p class="puntos"></p>' +
		'<h2>Comenzar</h2>' +
		'<div class="bloqueado"></div>' +
		'</div>' +
		'</div>' +
		'<div class="back-small"><i class="fa fa-arrow-left"></i></div>');
}
//constructor del menu para cambiar la info del usuario
function menuCambioPerfil(){
	var personajes = [];
	for(var n = 0; n < 8; n++){ 
		if(desbloqueoPersonajes == 'desbloqueo'){
			var div = '<div class="personaje personaje-' + (n + 8) + ' si" data-personaje="' + (n + 8) + '"></div>';
		}else{
			var div = '<div class="personaje personaje-' + (n + 8) + ' no" data-personaje="' + (n + 8) + '"></div>';
		}
		personajes.push(div); 
	}

	if(menuPerfil == 0){
		$('.container').append('<div class="menu-juego-perfil slide-bottom"><div class="menu-juego-lente"></div><div class="cont-menu-juego"><h2 class="score-salida">Editar perfil</h2>	<div class="ingreso-nombre-perfil score-salida"><input maxlength="15" placeholder="Ingresa tu nombre"></div><div class="cambio-nombre score-salida"><i class="fa fa-repeat"></i> Cambiar nombre</div>	<div class="ingreso-avatar-perfil score-salida"><div class="container-personajes"><div class="scroller"><div class="personaje personaje-0 si" data-personaje="0"></div><div class="personaje personaje-1 si" data-personaje="1"></div><div class="personaje personaje-2 si" data-personaje="2"></div><div class="personaje personaje-3 si" data-personaje="3"></div><div class="personaje personaje-4 si" data-personaje="4"></div><div class="personaje personaje-5 si" data-personaje="5"></div><div class="personaje personaje-6 si" data-personaje="6"></div><div class="personaje personaje-7 si" data-personaje="7"></div>' + 
			personajes.join("") + 
			'</div></div></div>	<div class="cambio-personaje score-salida"><i class="fa fa-sign-out"></i> Cambiar personaje</div></div>	<div class="menu-open"><i class="fa fa-times-circle"></i></div><div class="cerrar-menu-perfil"><i class="fa fa-bars"></i></div></div>');
		$('.menu-juego-perfil .menu-open').hide();
		menuPerfilJuegoActive();
		sonidoBtn();
	}
}
//close menu cambio de info del usuario	
function salidaMenu(){
	$('.cont-menu-juego h2, .cambio-nombre, .cambio-personaje, .ingreso-avatar-perfil, .ingreso-nombre-perfil, .recuperar-ayuda').addClass('score-salida');
	setTimeout(function() {
		$('.cont-menu-juego').removeClass('cont-menu-juego-active');
		$('.cerrar-menu-perfil').show();
		$('.menu-juego-perfil .menu-open').hide();
	}, 500);
	setTimeout(function() {
		$('.menu-juego-perfil').removeClass('menu-perfil-active');
		$('.recuperar-ayuda').remove();
	}, 1000);
}
//open menu cambio de info del usuario
function menuPerfilJuegoActive(){	
	openMenuDatos();
	function openMenuDatos(){
		$('.cerrar-menu-perfil').on('click', function(){
			sonidoBtn();
			backPosition = 5;
			avatarSeleccionadoPerfil= '';
			if(pistaRestantes < 5){
				$('.cont-menu-juego').append('<div class="recuperar-ayuda video score-salida" onclick="showInterstitial()"><i class="ayuda-recuperacion"></i> Puedes ver este anuncio y recuperar tus ayudas</div>');
				$('.recuperar-bloqueado').off();
				recuperarAyuda();
			}else{
				$('.cont-menu-juego').append('<div class="recuperar-ayuda recuperar-bloqueado score-salida"><i class="ayuda-recuperacion"></i> Puedes ver este anuncio y recuperar tus ayudas</div>');
				$('.recuperar-ayuda').off();
				$('.recuperar-bloqueado').on('click', function(){
					sonidoBtn();
					mensajeToast('addCredito', 'Ya tienes todas tus ayudas');
				});
			}
			$('.menu-juego-perfil .menu-open').show();
			$(this).hide();
			$('.menu-juego-perfil').addClass('menu-perfil-active');
			setTimeout(function() {
				$('.cont-menu-juego').addClass('cont-menu-juego-active');
			}, 500);
			setTimeout(function() {
				$('.cont-menu-juego h2, .cambio-nombre, .cambio-personaje, .ingreso-avatar-perfil, .ingreso-nombre-perfil, .recuperar-ayuda').removeClass('score-salida');
				clickPersonaje();
				closeMenuDatos();
			}, 1200);
            /*if(sonidoGeneral == 0){
            	alert('sonido');
                $('.audio-6').prop('volumen', 0.5);
                $('audio')[5].play();
		    }*/
		});
	}
	//seleccion de personaje	
	function clickPersonaje(){
		$('.ingreso-avatar-perfil .personaje.si').on('click', function(){
			sonidoBtn();
			avatarSeleccionado = $(this).data('personaje');
			$('.ingreso-avatar-perfil .personaje').removeClass('personaje-click avatar-active');
			avatarSeleccionadoPerfil = 'personaje-' + avatarSeleccionado;
			reactivarClickPersonaje();
			$('.ingreso-avatar-perfil .personaje').off();
		});
		$('.ingreso-avatar-perfil .personaje.no').on('click', function(){
			sonidoBtn();
			cambioAvatarIn = 3;
			if(openMensaje == 0){
				openMensaje = 1;
				mensajeToast('bloqueoIcono', 'Gana una copa');
			}
		});
	}
	//reactiva click de personaje	
	function reactivarClickPersonaje(){
		$('.ingreso-avatar-perfil .personaje').eq(avatarSeleccionado).addClass('personaje-click');
		$('.personaje-click').removeClass('avatar-active');
		setTimeout(function() {
			$('.personaje-click').addClass('avatar-active');
			clickPersonaje();
		}, 300);
	}	
	function closeMenuDatos(){
		$('.menu-juego-perfil .menu-open').on('click', function(){
			sonidoBtn();
			onBackKeyDown();
			closeMenuDatosOff();
            /*if(sonidoGeneral == 0){
                $('.audio-6').prop('volumen', 0.5);
                $('audio')[5].play();
		    }*/
		});
		$('.menu-juego-perfil .menu-juego-lente').on('click', function(){
			sonidoBtn();
			onBackKeyDown();
			closeMenuDatosOff();
		});
	}
	function closeMenuDatosOff(){
		$('.menu-juego-perfil .menu-open, .menu-juego-perfil .menu-juego-lente, .cerrar-menu-perfil').off();
		setTimeout(function() {
			openMenuDatos();
		}, 1200);
	}
	$('.cambio-personaje').on('click', function(){
		sonidoBtn();
		cambioAvatar(nombreBlanco);
	});
	$('.cambio-nombre').on('click', function(){
		sonidoBtn();
		cambioNombre(nombreBlanco);
	});
}
//cambia nombre de usuario		
function cambioNombre(nombreBlanco){
	nombreCreado = $('.ingreso-nombre-perfil input').val();
	if(nombreCreado != nombreBlanco){
		$('.perfil h2').empty();
		$('.perfil h2').append(nombreCreado);
		localStorage.nombrePerfilMat = nombreCreado;
		$('.ingreso-nombre-perfil input').val('');
		cambioNombreOut = 1;
		if(openMensaje == 0){
			openMensaje = 1;
			mensajeToast('siAction', 'Nombre cambiado');
		}
	}else{
		cambioNombreIn = 1;
		if(openMensaje == 0){
			openMensaje = 1;
			mensajeToast('noAction', 'Ingresa un nombre');
		}
	}
}
//cambia avatar de usuario	
function cambioAvatar(nombreBlanco){
	if(avatarSeleccionadoPerfil != nombreBlanco){
		$('.avatar').removeClass('personaje-0 personaje-1 personaje-2 personaje-3 personaje-4 personaje-5 personaje-6 personaje-7 personaje-8 personaje-9 personaje-10 personaje-11 personaje-12 personaje-13 personaje-14 personaje-15 personaje-16');
		$('.avatar').addClass(avatarSeleccionadoPerfil);
		localStorage.avatarPerfilMat = avatarSeleccionadoPerfil;
		cambioAvatarOut = 1;
		if(openMensaje == 0){
			openMensaje = 1;
			mensajeToast('siAction', 'Personaje cambiado');
		}
	}else{
	   cambioAvatarIn = 1;
		if(openMensaje == 0){
			openMensaje = 1;
			mensajeToast('noAction', 'Elige un personaje');
		}
	}
}
//minimiza la vista del juego
function evaluadorBackSmall(){
	$('.back-small').on('click', function(){
		sonidoBtn();
		//add swipe
		var targetElement = document.getElementById('move');
		addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
		addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
		addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd);

		backPosition = 4;
		onBackKeyDown();
	});
}

//tutorial








//funciones de cierre
//evaluador de backPosition
function onBackKeyDown() {
	if(backPosition == 1){
		/*if(tablaOpen != 1){
			inicioTabla();
		}
		salidaMenuGeneralNav();*/
		salidaMenuGeneral();
		return false;
	}else if(backPosition == 2){
		openMenuGeneralNav();
		sonido = 2;
		sonidoApp(sonido);
		$('.nav-cont.boton-bottom, td.Element, #estados .nav-cont, #configuracion .nav-cont, #clasificacion .nav-cont, #formulas .nav-cont, .Grupo, tr .Period.uno').off();
		return false;
	}else if(backPosition == 3){
		$('#info .cerrar').off();
		salidaInfoElemento();
		return false;
	}else if(backPosition == 4){
		entradaDashboardJuego();
		return false;
	}else if(backPosition == 5){
		salidaMenu();
		return false;
	}else if(backPosition == 6){
		openMenuJuego();
		return false;
	}else if(backPosition == 7){
		salidaMenuJuego();
		return false;
	}else if(backPosition == 8){
		salidaMenuGeneralNav();
		return false;
	}else if(backPosition == 9){
		$('.opcion-menu-3').addClass('opcion-3-active');
		$('.opciones-menu-3').show();
		setTimeout(function() {
			$('.opciones-menu-3').removeClass('opacity-out');
			$('.lente-menu').fadeIn('slow');
		},300);
		return false;
	}else if(backPosition == 10){
		closeCreador();
		return false;
	}else if(backPosition == 11){
		elementosBig();
		removeComplete();
		grupoElemento();
		periodoElemento();
		$('#Main, .container-table-scroll').off();
		$('#clasificacion, #estados, #configuracion, #formulas').fadeOut('slow').data('opened', false);
		$('.menu').removeClass('bottom-3');
		$('.container-table-scroll, .header').removeClass('bottom-2');
		return false;
	}else if(backPosition == 12){
		closeModalFormula();
		return false;
	}
	return false;
}	
//sonido
function sonidoApp(nivelSonido){
	if(nivelSonido == 0 && sonidoGeneral == 0){
		$('audio')[0].play();
		$('audio')[1].play();
		$('audio')[2].play();
		$('audio')[3].play();
		$('.audio-2, .audio-3, .audio-4').prop('volume', 0);
	}else if(nivelSonido == 1 && sonidoGeneral == 0){
		$('.audio-1').animate({
			volume: 0
		}, 1000, function(){
			$('audio')[0].pause();
		});
		$('.audio-2').animate({
			volume: 1
		}, 1000);
	}else if(nivelSonido == 2 && sonidoGeneral == 0){
		$('.audio-2').animate({
			volume: 0
		}, 1000, function(){
			$('audio')[1].pause();
		});
		$('.audio-3').animate({
			volume: 1
		}, 1000);
		$('.audio-4').animate({
			volume: 0
		}, 1000);
	}else if(nivelSonido == 3 && sonidoGeneral == 0){
		$('.audio-3, .audio-5').animate({
			volume: 0
		}, 1000, function(){
			$('audio')[4].pause();
		});
		$('.audio-4').animate({
			volume: 1
		}, 1000);
	}else if(nivelSonido == 4 && sonidoGeneral == 1){
        $('.audio-3, .audio-4').animate({
			volume: 0
		}, 1000);
    }else if(nivelSonido == 5 && sonidoGeneral == 0){
		$('audio')[2].play();
        $('audio')[3].play();
        $('.audio-3, .audio-4').prop('volume', 0);
        $('.audio-3').animate({
			volume: 1
		}, 1000);
    }else if(nivelSonido == 9 && sonidoGeneral == 0){
		$('audio')[4].play();
		$('.audio-5').prop('volumen', 0);
        $('.audio-4').animate({
			volume: 0
		}, 1000, function(){
			$('audio')[2].pause();
			$('audio')[3].pause();
		});
		$('.audio-5').animate({
			volume: 1
		}, 1000);
	}
}
//sonido de botones
function sonidoBtn(){
	if(sonidoGeneral == 0){
		$('.audio-9').prop('volumen', 0.5);
		$('audio')[8].play();
	}
}
//apagar sonido segundo plano
//var para guardar el ultimo estado del sonido
var oddSonido;
//funcion de salida
function onSonidoDown() {
    oddSonido = 8;
    sonidoApp(oddSonido);
}
//funcion de entrada
function onSonidoUp() {
    sonidoApp(oddSonido);
}
//todos los mensajes toast
function mensajeToast(image, msj){
	$('.container').append('<div class="mensaje slide-bottom"><i class="' + image + '"></i> <p>' + msj + '</p></div>');

	setTimeout(function() {
		$('.mensaje').removeClass('slide-bottom');
		openMensaje = 2;
	}, 300);
	setTimeout(function() {
		$('.mensaje').addClass('slide-bottom');
		openMensaje = 0;
	}, 2000);
	setTimeout(function() {
		$('.mensaje').remove();
	}, 2600);
}
function notificacionPersonaje(type){
	if(type == 'personajes'){
		imageMsg = '<img src="image/notificacionPersonaje.svg">';
		textTitle = '<h2 style="padding-left: 20px;">Genial</h2>'
		textMsg = '<p style="padding-left: 20px;">Desbloqueaste nuevos avatars</p>';
	}

	if(type == 'calificacion'){
		imageMsg = '<img src="image/notificacionCalificacion.svg">';
		textTitle = '<h3>¿Quieres calificar a Tip Mundo Matemático?</h3>'
		textMsg = '<div class="boton-dialogo calificar" onclick="openLink();">Calificar</div> <div class="boton-dialogo noCalificar">Cancelar</div>';
	}

	$('.container').append('<div class="content-notificacion"><div class="content-msg opacity-out"><div class="content-image-msg bounce-btn"></div><div class="content-text-msg opacity-out">' + textTitle + '</div></div></div>');
	
	$('.content-image-msg').append(imageMsg);
	$('.content-text-msg').append(textMsg);
	
	setTimeout(function(){
		$('.content-notificacion').addClass('bounce-entrada');
	}, 700);
	setTimeout(function(){
		$('.content-msg').removeClass('opacity-out');
	}, 1200);
	setTimeout(function(){
		$('.content-image-msg').removeClass('bounce-btn');
		$('.content-text-msg').removeClass('opacity-out');
		if(type == 'calificacion'){
			$('.calificar, .noCalificar').on('click', function(){
				removeNotificacion();
			});
		}
	}, 1500);
	setTimeout(function(){
		if(type == 'personajes'){
			removeNotificacion();
		}
	}, 5000);
}
//remover la notificacion
function removeNotificacion(){
	setTimeout(function(){
		$('.content-image-msg').addClass('bounce-btn');
		$('.content-text-msg').addClass('opacity-out');
	}, 500);
	setTimeout(function(){
		$('.content-msg').addClass('opacity-out');
	}, 800);
	setTimeout(function(){
		$('.content-notificacion').removeClass('bounce-entrada');
	}, 1200);
	setTimeout(function(){
		$('.content-notificacion').remove();
	}, 1800);
}
//calificacion
function calificacioApp(){
	calificacion = localStorage.getItem('calificado') || '<empty>';
	if(calificacion == '<empty>'){
		setTimeout(function(){
			notificacionPersonaje('calificacion');
		}, 120000);
	}	
}
//borrar los datos
function eraseData(){
	//navegacion
	perfilUndefined = false;
	if(!createOpcion1){
		//createOpcion1 = true;
		$('.juego').remove();
	}
	createOpcion2 = false;
	menuOpcion2 = false;
	evaluadorBack = true;
	//ayuda y calificacion
	localStorage.addCreditoMat = '<empty>';
	localStorage.totalPistasMat = 5;
	localStorage.calificadoMat = '<empty>';
	nombre = 0;
	pistaRestantes = 5;
	totalPista = 5;
	pistaOpen = 'false';
	//datos de usuario
	localStorage.nombrePerfilMat = '';
	localStorage.avatarPerfilMat = '';
	localStorage.personajesDesbloqueadosMat = '<empty>';
    //datos de audio
    localStorage.sonidoGeneralMat = sonidoGeneral;
    localStorage.botonSonidoMat = btnSonido;
	//trofeos
	totalCopasBasico = 0;
	totalCopasMedio = 0;
	totalCopasAvanzado = 0;
	//puntaje
	//juego 1
	puntajeBasicoMat1 = 0;
	puntajeMedioMat1 = 0;
	puntajeAvanzadoMat1 = 0;
	localStorage.puntajeBasicoMat1 = 0;
	localStorage.puntajeMedioMat1 = 0;
	localStorage.puntajeAvanzadoMat1 = 0;
	mejorPuntajeBasicoMat1 = 0;
	mejorPuntajeMedioMat1 = 0;
	mejorPuntajeAvanzadoMat1 = 0;
	//juego 2
	puntajeBasicoMat2 = 0;
	puntajeMedioMat2 = 0;
	puntajeAvanzadoMat2 = 0;
	localStorage.puntajeBasicoMat2 = 0;
	localStorage.puntajeMedioMat2 = 0;
	localStorage.puntajeAvanzadoMat2 = 0;
	localStorage.comboBasicoMat2 = 0;
	localStorage.comboMedioMat2 = 0;
	localStorage.comboAvanzadoMat2 = 0;
	mejorPuntajeBasicoMat2 = 0;
	mejorPuntajeMedioMat2 = 0;
	mejorPuntajeAvanzadoMat2 = 0;
	mejorComboBasicoMat2 = 0;
	mejorComboMedioMat2 = 0;
	mejorComboAvanzadoMat2 = 0;
	//juego 3
	puntajeBasicoMat3 = 0;
	puntajeMedioMat3 = 0;
	puntajeAvanzadoMat3 = 0;
	localStorage.puntajeBasicoMat3 = 0;
	localStorage.puntajeMedioMat3 = 0;
	localStorage.puntajeAvanzadoMat3 = 0;
	mejorPuntajeBasicoMat3 = 0;
	mejorPuntajeMedioMat3 = 0;
	mejorPuntajeAvanzadoMat3 = 0;
	//juego 4
	puntajeBasicoMat4 = 0;
	puntajeMedioMat4 = 0;
	puntajeAvanzadoMat4 = 0;
	localStorage.puntajeBasicoMat4 = 0;
	localStorage.puntajeMedioMat4 = 0;
	localStorage.puntajeAvanzadoMat4 = 0;
	mejorPuntajeBasicoMat4 = 0;
	mejorPuntajeMedioMat4 = 0;
	mejorPuntajeAvanzadoMat4 = 0;
	//copas
	copaBasicoMat1 = 'copaBasicoMat1';
	copaMedioMat1 = 'copaMedioMat1';
	copaAvanzadoMat1 = 'copaAvanzadoMat1';
	copaBasicoMat2 = 'copaBasicoMat2';
	copaMedioMat2 = 'copaMedioMat2';
	copaAvanzadoMat2 = 'copaAvanzadoMat2';
	copaBasicoMat3 = 'copaBasicoMat3';
	copaMedioMat3 = 'copaMedioMat3';
	copaAvanzadoMat3 = 'copaAvanzadoMat3';
	copaBasicoMat4 = 'copaBasicoMat4';
	copaMedioMat4 = 'copaMedioMat4';
	copaAvanzadoMat4 = 'copaAvanzadoMat4';
	//limpia los datos de trofeos
	$('.total-copa-basico').empty().append(totalCopasBasico);
	$('.total-copa-medio').empty().append(totalCopasMedio);
	$('.total-copa-avanzado').empty().append(totalCopasAvanzado);
	//limpia los datos de puntaje
	$('.insignia-1, .insignia-2, .insignia-3').hide();
	$('.nivel-1 .puntos, .nivel-2 .puntos, .nivel-3 .puntos, .perfil h2').empty();
	$('.nivel-1 .imagen-nivel, .nivel-2 .imagen-nivel, .nivel-3 .imagen-nivel').addClass('copa-bloqueada');
	$('.nivel-1 .puntos, .nivel-2 .puntos, .nivel-3 .puntos').removeClass('puntos-active');
	$('.nivel-1, .nivel-2, .nivel-3').removeClass('superado');
	$('.personaje').removeClass('personaje-click avatar-active');
	$('.avatar').removeClass('personaje-0 personaje-1 personaje-2 personaje-3 personaje-4 personaje-5 personaje-6 personaje-7 personaje-8 personaje-9 personaje-10 personaje-11 personaje-12 personaje-13 personaje-14 personaje-15 personaje-16');
	$('.bloqueado').show();
	$('.perfil, .menu-juego-perfil').addClass('slide-bottom');
	$('.juego-mat-1, .juego-mat-2, .juego-mat-3, .juego-mat-4').show().addClass('slide-top');
	$('.categoria-juego, .juego-mat-1, .juego-mat-2, .juego-mat-3, .juego-mat-4').addClass('juego-small').removeClass('juego-open');
	$('.ingreso-nombre, .ingreso-avatar, .guardar').removeClass('slideCreate').addClass('slide');
	$('.cerrar').removeClass('opacity-in');
	setTimeout(function() {
		$('.menu-perfil .cerrar').hide();
	}, 600);
	//se establece en 0 los puntajes
	$('.juego-mat-1 .nivel-1 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeBasicoMat1 + ' pt<b> / 100pt</b></p>');
	$('.juego-mat-1 .nivel-2 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeMedioMat1 + ' pt<b> / 100pt</b></p>');
	$('.juego-mat-1 .nivel-3 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeAvanzadoMat1 + ' pt<b> / 100pt</b></p>');
	$('.juego-mat-2 .nivel-1 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeBasicoMat2 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-2 .nivel-2 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeMedioMat2 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-2 .nivel-3 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeAvanzadoMat2 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-3 .nivel-1 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeBasicoMat3 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-3 .nivel-2 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeMedioMat3 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-3 .nivel-3 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeAvanzadoMat3 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-4 .nivel-1 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeBasicoMat4 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-4 .nivel-2 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeMedioMat4 + 'pt<b> / 100pt</b></p>');
	$('.juego-mat-4 .nivel-3 .puntos').append('<b>Puntos obtenidos:</b><br>' + mejorPuntajeAvanzadoMat4 + 'pt<b> / 100pt</b></p>');
	localStorage.openTutorialMat1 = '<empty>';
	openTutorialMat1 = '<empty>';
	localStorage.openTutorialMat2 = '<empty>';
	openTutorialMat2 = '<empty>';
	localStorage.openTutorialMat3 = '<empty>';
	openTutorialMat3 = '<empty>';
	localStorage.openTutorialMat4 = '<empty>';
	openTutorialMat4 = '<empty>';
	setTimeout(function() {
		backPosition = 9;
	}, 300);
}

//swipe
var touchStartCoords =  {'x':-1, 'y':-1}, // X and Y coordinates on mousedown or touchstart events.
    touchEndCoords = {'x':-1, 'y':-1},// X and Y coordinates on mouseup or touchend events.
    direction = 'undefined',// Swipe direction
    minDistanceXAxis = 150,// Min distance on mousemove or touchmove on the X axis
    maxDistanceYAxis = 70,// Max distance on mousemove or touchmove on the Y axis
    maxAllowedTime = 3000,// Max allowed time between swipeStart and swipeEnd
    startTime = 0,// Time on swipeStart
    elapsedTime = 0;// Elapsed time between swipeStart and swipeEnd

function swipeStart(e) {
	e = e ? e : window.event;
	e = ('changedTouches' in e)?e.changedTouches[0] : e;
	touchStartCoords = {'x':e.pageX, 'y':e.pageY};
	startTime = new Date().getTime();
}

function swipeMove(e){
  	e = e ? e : window.event;
  	e.preventDefault();
}

function swipeEnd(e) {
  	e = e ? e : window.event;
	e = ('changedTouches' in e)?e.changedTouches[0] : e;
  	touchEndCoords = {'x':e.pageX - touchStartCoords.x, 'y':e.pageY - touchStartCoords.y};
  	elapsedTime = new Date().getTime() - startTime;
  	if (elapsedTime <= maxAllowedTime && elapsedTime > 180){
    	if(Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis){
      		direction = (touchEndCoords.x < 0)? 'left' : 'right';
      		switch(direction){
        		case 'left':
          			sonidoBtn();
					$('.categoria-juego').addClass('slideDashboard');
          		break;
        		case 'right':
          			sonidoBtn();
          			$('.categoria-juego').removeClass('slideDashboard');
          		break;
      		}
    	}
  	}
}

function addMultipleListeners(el, s, fn) {
	var evts = s.split(' ');
  	for (var i=0, iLen=evts.length; i<iLen; i++) {
    	el.addEventListener(evts[i], fn, false);
  	}
}

function removeMultipleListeners(el, s, fn) {
	var evts = s.split(' ');
  	for (var i=0, iLen=evts.length; i<iLen; i++) {
    	el.removeEventListener(evts[i], fn, false);
  	}
}