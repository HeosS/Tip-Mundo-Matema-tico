//cambio de numero en el input
var max;
var min;
function changeNumberResta(classContent){
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
					restaNumber();
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
				restaNumber();
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
//resta de los campos input
function restaNumber(){
	var number1 = Number($('.content-contenido-active .modulo-1 .input span').eq(0).text());
	var number2 = Number($('.content-contenido-active .modulo-1 .input span').eq(1).text());
	var resta = number1 - number2;

	if(resta >= 7){
		$('.modulo-1').addClass('xl');
	}else{
		$('.modulo-1').removeClass('xl');
	}

	if(number2 == 1){
		$('.content-contenido-active .modulo-1 .input').eq(1).addClass('min');
	}
	//se limpia el campo y se muestra la suma de los numeros
	$('.content-contenido-active .modulo-1 .input span').eq(2).empty();
	$('.content-contenido-active .modulo-1 .input span').eq(2).text(resta);
	//numero 1
	$('.modulo-1 .area-resta').eq(0).empty();
	for(var n1 = 0; n1 < number1; n1++){
		$('.modulo-1 .area-resta').eq(0).append('<div class="personaje personaje-1"></div>');
		if((number1 - 1) == n1){
			$('.modulo-1 .area-resta').eq(0).append('<p>Partimos de ' + number1 + '</p>');
		}
	}
	//numero 2
	$('.modulo-1 .area-resta').eq(1).empty();
	for(var n2 = 0; n2 < number1; n2++){
		if(n2 < resta){
			$('.modulo-1 .area-resta').eq(1).append('<div class="personaje personaje-1"></div>');
		}else{
			$('.modulo-1 .area-resta').eq(1).append('<div class="personaje personaje-1 restaAnim"></div>');
		}
		if((number2 - 1) == n2){
			$('.modulo-1 .area-resta').eq(1).append('<p>le restamos ' + number2 + '</p>');
		}
	}
	//suma de los numeros
	$('.modulo-1 .area-resta').eq(2).empty();
	for(var n3 = 0; n3 < resta; n3++){
		$('.modulo-1 .area-resta').eq(2).append('<div class="personaje personaje-1"></div>');
		if((resta - 1) == n3){
			$('.modulo-1 .area-resta').eq(2).append('<p>así que ' + number1 + ' - ' + number2 + ' = ' + resta + '</p>');
		}
	}
}
//resta de dos digitos
function restaDosDigitos(num){
	var decenas = Math.floor(num / 10);
	var unidades = num - (decenas * 10);
	var numRandom1 = Math.floor((Math.random() * unidades));
	var numRandom2 = Math.floor((Math.random() * decenas));
	if(numRandom2 == 0){
		numRandom2 += 1;
	}else if(numRandom2 == decenas){
		numRandom2 -= 1;
	}
	var numDosRandom = numRandom1 + (numRandom2 * 10);
	//se limpia el mensaje y el campo del primer numero
	$('.content-contenido-active .modulo-2 p, .content-contenido-active .modulo-2 .input.first span').empty();
	//se imprime el numero
	$('.content-contenido-active .modulo-2 .input.first span').append(num);
	//se imprime el mensaje
	$('.content-contenido-active .modulo-2 p').eq(0).append('Al número ' + num + ' le restamos ' + numDosRandom + ' <br>agrupando en decenas y unidades');

	imageDosDigitos(decenas, unidades, numRandom2, numRandom1);
}
//imagenes de descomposicion
function imageDosDigitos(number1, number2, sumando1, sumando2){
	//se limpia las areas de resta
	$('.modulo-2 .area-suma').empty();
	$('.modulo-2 p.resultado').remove();
	var imgfirst = true;
	$('.modulo-2 .area-suma').eq(0).append('<h3>Decenas</h3>');
	$('.modulo-2 .area-suma').eq(1).append('<h3>Unidades</h3>');
	for(var n1 = 0; n1 < 2; n1++){
		if(imgfirst){
			$('.modulo-2 .area-suma').eq(0).append('<div class="personaje personaje-6 decena">' + number1 + '</div>');
			$('.modulo-2 .area-suma').eq(1).append('<div class="personaje personaje-7 unidad">' + number2 + '</div>');
			imgfirst = false;
		}else{
			$('.modulo-2 .area-suma').eq(0).append('<b>-</b> <div class="personaje personaje-6 decena">' + sumando1 + '</div>');
			$('.modulo-2 .area-suma').eq(1).append('<b>-</b> <div class="personaje personaje-7 unidad">' + sumando2 + '</div>');
		}
	}

	$('.modulo-2 .area-suma').eq(0).append('<hr><div class="personaje personaje-6 decena">' + (number1 - sumando1) + '</div><p>Nos da ' + (number1 - sumando1) + ' decenas</p>');
	$('.modulo-2 .area-suma').eq(1).append('<hr><div class="personaje personaje-7 unidad">' + (number2 - sumando2) + '</div><p>' + (number2 - sumando2) + ' unidades</p>');
	$('.modulo-2').append('<p class="resultado">por lo tanto el resultado es ' + (number1 - sumando1) + (number2 - sumando2) + '</p>');
}
//resta digitos de tres cifras
function btnRestaDosDigitos(classBtn, pos){
	$('.content-contenido-active .modulo-2 ' + classBtn + ' .input .btn-input').on('click', function(){
		var num = $(this).parent().children('span').text();
		var modo = $(this).data('modo');
		var maxDesc = 39;
		var minDesc = 21;
		evaluate();

		function evaluate(){
			if(modo == '+'){
				if(num < maxDesc){
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).removeClass('min');
					num++;
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').empty();
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').text(num);
					restaDosDigitos(num);
					if(num == maxDesc){
						$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).addClass('max');
					}
				}
			}else if(num > minDesc){
				$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).removeClass('max');
				num--;
				$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').empty();
				$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).children('span').text(num);
				restaDosDigitos(num);
				if(num == minDesc){
					$('.content-contenido-active .modulo-2 ' + classBtn + ' .input' + pos).addClass('min');
				}
			}
		}
	});
}

