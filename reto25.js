/*
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.
*/
console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let valor = 0

    for(let i = 0; i<code.length; i++){
        switch(code[i]){
            case ('+'): 
                valor +=1
                break
            case ('-'):
                valor -=1
                break
            case ('['):
                //si no es 0 ejecuta las instrucciones de dentro hasta que da 0, y si lo es salta a ']'
                //por lo tanto el valor acaba siendo 0 sí o sí, y avanza hasta después de ']'
                valor = 0
                i = code.indexOf(']', i)
                break
            case ('{'):
                //si el valor es 0, avanza hasta '}', sino pasa al siguiente
                if(valor === 0){
                    i = code.indexOf('}', i)
                }
                break
            default:
                //'>', ']' y '}' nada, sólo avanza
        }
    }

    return valor
}

/*
    PSEUDOCÓDIGO
    VALOR = 0
    LEER CODE
        CASO '>' AVANZAR
        CASO '+' VALOR + 1
        CASO '-' VALOR - 1
        CASO '[' VALOR = 0, AVANZA HASTA ']' + 1
        CASO '{' 
            SI VALOR NO ES 0 EJECUTA LAS INSTRUCCIONES SIGUIENTES
            SI VALOR ES 0 AVANZA HASTA '}' + 1
        CASO ']' AVANZAR
        CASO '}' AVANZAR
    DEVOLVER VALOR
*/