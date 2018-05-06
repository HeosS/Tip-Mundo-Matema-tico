//var totalContenido = ["Sistema decimal", "Mayor y menor", "Suma", "Resta", "Multiplicación", "División"];
var totalContenido = ["Sistema decimal", "Mayor y menor", "Suma", "Resta"];
//variables suma
var moduloSuma1 = false;
var moduloSuma2 = false;
var moduloSuma3 = false;
var moduloSuma4 = false;
//variables resta
var moduloResta1 = false;
var moduloResta2 = false;
var moduloResta3 = false;
var moduloResta4 = false;
//crea el dashboard de contenido
function entradaDashboardContenido(){
	var contenidos = [];
	for(var n = 0; n < totalContenido.length; n++){ 
		var delay = 300 * (n + 1);
		var div = '<div class="contenido activeHover contenido-' + n + '" data-contenido="' + n + '" style="transition-delay: ' + delay + 'ms;"><h2>' + totalContenido[n] + '</h2></div>';
		contenidos.push(div); 
	}

	$('.container').append('<div class="content-contenido">' +
		contenidos.join("") +
		'</div>');

	setTimeout(function(){
		$('.content-contenido .contenido').addClass('bounce-entrada');
	}, 500);

	setTimeout(function(){
		$('.content-contenido .contenido').addClass('delay').removeClass('activeHover');
	}, 1000);

	openContenido();
};
//abre el contenido
function openContenido(){
	$('.contenido').on('click', function(){
		var pos = $(this).index();
		var n = $(this).data('contenido');
		var p =$(this).position();

		$('.contenido').attr('style', '');

		$('.contenido').each(function(index){
			if(pos == index){
				$(this).addClass('click').attr('style', 'left:' + p.left + 'px; top:' + p.top + 'px');
			}else {
				$('.contenido').eq(index).addClass('opacity-out');
			}
		});

		$(this).append('<div class="cerrar"><i class="fa fa-times-circle"></i></div>');

		setTimeout(function(){
			$('.contenido.click').addClass('active');
			$('.contenido.click').off();

			var contenidoActivo = contenidos;
			cargadorContenido(contenidoActivo, n);
			closeContenido();
		}, 800);

		$('.contenido').off();
	});
}
//cierra el contenido
function closeContenido(){
	$('.contenido .cerrar').on('click', function(){
		$(this).removeClass('opacity-in');
		$(this).parent().addClass('absolute');
		$('.content-contenido-active').addClass('slide-top');
		setTimeout(function(){
			$('.contenido.active').removeClass('active');
		}, 600);
		setTimeout(function(){
			$('.contenido .cerrar, .content-contenido-active').remove();
			$('.contenido').removeClass('click opacity-out absolute');
			openContenido();
		}, 1600);
	});
}
//carga el contenido
function cargadorContenido(contenido, id){
	$('.contenido.active').append('<div class="content-contenido-active slide-top"><div class="scroll"></div></div>');
	$('.content-contenido-active .scroll').append('<p>' + contenido[id].description + '</p>');

	for(var n = 0; n < contenido[id].info.length; n++){
		$('.content-contenido-active .scroll').append('<p>' + contenido[id].info[n] + '</p>');
	}

	setTimeout(function(){
		$('.content-contenido-active').removeClass('slide-top');
		$('.contenido .cerrar').addClass('opacity-in');
	}, 900);

	switch(id){
		//sistema decimal
		case 0:

		break;
		//mayor menor
		case 1:

		break;
		//suma
		case 2:
			//modulo 1
			if(moduloSuma1 != false){
				$('.modulo-1').append('<div class="resetModulo" data-reset="0" data-section="' + id + '"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off().addClass('on-button');
				resetModulo();
				changeNumber('.content-input');
				sumaNumber();
			}else{
				beginModulo(0, 2);
			}
			//modulo 2
			if(moduloSuma2 != false){
				$('.modulo-2').append('<div class="resetModulo" data-reset="1" data-section="' + id + '"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off().addClass('on-button');
				resetModulo();
				descomposicionNumber('.firstSuma');
				descomposicion(14);
			}else{
				beginModulo(1, 2);
			}
			//modulo 3
			if(moduloSuma3 != false){
				$('.modulo-3').append('<div class="resetModulo" data-reset="2" data-section="' + id + '"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off().addClass('on-button');
				resetModulo();
				sumaTresDigitos(112);
				btnSumaTresDigitos('', '.first');
			}else{
				beginModulo(2, 2);
			}
			//modulo 4
			if(moduloSuma4 != false){
				$('.modulo-4').append('<div class="resetModulo" data-reset="3" data-section="' + id + '"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off().addClass('on-button');
				resetModulo();
				sumaConReserva(111);
				btnSumaTresDigitosConReserva('', '.first');
			}else{
				beginModulo(3, 2);
			}
		break;
		//resta
		case 3:
			//modulo 1
			if(moduloResta1 != false){
				$('.modulo-1').append('<div class="resetModulo" data-reset="0" data-section="' + id + '"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off().addClass('on-button');
				resetModulo();
				changeNumberResta('.content-input');
				restaNumber();
			}else{
				beginModulo(0, 3);
			}
			//modulo 2
			if(moduloResta2 != false){
				$('.modulo-2').append('<div class="resetModulo" data-reset="1" data-section="' + id + '"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off().addClass('on-button');
				resetModulo();
				restaDosDigitos(36);
				btnRestaDosDigitos('', '.first');
			}else{
				beginModulo(1, 3);
			}
			//modulo 3
			if(moduloResta3 != false){
				$('.modulo-3').append('<div class="resetModulo" data-reset="2" data-section="' + id + '"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off().addClass('on-button');
				resetModulo();
				restaConReserva(21);
				btnRestaDosDigitosConReserva('', '.first');
			}else{
				beginModulo(2, 3);
			}
		break;
		//multiplicacion
		case 4:

		break;
		//division
		case 5:

		break;
	}
}
//comenzar modulo inductivo
function beginModulo(id, cont){
	switch(id){
		case 0:
			switch(cont){
				case 2:
					cargaModuloSuma1();
				break;
				case 3:
					cargaModuloResta1();
				break;
			}
		break;
		case 1:
			switch(cont){
				case 2:
					cargaModuloSuma2();
				break;
				case 3:
					cargaModuloResta2();
				break;
			}
		break;
		case 2:
			switch(cont){
				case 2:
					cargaModuloSuma3();
				break;
				case 3:
					cargaModuloResta3();
				break;
			}
		break;
		case 3:
			switch(cont){
				case 2:
					cargaModuloSuma4();
				break;
				case 3:
					cargaModuloResta4();
				break;
			}
		break;
	}
}
//reset de los modulos
function resetModulo(){
	$('.resetModulo').on('click', function(){
		var data = $(this).data('reset');
		var section = $(this).data('section');
		switch(data){
			case 0:
				switch(section){
					case 2:
						moduloSuma1 = false;
					break;
					case 3:
						moduloResta1 = false;
					break;
				}
			break;
			case 1:
				switch(section){
					case 2:
						moduloSuma2 = false;
					break;
					case 3:
						moduloResta2 = false;
					break;
				}
			break;
			case 2:
				switch(section){
					case 2:
						moduloSuma3 = false;
					break;
					case 3:
						moduloResta3 = false;
					break;
				}
			break;
			case 3:
				switch(section){
					case 2:
						moduloSuma4 = false;
					break;
					case 3:
						moduloResta4 = false;
					break;
				}
			break;
		}
		$(this).remove();
		$('.modulo-' + (data + 1)).addClass('beginModulo');
		setTimeout(function(){
			beginModulo(data, section);
		}, 600);
	});
}