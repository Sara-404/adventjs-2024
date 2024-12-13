# Reto 13: ¿El robot está de vuelta?
## Descripción

Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

* L: Mover hacia la izquierda
* R: Mover hacia la derecha
* U: Mover hacia arriba
* D: Mover hacia abajo

Pero también tiene ciertos modificadores para los movimientos:

* *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
* !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
* ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)

Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

* true: si el robot vuelve a estar justo donde empezó
* [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo

```js
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
```

## Solución propuesta

```js
/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {

    let posicion = [0,0]
    let movsHechos = new Set()
    let invertMov = false
    let multiplicarMov = 1

    for(let i = 0; i < moves.length; i++){
        
        let mov = moves[i]

        if(mov === '*' && i < moves.length - 1){
            multiplicarMov = 2
            continue
        }

        else if(mov === '?'){
            if(i < moves.length - 1 && movsHechos.has(moves[i+1])){
                i++
            }
            continue
        }

        else if(mov === '!' && i < moves.length - 1){
            invertMov = true
            continue
        }

        if(invertMov === true){
            switch(mov){
                case 'R': 
                    mov = 'L'
                    break
                case 'L':
                    mov = 'R'
                    break
                case 'U':
                    mov = 'D'
                    break
                case 'D':
                    mov = 'U'
                    break
            }
            invertMov = false
        }

        switch(mov){
            case 'R':
                if(multiplicarMov === 2) posicion[0]++
                posicion[0]++
                break
            case 'L':
                if(multiplicarMov === 2) posicion[0]--
                posicion[0]--
                break
            case 'U':
                if(multiplicarMov === 2) posicion[1]++
                posicion[1]++
                break
            case 'D':
                if(multiplicarMov === 2) posicion[1]--
                posicion[1]--
                break 
        }

        multiplicarMov = 1

        movsHechos.add(mov)
    }

    

    return (posicion[0] === 0 && posicion[1] === 0) ? true : posicion
}
```

Para ver el código al completo :arrow_right:
[Reto 13](https://github.com/Sara-404/adventjs-2024/blob/main/reto13.js)