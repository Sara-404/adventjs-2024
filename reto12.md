# Reto 12: ¿Cuánto cuesta el árbol?
## Descripción

Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

* *: Copo de nieve - Valor: 1
* o: Bola de Navidad - Valor: 5
* ^: Arbolito decorativo - Valor: 10
* #: Guirnalda brillante - Valor: 50
* @: Estrella polar - Valor: 100

Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.

```js
calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z es desconocido)
```

## Solución propuesta

```js
/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {

    let adornos = new Map([
        ['*', 1],
        ['o', 5],
        ['^', 10],
        ['#', 50],
        ['@', 100]
    ])
    
    let precio = 0
    
    for(let i = 0; i < ornaments.length - 1; i++){
        const adorn = ornaments[i]
        const valorAdorno = adornos.get(adorn)
        const valorSiguiente = adornos.get(ornaments[i+1])
        

        precio += (valorAdorno < valorSiguiente) ? -valorAdorno : +valorAdorno

    }
    //se añade el último elemento
    precio += adornos.get(ornaments[ornaments.length - 1])

    return isNaN(precio) ? undefined : precio 

}
```

Para ver el código al completo :arrow_right:
[Reto 12](https://github.com/Sara-404/adventjs-2024/blob/main/reto12.js)