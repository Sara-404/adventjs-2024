# Reto 21: Calcula la altura del árbol de navidad
## Descripción
Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial en forma de árbol binario. Cada nodo del árbol representa un regalo, y Santa quiere saber la altura del árbol para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.

```js
// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3

```


## Solución propuesta

```js
/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {

    if(tree === null) return 0
    
    const left = treeHeight(tree.left)
    const right = treeHeight(tree.right)


    //se suma 1 para añadir el nodo actual
    return Math.max(left, right) + 1
}
```

Para ver el código al completo :arrow_right:
[Reto 21](https://github.com/Sara-404/adventjs-2024/blob/main/reto21.js)