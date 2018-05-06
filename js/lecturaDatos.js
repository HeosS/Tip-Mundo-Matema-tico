var fileNull = '<empty>';

function lecturaDatos(){
    if(sonido != fileNull){
		sonido;
	}else{
		sonido = 0;
	}
    
	if(nombreActivo != fileNull){
		$('.perfil h2').append(nombreActivo);
		$('.avatar').addClass(avatarActivo);
		nombre = 1;
	}else{
		nombreActivo = nombre;
		nombre = 0;
	}
	
	if(totalPistas != fileNull){
		totalPistaData = totalPistas;
	}else{
		totalPistaData = 5;
	}
};
	
function lecturaPuntajeJuego(puntajeLectura, juego, copa, nivelCopa, nivel, nivelNext, insignia){
	var puntos = juego + ' ' + nivel + ' .puntos';
	if(puntajeLectura != fileNull){
		$(puntos).append('<b>Puntos obtenidos:</b><br>' + puntajeLectura + ' pt<b> / 100 pt</b>');
		copa = nivelCopa;
		if(puntajeLectura >= 100){
			$(juego + ' ' + insignia).show();
			$(juego + ' ' + nivel).addClass('superado');
			$(puntos).addClass('puntos-active');
			$(juego + ' ' + nivelNext + ' .bloqueado').hide();
			$(juego + ' ' + nivel + ' .imagen-nivel').removeClass('copa-bloqueada');
			copa = '';
		}
		return puntajeLectura;
	}else{
		puntajeLectura = 0;
		copa = nivelCopa;
		$(puntos).append('<b>Puntos obtenidos:</b><br>' + puntajeLectura + ' pt<b> / 100 pt</b>');
		return puntajeLectura;
	}
}
	
function totalCopas(puntajeObtenido, clase, totalCopasDashboard){
	if(puntajeObtenido >= 100){
		totalCopasDashboard++;
		$(clase).empty().append(totalCopasDashboard);
	}else {
		$(clase).empty().append(totalCopasDashboard);
	}
	return totalCopasDashboard;
}
	
//lectura 
function lecturaPuntaje(){	
	//juego 1
	puntajeBasicoMat1 = lecturaPuntajeJuego(puntajeBasicoMat1, '.juego-mat-1', copaBasicoMat1, 'copaBasicoMat1', '.nivel-1', '.nivel-2', '.insignia-1');
	resultCopaBasico = totalCopas(puntajeBasicoMat1, '.total-copa-basico', totalCopasBasico);
	totalCopasBasico =+ resultCopaBasico;

	puntajeMedioMat1 = lecturaPuntajeJuego(puntajeMedioMat1, '.juego-mat-1', copaMedioMat1, 'copaMedioMat1', '.nivel-2', '.nivel-3', '.insignia-2');
	resultCopaMedio = totalCopas(puntajeMedioMat1, '.total-copa-medio', totalCopasMedio);
	totalCopasMedio =+ resultCopaMedio;
	
	puntajeAvanzadoMat1 = lecturaPuntajeJuego(puntajeAvanzadoMat1, '.juego-mat-1', copaAvanzadoMat1, 'copaAvanzadoMat1', '.nivel-3', '.nivel-3', '.insignia-3');
	resultCopaAvanzado = totalCopas(puntajeAvanzadoMat1, '.total-copa-avanzado', totalCopasAvanzado);
	totalCopasAvanzado =+ resultCopaAvanzado;

	//juego 2
	puntajeBasicoMat2 = lecturaPuntajeJuego(puntajeBasicoMat2, '.juego-mat-2', copaBasicoMat2, 'copaBasicoMat2', '.nivel-1', '.nivel-2', '.insignia-1');
	resultCopaBasico = totalCopas(puntajeBasicoMat2, '.total-copa-basico', totalCopasBasico);
	totalCopasBasico =+ resultCopaBasico;

	puntajeMedioMat2 = lecturaPuntajeJuego(puntajeMedioMat2, '.juego-mat-2', copaMedioMat2, 'copaMedioMat2', '.nivel-2', '.nivel-3', '.insignia-2');
	resultCopaMedio = totalCopas(puntajeMedioMat2, '.total-copa-medio', totalCopasMedio);
	totalCopasMedio =+ resultCopaMedio;
	
	puntajeAvanzadoMat2 = lecturaPuntajeJuego(puntajeAvanzadoMat2, '.juego-mat-2', copaAvanzadoMat2, 'copaAvanzadoMat2', '.nivel-3', '.nivel-3', '.insignia-3');
	resultCopaAvanzado = totalCopas(puntajeAvanzadoMat2, '.total-copa-avanzado', totalCopasAvanzado);
	totalCopasAvanzado =+ resultCopaAvanzado;

	//juego 3
	puntajeBasicoMat3 = lecturaPuntajeJuego(puntajeBasicoMat3, '.juego-mat-3', copaBasicoMat3, 'copaBasicoMat3', '.nivel-1', '.nivel-2', '.insignia-1');
	resultCopaBasico = totalCopas(puntajeBasicoMat3, '.total-copa-basico', totalCopasBasico);
	totalCopasBasico =+ resultCopaBasico;

	puntajeMedioMat3 = lecturaPuntajeJuego(puntajeMedioMat3, '.juego-mat-3', copaMedioMat3, 'copaMedioMat3', '.nivel-2', '.nivel-3', '.insignia-2');
	resultCopaMedio = totalCopas(puntajeMedioMat3, '.total-copa-medio', totalCopasMedio);
	totalCopasMedio =+ resultCopaMedio;
	
	puntajeAvanzadoMat3 = lecturaPuntajeJuego(puntajeAvanzadoMat3, '.juego-mat-3', copaAvanzadoMat3, 'copaAvanzadoMat3', '.nivel-3', '.nivel-3', '.insignia-3');
	resultCopaAvanzado = totalCopas(puntajeAvanzadoMat3, '.total-copa-avanzado', totalCopasAvanzado);
	totalCopasAvanzado =+ resultCopaAvanzado;

	//juego 4
	puntajeBasicoMat4 = lecturaPuntajeJuego(puntajeBasicoMat4, '.juego-mat-4', copaBasicoMat4, 'copaBasicoMat4', '.nivel-1', '.nivel-2', '.insignia-1');
	resultCopaBasico = totalCopas(puntajeBasicoMat4, '.total-copa-basico', totalCopasBasico);
	totalCopasBasico =+ resultCopaBasico;

	puntajeMedioMat4 = lecturaPuntajeJuego(puntajeMedioMat4, '.juego-mat-4', copaMedioMat4, 'copaMedioMat4', '.nivel-2', '.nivel-3', '.insignia-2');
	resultCopaMedio = totalCopas(puntajeMedioMat4, '.total-copa-medio', totalCopasMedio);
	totalCopasMedio =+ resultCopaMedio;
	
	puntajeAvanzadoMat4 = lecturaPuntajeJuego(puntajeAvanzadoMat4, '.juego-mat-4', copaAvanzadoMat4, 'copaAvanzadoMat4', '.nivel-3', '.nivel-3', '.insignia-3');
	resultCopaAvanzado = totalCopas(puntajeAvanzadoMat4, '.total-copa-avanzado', totalCopasAvanzado);
	totalCopasAvanzado =+ resultCopaAvanzado;
}