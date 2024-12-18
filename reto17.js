/*
El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉
*/

console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [true, false],
  [false, false]
]))
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true]
]))

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]


/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {

    let result = []

    const direcciones = [
        [-1,-1], [-1,0], [-1,1],
        [0,-1], [0, 1],
        [1,-1], [1,0], [1, 1]
    ]

    for(let fila = 0; fila < grid.length; fila++){

        result[fila] ??= []

        for(let lugar = 0; lugar < grid[fila].length; lugar++){

            result[fila][lugar] ??= 0

            if(grid[fila][lugar] === true){

                for(let [x,y] of direcciones){
                    const nuevaFila = fila + x
                    const nuevaCol = lugar + y

                    if(nuevaFila >= 0 && nuevaFila < grid.length &&
                        nuevaCol >= 0 && nuevaCol < grid[fila].length
                    ){
                        result[nuevaFila] ??= []
                        result[nuevaFila][nuevaCol] ??= 0
                        result[nuevaFila][nuevaCol] += 1
                    }
                }
            }
        }
    }


    return result
}



/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
// function detectBombs(grid) {

//     //! 4 estrellas
//     let result = grid.map(array => 
//         array.map(() => 0)
//     )

//     const direcciones = [
//         [-1,-1], [-1,0], [-1,1],
//         [0,-1], [0, 1],
//         [1,-1], [1,0], [1, 1]
//     ]

//     for(let fila = 0; fila < grid.length; fila++){

//         for(let lugar = 0; lugar < grid[fila].length; lugar++){

//             if(grid[fila][lugar] === true){

//                 for(let [x,y] of direcciones){
//                     const nuevaFila = fila + x
//                     const nuevaCol = lugar + y

//                     if(nuevaFila >= 0 && nuevaFila < grid.length &&
//                         nuevaCol >= 0 && nuevaCol < grid[fila].length
//                     ){
//                         result[nuevaFila][nuevaCol] += 1
//                     }
//                 }
//             }
//         }
//     }


//     return result
// }


/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
// function detectBombs(grid) {
    
//     //! me faltaron las diagonales y . No lo veo muy eficiente

//     let result = grid.map(array => 
//         array.map(() => 0)
//     )

//     for(let fila = 0; fila < grid.length; fila++){

//         for(let lugar = 0; lugar < grid[fila].length; lugar++){

//             if(grid[fila][lugar] === true){

//                 if(lugar - 1 >= 0) result[fila][lugar-1] += 1
//                 if(lugar + 1 < grid[fila].length) result[fila][lugar+1] +=1
//                 if(fila - 1 >= 0) result[fila-1][lugar] += 1
//                 if(fila + 1 < grid.length) result[fila+1][lugar] += 1
//             }
//         }
//     }


//     return result
// }