# Reto 23: Encuentra los números perdidos
## Descripción
Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

* Los números pueden aparecer más de una vez y otros pueden faltar
* El array siempre contiene números enteros positivos
* Siempre se empieza a contar desde el 1

```js
findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]

```


## Solución propuesta

```js
/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    
    let result = []

    //creo un array que es todos los números desde el 1 hasta el máximo de nums
    for(let i = 1; i < Math.max(...nums); i++){
        result.push(i)
    }
    
    //devuelvo el array eliminando los elementos que están en nums
    return result.filter((value) => !nums.includes(value))
    
}
```

Para ver el código al completo :arrow_right:
[Reto 23](https://github.com/Sara-404/adventjs-2024/blob/main/reto23.js)