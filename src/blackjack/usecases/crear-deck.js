import _ from 'underscore';

//EXPORTAR POR DEFECTO

//ESTA FUNCION ES BARAJAR DECK
//COMENTARIOS GOD
/**
 * 
 * @param {Array<String>} tiposDeCartas 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} //REGRESA EL NUEVO DECK DE CARTAS
 */
export const crearDeck = (tiposDeCartas,tiposEspeciales) => {
    
    let deck=[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    return _.shuffle( deck );
    
}

export default crearDeck;