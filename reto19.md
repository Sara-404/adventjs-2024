# Reto 19: Aplica cajas mágicas para repartir regalos
## Descripción
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

```js
    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
```
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

```js
distributeWeight(1)
// Devuelve:
//  _
// |_|

distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
```

_Nota_: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.

## Solución propuesta

```js
/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {

    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    let arrCajas = []
    let cajas = [10,5,2,1]
    let cajasReales = []

    //almacenamos las cajas que vamos a utilizar en el array cajasReales
    for(const caja of cajas){
        while(weight >= caja){
            cajasReales.push(caja)
            weight -= caja
        }
    }

    //invertimos el array para apilar las cajas por orden
    cajasReales = cajasReales.reverse()

    for(let i = 0; i < cajasReales.length; i++){
        
        //slice para que no modifique la referencia, sino que cree una copia
        const caja = boxRepresentations[cajasReales[i]].slice()

        //si no es la primera caja, la primera línea se va
        if(i > 0){
            caja.shift()
        }

        //si no es la última caja, hay que modificar la última línea
        if(i < cajasReales.length - 1){
            //obtenemos la siguiente caja y el largo de su primera línea
            const sigCaja = boxRepresentations[cajasReales[i + 1]]
            let largoSigCaja = sigCaja[sigCaja.length - 1].length - 1
            
            //en la última línea de la caja actual se añaden los guiones hasta 
            //igualar el largo de la primera línea de la siguiente caja
            caja[caja.length - 1] = caja[caja.length - 1].padEnd(largoSigCaja, '_')
        }
        
        //añadimos al resultado la caja
        arrCajas.push(...caja)

    }

    return arrCajas.join('\n')

}
```

Para ver el código al completo :arrow_right:
[Reto 19](https://github.com/Sara-404/adventjs-2024/blob/main/reto19.js)