//resta de tres digitos
function restaTresDigitos(num){
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
	$('.content-contenido-active .modulo-3 p').eq(0).append('Al número ' + num + ' le restamos ' + numTresRandom + ' <br>agrupando centenas, decenas y unidades');

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

	$('.modulo-3 .area-suma').eq(0).append('<hr><div class="personaje personaje-6 centena">' + (number1 - sumando1) + '</div><p>Nos da ' + (number1 - sumando1) + ' centenas</p>');
	$('.modulo-3 .area-suma').eq(1).append('<hr><div class="personaje personaje-7 decena">' + (number2 - sumando2) + '</div><p>' + (number2 - sumando2) + ' decenas</p>');
	$('.modulo-3 .area-suma').eq(2).append('<hr><div class="personaje personaje-3 unidad">' + (number3 - sumando3) + '</div><p>y ' + (number3 - sumando3) + ' unidades</p>');
	$('.modulo-3').append('<p class="resultado">por lo tanto el resultado es ' + (number1 - sumando1) + (number2 - sumando2) +(number3 - sumando3 + '</p>'));
}
//resta digitos de tres cifras
function btnRestaTresDigitos(classBtn, pos){
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
					restaTresDigitos(num);
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
				restaTresDigitos(num);
				if(num == minDesc){
					$('.content-contenido-active .modulo-3 ' + classBtn + ' .input' + pos).addClass('min');
				}
			}
		}
	});
}

