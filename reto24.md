# Reto 24: Verifica si los árboles son espejos mágicos
## Descripción
En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

Dos árboles binarios son espejos si:

* Las raíces de ambos árboles tienen el mismo valor.
* Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.
* Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):

```js
const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}
```
Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados y la segunda posición devuelve el valor de la raíz del primer árbol.

```js
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']
```

## Solución propuesta

```js
/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {

    function comprobarEspejo(tree_1,tree_2){
        //si los dos nodos son undefined, son simétricos
        if(tree_1 === undefined && tree_2 === undefined){
            return true
        }
        //si uno de los nodos es undefined y el otro no, no son simétricos
        else if(tree_1 === undefined || tree_2 === undefined){
            return false
        }
        //devuelve si el lado izq en uno es igual al der en el otro y si el valor es igual
        return (tree_1.value === tree_2.value) &&
            comprobarEspejo(tree_1.left, tree_2.right) &&
            comprobarEspejo(tree_1.right, tree_2.left)
        
    }

    if(comprobarEspejo(tree1, tree2)) return [true, tree1.value]

    return [false, tree1.value]
}
```

Para ver el código al completo :arrow_right:
[Reto 24](https://github.com/Sara-404/adventjs-2024/blob/main/reto24.js)