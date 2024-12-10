# Reto 9: El tren mágico
## Descripción

Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

* board es un array de strings que representa el tablero:
* @ es la locomotora del tren.
o son los vagones del tren.
* Esto → * es una fruta mágica.
* Esto → · son espacios vacíos.
* mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:
  * 'L': izquierda
  * 'R': derecha
  * 'U': arriba
  * 'D': abajo.

Con esta información, debes devolver una cadena de texto:

* 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
* 'eat': Si el tren recoge una fruta mágica (*).
* 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.

Ejemplo:

```js
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
```

## Solución propuesta

```js
/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
        
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
```

Para ver el código al completo :arrow_right:
[Reto 9](https://github.com/Sara-404/adventjs-2024/blob/main/reto9.js)