//resta con reserva
function restaConReserva(num){
	var decenas = Math.floor(num / 10);
	var unidades = num - (decenas*10);
	var numRandom1 = Math.floor((Math.random() * (9 - unidades)) + 1);
	var numRandom2 = Math.floor((Math.random() * (9 - decenas)) + 1);
	
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
//////////////////////////////////////////////////
//induccion de modulos
function cargaModuloResta1(){
	var continuar = false;
	$('.content-contenido-active .modulo-1 .input .btn-input').off();
	$('.modulo-1').append('<div class="firstResta">' + 
		'<div class="input max"><span>5</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>' + 
		'</div>');
	$('.modulo-1').addClass('beginModulo');
	setTimeout(function(){
		$('.modulo-1 .firstResta').addClass('activeFirst');
		changeNumber('.firstResta');
	}, 300);
	$('.modulo-1 small').empty().text('Ingresa un número entre 2 y 5');
	//si cambia el primer numero
	$('.modulo-1 .firstResta .input').on('click', function(){
		$('.modulo-1 .firstResta').addClass('activeResta');
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
				firstNum = $('.modulo-1 .firstResta .input span').eq(0).text();
				$('.modulo-1 .content-input .input').eq(0).children('span').empty();
				$('.modulo-1 .content-input .input').eq(0).children('span').text(firstNum);
				$('.modulo-1 .content-input .input').eq(0).removeClass('max');
				if(firstNum == 5){
					$('.modulo-1 .content-input .input').eq(0).addClass('max').removeClass('min');
				}else if(firstNum == 2){
					$('.modulo-1 .content-input .input').eq(0).addClass('min').removeClass('max');
				}
				$('.modulo-1 .firstResta .input .btn-input').off();
				$('.modulo-1 .firstResta').append(' - <div class="input min"><span>1</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>');
				changeNumber('.firstResta');
				$('.modulo-1 small').empty().text('Ingresa el número que quieres restar, recuerda que tiene que ser menor a ' + firstNum);
				paso = 2;
			}else if(paso == 2){
				var secondNum = $('.modulo-1 .firstResta .input span').eq(1).text();
				$('.modulo-1 .content-input .input').eq(1).children('span').empty();
				$('.modulo-1 .content-input .input').eq(1).children('span').text(secondNum);
				if(secondNum == (firstNum - 1)){
					$('.modulo-1 .content-input .input').eq(1).addClass('max').removeClass('min');
				}else if(secondNum == 1){
					$('.modulo-1 .content-input .input').eq(1).addClass('min').removeClass('max');
				}
				$('.modulo-1 .firstResta, .modulo-1 .content-continuar').fadeOut('slow');
				$('.modulo-1 small').empty().text('Selecciona el número mayor y luego el que quieres restar');
				$('.modulo-1').append('<div class="resetModulo" data-reset="0" data-section="3"><i class="fa fa-refresh"></i></div>');
				$('.resetModulo').off();
				resetModulo();
				changeNumberResta('.content-input');
				restaNumber();
				setTimeout(function(){
					$('.modulo-1 .firstResta, .modulo-1 .content-continuar').remove();
					$('.modulo-1').removeClass('beginModulo');
				}, 600);
				setTimeout(function(){
					$('.modulo-1 .resetModulo').addClass('on-button');
				}, 900);
				moduloResta1 = true;
			}
		});
	}
}
function cargaModuloResta2(){
	var continuar = false;
	$('.content-contenido-active .modulo-2 .input .btn-input').off();
	$('.modulo-2').append('<div class="firstSuma">' + 
		'<div class="input min second"><span>21</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>' + 
		'</div>');
	$('.modulo-2').addClass('beginModulo');
	setTimeout(function(){
		$('.modulo-2 .firstSuma').addClass('activeFirst');
		btnRestaDosDigitos('.firstSuma', '.second');
	}, 300);
	$('.modulo-2 .area-suma').hide();
	$('.modulo-2 small').empty().text('Ingresa un número entre 21 y 39');
	//si cambia el numero
	$('.modulo-2 .firstSuma .input .btn-input').on('click', function(){
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
			firstNum = $('.modulo-2 .firstSuma .input span').text();
			$('.modulo-2 .input').eq(0).children('span').empty();
			$('.modulo-2 .input').eq(0).children('span').text(firstNum);
			$('.modulo-2 .firstSuma, .modulo-2 .content-continuar').fadeOut('slow');
			$('.modulo-2 small').empty().text('Selecciona un número y observa el resultado');
			$('.modulo-2').append('<div class="resetModulo" data-reset="1" data-section="3"><i class="fa fa-refresh"></i></div>');
			$('.resetModulo').off();
			resetModulo();
			restaDosDigitos(firstNum);
			btnRestaDosDigitos('', '.first');
			setTimeout(function(){
				$('.modulo-2 .firstSuma, .modulo-2 .content-continuar').remove();
				$('.modulo-2').removeClass('beginModulo');
				$('.modulo-2 .area-suma').fadeIn('slow');
			}, 600);
			setTimeout(function(){
				$('.modulo-2 .resetModulo').addClass('on-button');
			}, 900);
			moduloResta2 = true;
		});
	}
}
function cargaModuloResta3(){
	var continuar = false;
	$('.content-contenido-active .modulo-3 .input .btn-input').off();
	$('.modulo-3').append('<div class="firstSuma">' + 
		'<div class="input min second"><span>111</span><div class="btn-input" data-modo="+">&#9650;</div><div class="btn-input" data-modo="-">&#9660;</div></div>' + 
		'</div>');
	$('.modulo-3').addClass('beginModulo');
	setTimeout(function(){
		$('.modulo-3 .firstSuma').addClass('activeFirst');
		btnRestaTresDigitos('.firstSuma', '.second');
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
			restaTresDigitos(firstNum);
			btnRestaTresDigitos('', '.first');
			setTimeout(function(){
				$('.modulo-3 .firstSuma, .modulo-3 .content-continuar').remove();
				$('.modulo-3').removeClass('beginModulo');
				$('.modulo-3 .area-suma').fadeIn('slow');
			}, 600);
			setTimeout(function(){
				$('.modulo-3 .resetModulo').addClass('on-button');
			}, 900);
			moduloResta3 = true;
		});
	}
}
function cargaModuloResta4(){

}