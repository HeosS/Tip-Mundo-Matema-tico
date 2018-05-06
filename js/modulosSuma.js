//cambio de numero en el input
var max;
var min;
function changeNumber(classContent){
	$('.content-contenido-active .modulo-1 .input .btn-input').on('click', function(){
		var num = $(this).parent().children('span').text();
		var modo = $(this).data('modo');
		var index = $(this).parent().index();
		var max2 = $('.modulo-1 ' + classContent + ' .input span').eq(0).text();

		switch(index){
			case 0: 
				max = 5;
				min = 2;
				evaluate();
				break;

			case 1:
				max = max2;
				min = 1;
				evaluate();
				break;
		}

		function evaluate(){
			if(modo == '+'){
				if(num < max){
					var numActual2 = parseInt($('.modulo-1 ' + classContent + ' .input span').eq(1).text());
					if(num == (numActual2 + 1) && index == 0){
						$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(1).removeClass('max');
					}
					$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).removeClass('min');
					num++;
					$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).children('span').empty();
					$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).children('span').text(num);
					sumaNumber();
					if(index == 0){
						if(num == max){
							$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).addClass('max');
						}
					}else if(index == 1){
						if(num == (max2 - 1)){
							$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).addClass('max');
						}
					}
				}
			}else if(num > min){
				var numActual2 = parseInt($('.modulo-1 ' + classContent + ' .input span').eq(1).text());
				if(num == (numActual2 + 1) && index == 0){
					$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(1).addClass('max');
				}
				$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).removeClass('max');
				num--;
				$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).children('span').empty();
				$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).children('span').text(num);
				sumaNumber();
				if(num == min){
					$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(index).addClass('min');
					if(index == 0){
						$('.content-contenido-active .modulo-1 ' + classContent + ' .input').eq(1).addClass('max');
					}
				}
			}
		}
	});
}
//suma de los campos input
function sumaNumber(){
	var number1 = Number($('.content-contenido-active .modulo-1 .input span').eq(0).text());
	var number2 = Number($('.content-contenido-active .modulo-1 .input span').eq(1).text());
	var suma = number1 + number2;

	if(suma >= 7){
		$('.modulo-1').addClass('xl');
	}else{
		$('.modulo-1').removeClass('xl');
	}

	if(number1 > number2){
		$('.content-contenido-active .modulo-1 .input span').eq(1);
	}else{
		number2 = number1 - 1;
		$('.content-contenido-active .modulo-1 .input span').eq(1).text(number2);
		if(number2 == 1){
			$('.content-contenido-active .modulo-1 .input').eq(1).addClass('min');
		}
		suma = number1 + number2;
	}
	//se limpia el campo y se muestra la suma de los numeros
	$('.content-contenido-active .modulo-1 .input span').eq(2).empty();
	$('.content-contenido-active .modulo-1 .input span').eq(2).text(suma);
	//numero 1
	$('.modulo-1 .area-suma').eq(0).empty();
	for(var n1 = 0; n1 < number1; n1++){
		$('.modulo-1 .area-suma').eq(0).append('<div class="personaje personaje-4"></div>');
		if((number1 - 1) == n1){
			$('.modulo-1 .area-suma').eq(0).append('<p>Partimos de ' + number1 + '</p>');
		}
	}
	//numero 2
	$('.modulo-1 .area-suma').eq(1).empty();
	for(var n2 = 0; n2 < number2; n2++){
		$('.modulo-1 .area-suma').eq(1).append('<div class="personaje personaje-6"></div>');
		if((number2 - 1) == n2){
			$('.modulo-1 .area-suma').eq(1).append('<p>le sumamos ' + number2 + '</p>');
		}
	}
	//suma de los numeros
	$('.modulo-1 .area-suma').eq(2).empty();
	for(var n3 = 0; n3 < suma; n3++){
		if(n3 >= number1){
			$('.modulo-1 .area-suma').eq(2).append('<div class="personaje personaje-6"></div>');
		}else{
			$('.modulo-1 .area-suma').eq(2).append('<div class="personaje personaje-4"></div>');
		}

		if((suma - 1) == n3){
			$('.modulo-1 .area-suma').eq(2).append('<p>así que ' + number1 + ' + ' + number2 + ' = ' + suma + '</p>');
		}
	}
}
//descomposicion de numero
function descomposicionNumber(classBtn, pos){
	$('.content-contenido-active .modulo-2 ' + classBtn + ' .input .btn-input').on('click', function(){
		var num = $(this).parent().children('span').text();
		var modo = $(this).data('modo');
		var maxDesc = 19;
		var minDesc = 11;
		evaluate();

		function evaluate(){
			if(modo == '+'){
				if(num < maxDesc){
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).removeClass('min');
					num++;
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').empty();
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').text(num);
					descomposicion(num);
					if(num == maxDesc){
						$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).addClass('max');
					}
				}
			}else if(num > minDesc){
				$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).removeClass('max');
				num--;
				$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').empty();
				$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').text(num);
				descomposicion(num);
				if(num == minDesc){
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).addClass('min');
				}
			}
		}
	});
}
//descomposicion
function descomposicion(num){
	var numRandom = Math.floor((Math.random() * 8) + 1);
	var numDecimal = 10 - numRandom;
	var numFinal = num - 10;
	//si el numero es mayor a 16
	if(num >= 16){
		$('.modulo-2').addClass('xl');
	}else{
		$('.modulo-2').removeClass('xl');
	}
	//se limpia el mensaje
	$('.content-contenido-active .modulo-2 p').empty();
	//se imprime el mensaje
	$('.content-contenido-active .modulo-2 p').text('La suma de ' + numFinal + ' + ' + numDecimal + ' + ' + numRandom + ' es ' + num + ' porque');

	imageDesc(numRandom, numDecimal, numFinal);
}
//imagenes de descomposicion
function imageDesc(number1, number2, number3){
	//numero 1
	$('.modulo-2 .area-suma').eq(0).children('.content-area-suma').empty();
	for(var n1 = 0; n1 < number1; n1++){
		$('.modulo-2 .area-suma').eq(0).children('.content-area-suma').append('<div class="personaje personaje-1"></div>');
	}
	//numero 2
	for(var n2 = 0; n2 < number2; n2++){
		$('.modulo-2 .area-suma').eq(0).children('.content-area-suma').append('<div class="personaje personaje-7"></div>');
	}
	//se imprime primera suma
	$('.modulo-2 .area-suma').eq(0).children('.content-area-suma').append('<p>Sumamos ' + number1 + ' + ' + number2 + ', lo que nos da 10</p>');
	//numero 3
	$('.modulo-2 .area-suma').eq(1).children('.content-area-suma').empty();
	for(var n3 = 0; n3 < 10; n3++){
		$('.modulo-2 .area-suma').eq(1).children('.content-area-suma').append('<div class="personaje personaje-3"></div>');
	}
	//numero 4
	for(var n4 = 0; n4 < number3; n4++){
		$('.modulo-2 .area-suma').eq(1).children('.content-area-suma').append('<div class="personaje personaje-5"></div>');
	}
	//se imprime suma final
	$('.modulo-2 .area-suma').eq(1).children('.content-area-suma').append('<p>entonces 10 + ' + number3 + ' es ' + (number1 + number2 + number3) + '</p>');
}


