/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:
*/

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    //para ir almacenando las partes
    let pila = []
    let parteActual = ''

    for(let i = 0; i<packages.length; i++){
    
        let caracter = packages[i]
        switch(caracter){

            case '(':
                //se añade a la pila la parte actual y esta se reinicia
                pila.push(parteActual)
                parteActual = ''
                break
            case ')':
                //se añade lo que estaba en la pila, y la parte actual se le da la vuelta
                parteActual = pila.pop() + parteActual.split('').reverse().join('')
                break
            default:
                //se añade el caracter a la parte actual
                parteActual += caracter
        }
    }

    return parteActual
}

