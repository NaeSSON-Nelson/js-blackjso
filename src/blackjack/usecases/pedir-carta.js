

// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} retorna la ultima carta
 */
export const pedirCarta = (deck) => {
   
    if(!deck){
        throw new Error('deck no se esta mandando');
    }
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}