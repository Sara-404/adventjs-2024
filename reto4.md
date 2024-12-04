# Reto 4: Decorando el árbol de Navidad
## Descripción
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

* La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:
* El árbol está compuesto de triángulos de caracteres especiales.
* Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
* Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
* El árbol siempre debe tener la misma longitud por cada lado.

Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

Ejemplos:

```js
const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.

## Solución propuesta

```js
function createXmasTree(height, ornament) {
    //NO SE ESPECIFICA QUÉ HAY QUE DEVOLVER CON ALTURA 0 (O 1)

    let lineas = []
    let dibujoFinal = ''

    //construcción del árbol
    for(let i = 1; i<= height; i++){
        let barras = '_'.repeat(height - i)
        let linea = barras + ornament.repeat(2*i -1) + barras
        lineas.push(linea)
    }

    //construcción del tronco
    let tronco = '_'.repeat(height-1) + '#' + '_'.repeat(height - 1)
    lineas.push(tronco)
    lineas.push(tronco)

    //pasar de array a string
    for(let i = 0; i < lineas.length - 1; i++){
        dibujoFinal += lineas[i] + '\n'
    }

    //para que la última no contenga un salto de línea
    dibujoFinal += lineas[lineas.length-1]

    return dibujoFinal
}
```
Para ver el código al completo :arrow_right:
[Reto 4](https://github.com/Sara-404/adventjs-2024/blob/main/reto4.js)