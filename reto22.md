# Reto 22: Genera combinaciones de regalos
## Descripción
Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

```js
generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]

```


## Solución propuesta

```js
/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const result = []

    function backtracking(indice, regalos){

        //si el array regalos tiene al menos un juguete
        if(regalos.length > 0){
            //lo añade a result en forma de array
            result.push([...regalos])
        }
        
        //bucle para recorrer gifts a partir del índice indicado
        for(let i = indice; i < gifts.length; i++){
            //se añade a regalos el regalo del índice
            regalos.push(gifts[i])
            //se llama a la función con un índice mayor y se le pasa regalos
            backtracking(i + 1, regalos)
            //se quita el último para que no se repita
            regalos.pop()
        }
    
    }

    backtracking(0, [])
    
    return result.sort((a,b) => a.length - b.length)
}

```

Para ver el código al completo :arrow_right:
[Reto 22](https://github.com/Sara-404/adventjs-2024/blob/main/reto22.js)