//suma de tres digitos
function sumaTresDigitos(num){
	var centenas = Math.floor(num / 100);
	var decenas = Math.floor((num - (centenas*100)) / 10);
	var unidades = num - (centenas*100 + decenas*10);
	var numRandom1 = Math.floor((Math.random() * (9 - unidades)) + 1);
	var numRandom2 = Math.floor((Math.random() * (9 - decenas)) + 1);
	var numRandom3 = Math.floor((Math.random() * (9 - centenas)) + 1);
	
	if(decenas == 9){
		numRandom2 = 0;	
	}

	if(unidades == 9){
		numRandom1 = 0;
	}
	
	var numTresRandom = numRandom1 + (numRandom2*10) + (numRandom3*100);
	//alert(num + ' centenas: ' + centenas + ' decenas: ' + decenas + ' unidades: ' + unidades + ' numeros random ' + numRandom1 + ', ' + numRandom2 + ', ' + numRandom3);
	//se limpia el mensaje y el campo del primer numero
	$('.content-contenido-active .modulo-3 p, .content-contenido-active .modulo-3 .input.first span').empty();
	//se imprime el numero
	$('.content-contenido-active .modulo-3 .input.first span').append(num);
	//se imprime el mensaje
	$('.content-contenido-active .modulo-3 p').eq(0).append('Al número ' + num + ' le sumamos ' + numTresRandom + ' <br>agrupando centenas, decenas y unidades');

	imageTresDigitos(centenas, decenas, unidades, numRandom3, numRandom2, numRandom1);
}
//imagenes de descomposicion
function imageTresDigitos(number1, number2, number3, sumando1, sumando2, sumando3){
	//se limpia las areas de suma
	$('.modulo-3 .area-suma').empty();
	$('.modulo-3 p.resultado').remove();
	var imgfirst = true;
	$('.modulo-3 .area-suma').eq(0).append('<h3>Centenas</h3>');
	$('.modulo-3 .area-suma').eq(1).append('<h3>Decenas</h3>');
	$('.modulo-3 .area-suma').eq(2).append('<h3>Unidades</h3>');
	for(var n1 = 0; n1 < 2; n1++){
		if(imgfirst){
			$('.modulo-3 .area-suma').eq(0).append('<div class="personaje personaje-6 centena">' + number1 + '</div>');
			$('.modulo-3 .area-suma').eq(1).append('<div class="personaje personaje-7 decena">' + number2 + '</div>');
			$('.modulo-3 .area-suma').eq(2).append('<div class="personaje personaje-3 unidad">' + number3 + '</div>');
			imgfirst = false;
		}else{
			$('.modulo-3 .area-suma').eq(0).append('<b>+</b> <div class="personaje personaje-6 centena">' + sumando1 + '</div>');
			$('.modulo-3 .area-suma').eq(1).append('<b>+</b> <div class="personaje personaje-7 decena">' + sumando2 + '</div>');
			$('.modulo-3 .area-suma').eq(2).append('<b>+</b> <div class="personaje personaje-3 unidad">' + sumando3 + '</div>');
		}
	}

	$('.modulo-3 .area-suma').eq(0).append('<hr><div class="personaje personaje-6 centena">' + (number1 + sumando1) + '</div><p>Nos da ' + (number1 + sumando1) + ' centenas</p>');
	$('.modulo-3 .area-suma').eq(1).append('<hr><div class="personaje personaje-7 decena">' + (number2 + sumando2) + '</div><p>' + (number2 + sumando2) + ' decenas</p>');
	$('.modulo-3 .area-suma').eq(2).append('<hr><div class="personaje personaje-3 unidad">' + (number3 + sumando3) + '</div><p>y ' + (number3 + sumando3) + ' unidades</p>');
	$('.modulo-3').append('<p class="resultado">por lo tanto el resultado es ' + (number1 + sumando1) + (number2 + sumando2) +(number3 + sumando3 + '</p>'));
}
//suma digitos de tres cifras
function btnSumaTresDigitos(classBtn, pos){
	$('.content-contenido-active .modulo-3 ' + classBtn + ' .input .btn-input').on('click', function(){
		var num = $(this).parent().children('span').text();
		var modo = $(this).data('modo');
		var maxDesc = 399;
		var minDesc = 111;
		evaluate();

		function evaluate(){
			if(modo == '+'){
				if(num < maxDesc){
					//alert(num + ' ' + modo + ' ' + maxDesc);
					$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).removeClass('min');
					num++;
					$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).children('span').empty();
					$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).children('span').text(num);
					sumaTresDigitos(num);
					if(num == maxDesc){
						$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).addClass('max');
					}
				}
			}else if(num > minDesc){
				//alert(num + ' ' + minDesc);
				$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).removeClass('max');
				num--;
				$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).children('span').empty();
				$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).children('span').text(num);
				sumaTresDigitos(num);
				if(num == minDesc){
					$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).addClass('min');
				}
			}
		}
	});
}

