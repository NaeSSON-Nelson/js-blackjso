import {pedirCarta,valorCarta}from './';
/**
 * 
 * @param {String} carta nombre del asset de la carta 
 * @param {HTMLElement} divCard div padre de la cartas de la computadora 
 */
const viewCardComputer=(carta,divCard)=>{
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCard.append( imgCarta );

}
/**
 * tiempo delay
 */
const timeOut=(puntosComputadora,puntosMinimos)=>{

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
/**
 *  EL TURNO DE LA COMPUTADORA
 * @param {Number} puntosMinimos los puntos minimos para ganar de la computadora 
 * @param {Array<String>} deck el deck usado
 * @param {HTMLElement} marcador el marcador de los puntos de la computadora
 */
export const turnoComputadora = ( puntosMinimos,deck,divCardComputer,marcador ) => {

    let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        marcador.innerText = puntosComputadora;
        viewCardComputer(carta,divCardComputer);
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    timeOut(puntosComputadora,puntosMinimos);
}