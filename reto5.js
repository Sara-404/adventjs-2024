/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
*/

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  console.log(organizeShoes(shoes))
  // [38, 42]
  
  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]

  console.log(organizeShoes(shoes2))
  // [38, 38]
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  console.log(organizeShoes(shoes3))
  // []


/**
 * Determines the shoes which can be paired based on their size and type, and returns an array containing the size of shoes which can be paired.
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
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

/**
 * Determines the shoes which can be paired based on their size and type, and returns an array containing the size of shoes which can be paired.
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
// function organizeShoes(shoes) {
    //SOLUCIÓN CORRECTA PERO CON MUY MALA PUNTUACIÓN
//     let pairedShoes = []

//     for(let i = 0; i< shoes.length; i++){
//         const shoeType = shoes[i].type
//         const shoeSize = shoes[i].size
//         const pairType = shoeType === 'I'? 'R' : 'I'

//         for(let j = i + 1; j < shoes.length; j++){
//             if(shoes[i].paired !== true && shoes[j].type === pairType && shoes[j].size === shoeSize && shoes[j].paired !== true){
//                 pairedShoes.push(shoeSize)
//                 shoes[j].paired = true
//                 break
//             }
//         }
//     }
    
//     return pairedShoes
//   }