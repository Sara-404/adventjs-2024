# Reto 20: Encuentra los regalos faltantes y duplicados
## Descripción
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

* received: Lista con los regalos que Santa tiene actualmente.
* expected: Lista con los regalos que Santa debería tener.

Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

* missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
* extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.

Ten en cuenta que:

* Los regalos pueden repetirse en ambas listas.
* Las listas de regalos están desordenadas.
* Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.

```js
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
```


## Solución propuesta

```js
/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    
    let result = {
        missing: {},
        extra: {}
    }

    for(const objeto of expected){
        if(received.includes(objeto)){
            //lo elimino
            received.splice(received.indexOf(objeto), 1)
        }
        else{
            //lo añado a missing
            result.missing[objeto] = (result.missing[objeto] || 0) + 1
        }
    }

    for(const objeto of received){
        //los que sobran los añado a extra
        result.extra[objeto] = (result.extra[objeto] || 0) + 1
    }
    
    return result
}
```

Para ver el código al completo :arrow_right:
[Reto 20](https://github.com/Sara-404/adventjs-2024/blob/main/reto20.js)