/* El tren mágico
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
Ejemplo:
*/

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha


/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    //SIGUE TENIENDO MALA PUNTUACIÓN    
    //línea donde está la locomotora
    let lineaLoco
    //índice donde está la locomotora en la línea
    let locomotora

    //definimos lineaLoco y locomotora
    for(let i = 0; i < board.length; i++){
        if(board[i].includes('@')){
            lineaLoco = i
            locomotora = board[lineaLoco].indexOf('@')
        }
    }

    //si no hay locomotora, no hace nada
    if(lineaLoco === undefined || locomotora === undefined) return 'none'

    //calculo la NUEVA POSICIÓN según el movimiento
    const movimientos = {
        'U' : [lineaLoco - 1, locomotora],
        'D' : [lineaLoco + 1, locomotora],
        'L' : [lineaLoco, locomotora - 1],
        'R' : [lineaLoco, locomotora + 1]
    }
    
    //se establece dónde está la nueva locomotora y su línea
    const [newLineaLoco, newLoco] = movimientos[mov]

    //miramos si se choca
    if(newLineaLoco < 0 || newLineaLoco > board.length - 1 || newLoco < 0 || newLoco > board[locomotora].length - 1){
        return 'crash'
    }

    let caracterNuevo = board[newLineaLoco][newLoco]
    if(caracterNuevo === '*') return 'eat'
    else if(caracterNuevo === 'o') return 'crash'
    
    return 'none'
    
}


// /**
//  * @param {string[]} board - Represent the train situation
//  * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
//  * @returns {'none' | 'crash' | 'eat'}
//  */
// function moveTrain(board, mov) {
// //FUNCIONA BIEN PERO TERRIBLE PUNTUACIÓN
//     //posición del ARRAY donde está la locomotora
//     let lineaLoco
//     //índice de la línea donde está la locomotora en el string
//     let locomotora

//     //se establece el índice de dónde está la locomotora en el array y en qué lugar del string
//     for(let i = 0; i < board.length; i++){
//         if(board[i].includes('@')){
//             lineaLoco = i
//             locomotora = board[lineaLoco].indexOf('@')
//         }
//     }

//     //sino hay locomotora, no hace nada
//     if(lineaLoco === undefined || locomotora === undefined) return 'none'

//     switch(mov){
//         //ARRIBA
//         case 'U':
//             if(lineaLoco > 0){
//                 if(board[lineaLoco - 1].includes('*') && board[lineaLoco - 1].indexOf('*') === locomotora){
//                     return 'eat'
//                 }
//                 else if(board[lineaLoco - 1].includes('o') && board[lineaLoco - 1].indexOf('o') === locomotora){
//                     return 'crash'
//                 }
//                 else{
//                     return 'none'
//                 }
//             }
//             else{
//                 //si está en el primer string se choca con la pared de arriba
//                 return 'crash'
//             }
//             break
//         //DERECHA
//         case 'R':
//             if(locomotora < board[lineaLoco].length - 1){
//                 if(board[lineaLoco].charAt(locomotora + 1) === '*'){
//                     return 'eat'
//                 }
//                 else if(board[lineaLoco].charAt(locomotora + 1) === 'o'){
//                     return 'crash'
//                 }
//                 else{
//                     return 'none'
//                 }
//             }
//             else{
//                 //si la locomotora está a la derecha del todo se choca
//                 return 'crash'
//             }
//             break
//         //IZQUIERDA
//         case 'L':
//             if(locomotora > 0){
//                 if(board[lineaLoco].charAt(locomotora - 1) === '*'){
//                     return 'eat'
//                 }
//                 else if(board[lineaLoco].charAt(locomotora - 1) === 'o'){
//                     return 'crash'
//                 }
//                 else{
//                     return 'none'
//                 }
//             }
//             else{
//                 //si la locomotora está a la izquierda del todo se choca
//                 return 'crash'
//             }
//             break
//         //ABAJO
//         default:
//             if(lineaLoco < board.length - 1){
//                 if(board[lineaLoco + 1].includes('*') && board[lineaLoco + 1].indexOf('*') === locomotora){
//                     return 'eat'
//                 }
//                 else if(board[lineaLoco + 1].includes('o') && board[lineaLoco + 1].indexOf('o') === locomotora){
//                     return 'crash'
//                 }
//                 else{
//                     return 'none'
//                 }
//             }
//             else{
//                 //si está en la última string se choca con la pared de abajo
//                 return 'crash'
//             }
//     }

//   }