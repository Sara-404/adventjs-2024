# Reto 5: Emparejando botas
## Descripción
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

* type indica si es una bota izquierda (I) o derecha (R).
* size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

```js
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
```

## Solución propuesta

```js
function organizeShoes(shoes) {
    
    let pairedShoes = []
    let mapShoes = new Map()

    for(const {type, size} of shoes){

        const pairType = type === 'I'? 'R' : 'I'
        const pairKey = `${pairType}-${size}`
        const key = `${type}-${size}`

        //si el mapa tiene el otro par un número mayor que 0
        if(mapShoes.get(pairKey) > 0){
            //entonces se resta del mapa y se añade a pairedShoes
            pairedShoes.push(size)
            mapShoes.set(pairKey, (mapShoes.get((pairKey)) - 1))
        }
        //si no lo tiene, se guarda este en el mapa
        else{
            mapShoes.set(key, (mapShoes.get(key) || 0) + 1)
        }

    }
    
    return pairedShoes
}
```
Para ver el código al completo :arrow_right:
[Reto 5](https://github.com/Sara-404/adventjs-2024/blob/main/reto5.js)