//suma con reserva
function sumaConReserva(num){
	var centenas = Math.floor(num / 100);
	var decenas = Math.floor((num - (centenas*100)) / 10);
	var unidades = num - (centenas*100 + decenas*10);
	var numRandom1 = Math.floor((Math.random() * (9 - unidades)) + 1);
	var numRandom2 = Math.floor((Math.random() * (9 - decenas)) + 1);
	var numRandom3 = Math.floor((Math.random() * (9 - centenas)) + 1);
	
	numRandom2 = definirUnidadRandom(decenas, numRandom2);
	numRandom1 = definirUnidadRandom(unidades, numRandom1);
	
	var numTresRandom = numRandom1 + (numRandom2*10) + (numRandom3*100);
	//se limpia el mensaje y el campo del primer numero
	$('.content-contenido-active .modulo-4 p, .content-contenido-active .modulo-4 .input.first span').empty();
	//se imprime el numero
	$('.content-contenido-active .modulo-4 .input.first span').append(num);
	//se imprime el mensaje
	$('.content-contenido-active .modulo-4 p').eq(0).append('Al número ' + num + ' le sumamos ' + numTresRandom + ' <br>agrupando centenas, decenas y unidades');

	imageTresDigitosConReserva(centenas, decenas, unidades, numRandom3, numRandom2, numRandom1);
}
//se define la unidad random
function definirUnidadRandom(num1,num2 ){	
	var suma = num1 + num2;
	var numRandom = Math.floor((Math.random() * 9 ) + 1);
	var x = numRandom + 9;
	var preSuma = num1 + 9;

	if(preSuma < x && num1 > 0){
		x = 10;
	}else if(num1 == 0){
		x = 9;
	}
	
	for(suma; suma <= x; num2 ++){
		suma = num1 + num2;	
		if(suma >= x){
			return(num2);
		}
	}	
}
//imagenes de descomposicion
function imageTresDigitosConReserva(number1, number2, number3, sumando1, sumando2, sumando3){
	//se limpia las areas de suma
	$('.modulo-4 .area-suma').empty();
	$('.modulo-4 p.resultado').remove();
	var imgfirst = true;
	$('.modulo-4 .area-suma').eq(0).append('<h3>Centenas</h3><div class="reserva personaje-4 reserva2"></div>');
	$('.modulo-4 .area-suma').eq(1).append('<h3>Decenas</h3><div class="reserva personaje-4 reserva1"></div>');
	$('.modulo-4 .area-suma').eq(2).append('<h3>Unidades</h3><div class="reserva reserva0"></div>');
	
	$(".reserva1").animate({opacity: 0}, 0, function() {});
	$(".reserva2").animate({opacity: 0}, 0, function() {});
	
	var numReserva1Int = 0;
	var numReserva2Int = 0;
	
	var resultadoUnidad = number3 + sumando3;
	var resultadoDecena = numReserva1Int + number2 + sumando2;
	
	if(resultadoUnidad > 9){
		var cadena = resultadoUnidad.toString();
		separador = "";
		var arregloDeSubCadenas = cadena.split(separador);
		var numReserva = arregloDeSubCadenas[0];
		var numResultUnidad = arregloDeSubCadenas[1];
		$(".reserva1").append(numReserva);
		$(".reserva1").animate({opacity: 1}, 600, function() {});
		numReserva1Int = parseInt(numReserva);
	}else{
		$(".reserva1").animate({opacity: 0}, 600, function() {});
	}
	
	if(resultadoDecena > 9){
		var cadena = resultadoDecena.toString();
		separador = "";
		var arregloDeSubCadenas = cadena.split(separador);
		var numReserva = arregloDeSubCadenas[0];
		var numResultDecena = arregloDeSubCadenas[1];
		$(".reserva2").append(numReserva);
		$(".reserva2").animate({opacity: 1}, 600, function() {});
		numReserva2Int = parseInt(numReserva);
	}else{
		$(".reserva2").animate({opacity: 0}, 600, function() {});
	}
	
	var resultadoFinalUnidad = number3 + sumando3;
	var resultadoFinalDecena =  numReserva1Int + number2 + sumando2;
	var resultadoFinalCentena = (numReserva2Int + number1) + sumando1;
	var valor1= (number1 * 100) + (number2 * 10) + number3;
	var valor2= (sumando1 * 100) + (sumando2 * 10) + sumando3;
	var sumaTotal = valor1 + valor2;
	
	for(var n1 = 0; n1 < 2; n1++){
		if(imgfirst){
			$('.modulo-4 .area-suma').eq(0).append('<div class="personaje personaje-6 centena">' + number1 + '</div>');
			$('.modulo-4 .area-suma').eq(1).append('<div class="personaje personaje-7 decena">' + number2 + '</div>');
			$('.modulo-4 .area-suma').eq(2).append('<div class="personaje personaje-3 unidad">' + number3 + '</div>');
			imgfirst = false;
		}else{
			$('.modulo-4 .area-suma').eq(0).append('<b>+</b> <div class="personaje personaje-6 centena">' + sumando1 + '</div>');
			$('.modulo-4 .area-suma').eq(1).append('<b>+</b> <div class="personaje personaje-7 decena">' + sumando2 + '</div>');
			$('.modulo-4 .area-suma').eq(2).append('<b>+</b> <div class="personaje personaje-3 unidad">' + sumando3 + '</div>');
		}
	}
	
	$('.modulo-4 .area-suma').eq(0).append('<hr><div class="personaje personaje-6 centena">' + resultadoFinalCentena + '</div><p style="bottom: 11px;">Nos da ' + resultadoFinalCentena + '</p>');
	$('.modulo-4 .area-suma').eq(1).append('<hr><div class="personaje personaje-7 decena">' + (resultadoFinalDecena - 10) + '</div><p>Nos da ' + resultadoFinalDecena + ', se pasa la reserva y queda ' + (resultadoFinalDecena - 10) + '</p>');
	$('.modulo-4 .area-suma').eq(2).append('<hr><div class="personaje personaje-3 unidad">' + (resultadoFinalUnidad - 10) + '</div><p>Nos da ' + resultadoFinalUnidad + ', se pasa la reserva y queda ' + (resultadoFinalUnidad - 10) + '</p>');
	$('.modulo-4').append('<p class="resultado">por lo tanto el resultado es ' + sumaTotal  + '</p>');
	
	var valorReserva1 = parseInt($(".reserva1").text());
	var valorReserva2 = parseInt($(".reserva2").text());
	
	if(resultadoUnidad > 9){
		var cadena = $('.unidad').eq(2).text();
		separador = "";
		arregloDeSubCadenas = cadena.split(separador);
		var numReserva = arregloDeSubCadenas[0];
		var numResultUnidad = arregloDeSubCadenas[1];
		$(".reserva1").animate({opacity: 1}, 600, function() {});
		$('.unidad').eq(2).text(numResultUnidad);
	}else{

	}
	
	if(resultadoDecena > 9){
		var cadena = $('.decena').eq(2).text();
		separador = "";
		arregloDeSubCadenas = cadena.split(separador);
		var numReserva = arregloDeSubCadenas[0];
		var numResultdecena = arregloDeSubCadenas[1];
		$(".reserva2").animate({opacity: 1}, 600, function() {});
		$('.decena').eq(2).text(numResultdecena);
	}else{
		$(".reserva2").css({"opcacity":"0"});
	}
}
//suma digitos de tres cifras
function btnSumaTresDigitosConReserva(classBtn, pos){
	$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos + ' .btn-input').on('click', function(){
		var num = $(this).parent().children('span').text();
		var modo = $(this).data('modo');
		var maxDesc = 199;
		var minDesc = 111;
		evaluate();

		function evaluate(){
			if(modo == '+'){
				if(num < maxDesc){
					$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).removeClass('min');
					num++;
					$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).children('span').empty();
					$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).children('span').text(num);
					sumaConReserva(num);
					if(num == maxDesc){
						$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).addClass('max');
					}
				}
			}else if(num > minDesc){
				$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).removeClass('max');
				num--;
				$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).children('span').empty();
				$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).children('span').text(num);
				sumaConReserva(num);
				if(num == minDesc){
					$('.content-contenido-active .modulo-4 ' + classBtn + ' .input' + pos).addClass('min');
				}
			}
		}
	});
}
//////////////////////////////////////////////////
//induccion de modulos
function cargaModuloSuma1(){
	var continuar = false;
	$('.content-contenido-active .modulo-1 .input .btn-input').off();
	$('.modulo-1').append('<div class="firstSuma">' + 
		'<div class="input max"><span>5</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>' + 
		'</div>');
	$('.modulo-1').addClass('beginModulo');
	setTimeout(function(){
		$('.modulo-1 .firstSuma').addClass('activeFirst');
		changeNumber('.firstSuma');
	}, 300);
	$('.modulo-1 small').empty().text('Ingresa un número entre 2 y 5');
	//si cambia el primer numero
	$('.modulo-1 .firstSuma .input').on('click', function(){
		$('.modulo-1 .firstSuma').addClass('activeSuma');
		if(continuar == false){
			$('.modulo-1 .content-continuar').remove();
			$('.modulo-1').append('<div class="content-continuar" style="display:none"><div class="button">Continuar</div></div>');
			$('.modulo-1 .content-continuar').fadeIn('slow');
			continueModulo();
			continuar = true;
		}
	});
	//continuar modulo
	var paso = 1;
	function continueModulo(){
		var firstNum;
		$('.modulo-1 .content-continuar .button').on('click', function(){
			if(paso == 1){
				firstNum = $('.modulo-1 .firstSuma .input span').eq(0).text();
				$('.modulo-1 .content-input .input').eq(0).children('span').empty();
				$('.modulo-1 .content-input .input').eq(0).children('span').text(firstNum);
				$('.modulo-1 .content-input .input').eq(0).removeClass('max');
				if(firstNum == 5){
					$('.modulo-1 .content-input .input').eq(0).addClass('max').removeClass('min');
				}else if(firstNum == 2){
					$('.modulo-1 .content-input .input').eq(0).addClass('min').removeClass('max');
				}
				$('.modulo-1 .firstSuma .input .btn-input').off();
				$('.modulo-1 .firstSuma').append(' + <div class="input min"><span>1</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>');
				changeNumber('.firstSuma');
				$('.modulo-1 small').empty().text('Ingresa el número que quieres sumar, recuerda que tiene que ser menor a ' + firstNum);
				paso = 2;
			}else if(paso == 2){
				var secondNum = $('.modulo-1 .firstSuma .input span').eq(1).text();
				$('.modulo-1 .content-input .input').eq(1).children('span').empty();
				$('.modulo-1 .content-input .input').eq(1).children('span').text(secondNum);
				if(secondNum == (firstNum - 1)){
					$('.modulo-1 .content-input .input').eq(1).addClass('max').removeClass('min');
				}else if(secondNum == 1){
					$('.modulo-1 .content-input .input').eq(1).addClass('min').removeClass('max');
				}
				$('.modulo-1 .firstSuma, .modulo-1 .content-continuar').fadeOut('slow');
				$('.modulo-1 small').empty().text('Selecciona el número mayor y luego el que quieres sumar');
				$('.modulo-1').append('<div class="resetModulo" data-reset="0" data-section="2"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off();
				resetModulo();
				changeNumber('.content-input');
				sumaNumber();
				setTimeout(function(){
					$('.modulo-1 .firstSuma, .modulo-1 .content-continuar').remove();
					$('.modulo-1').removeClass('beginModulo');
				}, 600);
				setTimeout(function(){
					$('.modulo-1 .resetModulo').addClass('on-button');
				}, 900);
				moduloSuma1 = true;
			}
		});
	}
}
function cargaModuloSuma2(){
	var continuar = false;
	$('.content-contenido-active .modulo-2 .input .btn-input').off();
	$('.modulo-2').append('<div class="firstSuma">' + 
		'<div class="input min second"><span>11</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>' + 
		'</div>');
	$('.modulo-2').addClass('beginModulo');
	setTimeout(function(){
		$('.modulo-2 .firstSuma').addClass('activeFirst');
		descomposicionNumber('.firstSuma', '.second');
	}, 300);
	$('.modulo-2 .area-suma').hide();
	$('.modulo-2 small').empty().text('Ingresa un número entre 11 y 19');
	//si cambia el primer numero
	$('.modulo-2 .firstSuma .input').on('click', function(){
		$('.modulo-2 .firstSuma').addClass('activeSuma');
		if(continuar == false){
			$('.modulo-2 .content-continuar').remove();
			$('.modulo-2').append('<div class="content-continuar" style="display:none"><div class="button">Continuar</div></div>');
			$('.modulo-2 .content-continuar').fadeIn('slow');
			continueModulo();
			continuar = true;
		}
	});
	//continuar modulo
	function continueModulo(){
		var firstNum;
		$('.modulo-2 .content-continuar .button').on('click', function(){
			firstNum = $('.modulo-2 .firstSuma .input.second span').text();
			$('.modulo-2 .input.first').eq(0).children('span').empty();
			$('.modulo-2 .input.first').eq(0).children('span').text(firstNum);
			$('.modulo-2 .firstSuma, .modulo-2 .content-continuar').fadeOut('slow');
			$('.modulo-2 small').empty().text('Selecciona un número y observa el resultado');
			$('.modulo-2').append('<div class="resetModulo" data-reset="1" data-section="2"><i class="fa fa-refresh"></i></div>');
			$('.resetModulo').off();
			$('.content-contenido-active .modulo-2 .input .btn-input').off();
			resetModulo();
			descomposicionNumber('', '.first');
			descomposicion(firstNum);
			setTimeout(function(){
				$('.modulo-2 .firstSuma, .modulo-2 .content-continuar').remove();
				$('.modulo-2').removeClass('beginModulo');
				$('.modulo-2 .area-suma').fadeIn('slow');
			}, 600);
			setTimeout(function(){
				$('.modulo-2 .resetModulo').addClass('on-button');
			}, 900);
			moduloSuma2 = true;
		});
	}
}
function cargaModuloSuma3(){
	var continuar = false;
	$('.content-contenido-active .modulo-3 .input .btn-input').off();
	$('.modulo-3').append('<div class="firstSuma">' + 
		'<div class="input min second"><span>111</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>' + 
		'</div>');
	$('.modulo-3').addClass('beginModulo');
	setTimeout(function(){
		$('.modulo-3 .firstSuma').addClass('activeFirst');
		btnSumaTresDigitos('.firstSuma', '.second');
	}, 300);
	$('.modulo-3 .area-suma').hide();
	$('.modulo-3 small').empty().text('Ingresa un número entre 111 y 399');
	//si cambia el numero
	$('.modulo-3 .firstSuma .input').on('click', function(){
		$('.modulo-3 .firstSuma').addClass('activeSuma');
		if(continuar == false){
			$('.modulo-3 .content-continuar').remove();
			$('.modulo-3').append('<div class="content-continuar" style="display:none"><div class="button">Continuar</div></div>');
			$('.modulo-3 .content-continuar').fadeIn('slow');
			continueModulo();
			continuar = true;
		}
	});
	//continuar modulo
	function continueModulo(){
		var firstNum;
		$('.modulo-3 .content-continuar .button').on('click', function(){
			firstNum = $('.modulo-3 .firstSuma .input span').text();
			$('.modulo-3 .input').eq(0).children('span').empty();
			$('.modulo-3 .input').eq(0).children('span').text(firstNum);
			$('.modulo-3 .firstSuma, .modulo-3 .content-continuar').fadeOut('slow');
			$('.modulo-3 small').empty().text('Selecciona un número y observa el resultado');
			$('.modulo-3').append('<div class="resetModulo" data-reset="2" data-section="2"><i class="fa fa-refresh"></i></div>');
			$('.resetModulo').off();
			resetModulo();
			sumaTresDigitos(firstNum);
			btnSumaTresDigitos('', '.first');
			setTimeout(function(){
				$('.modulo-3 .firstSuma, .modulo-3 .content-continuar').remove();
				$('.modulo-3').removeClass('beginModulo');
				$('.modulo-3 .area-suma').fadeIn('slow');
			}, 600);
			setTimeout(function(){
				$('.modulo-3 .resetModulo').addClass('on-button');
			}, 900);
			moduloSuma3 = true;
		});
	}
}
function cargaModuloSuma4(){
	var continuar = false;
	$('.content-contenido-active .modulo-4 .input .btn-input').off();
	$('.modulo-4').append('<div class="firstSuma">' + 
		'<div class="input min second"><span>111</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>' + 
		'</div>');
	$('.modulo-4').addClass('beginModulo');
	setTimeout(function(){
		$('.modulo-4 .firstSuma').addClass('activeFirst');
		btnSumaTresDigitosConReserva('.firstSuma', '.second');
	}, 300);
	$('.modulo-4 .area-suma').hide();
	$('.modulo-4 small').empty().text('Ingresa un número entre 111 y 199');
	//si cambia el numero
	$('.modulo-4 .firstSuma .input').on('click', function(){
		$('.modulo-4 .firstSuma').addClass('activeSuma');
		if(continuar == false){
			$('.modulo-4 .content-continuar').remove();
			$('.modulo-4').append('<div class="content-continuar" style="display:none"><div class="button">Continuar</div></div>');
			$('.modulo-4 .content-continuar').fadeIn('slow');
			continueModulo();
			continuar = true;
		}
	});
	//continuar modulo
	function continueModulo(){
		var firstNum;
		$('.modulo-4 .content-continuar .button').on('click', function(){
			firstNum = $('.modulo-4 .firstSuma .input span').text();
			$('.modulo-4 .input').eq(0).children('span').empty();
			$('.modulo-4 .input').eq(0).children('span').text(firstNum);
			$('.modulo-4 .firstSuma, .modulo-4 .content-continuar').fadeOut('slow');
			$('.modulo-4 small').empty().text('Selecciona un número y observa el resultado');
			$('.modulo-4').append('<div class="resetModulo" data-reset="3" data-section="2"><i class="fa fa-refresh"></i></div>');
			$('.resetModulo').off();
			resetModulo();
			sumaConReserva(firstNum);
			btnSumaTresDigitosConReserva('', '.first');
			setTimeout(function(){
				$('.modulo-4 .firstSuma, .modulo-4 .content-continuar').remove();
				$('.modulo-4').removeClass('beginModulo');
				$('.modulo-4 .area-suma').fadeIn('slow');
			}, 600);
			setTimeout(function(){
				$('.modulo-4 .resetModulo').addClass('on-button');
			}, 900);
			moduloSuma4 = true;
		});
	}
}