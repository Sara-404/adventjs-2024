/*
Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

Los números pueden aparecer más de una vez y otros pueden faltar
El array siempre contiene números enteros positivos
Siempre se empieza a contar desde el 1
*/

console.log(findMissingNumbers([1, 2, 4, 6]))
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]))
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]))
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]))
// [4]

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

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    
    //! 4 estrellas
    // //ordeno el array y elimino duplicados convirtiéndolo a set y de nuevo a array
    // nums = Array.from(new Set(nums)).sort((a,b) => a - b)
    
    // let result = [] 

    // //bucle hasta el número más alto (que será el último al haberlo ordenado)
    // for(let i = 1; i< nums[nums.length - 1]; i++){
    //     //si el número no está en nums, lo añade a result
    //     if(!nums.includes(i)){
    //         result.push(i)
    //     }
    // }

    // return result
}