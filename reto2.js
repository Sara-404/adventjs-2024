/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:
*/
console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

// Resultado esperado:
/*
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

console.log(createFrame(['midu']))

// Resultado esperado:
/*
********
* midu *
********
*/

console.log(createFrame(['a', 'bb', 'ccc']))

// Resultado esperado:
/*
*******
* a   *
* bb  *
* ccc *
*******
*/

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))

//otra solución menos eficiente con 3 estrellas de 5
// function createFrame(names) {
//     //DUDA A DESCUBRIR: NO ESPECIFICA SI EL ARRAY ESTÁ VACÍO QUÉ HABRÍA QUE DEVOLVER
//     if(names.length === 0) return ''
    
//     let marco = ''
//     let lengthMax = names[0].length

//     for(let i = 1; i<names.length; i++){
//         if(names[i].length > lengthMax){
//             lengthMax = names[i].length
//         }
//     }

//     //comenzamos el marco
//     marco += '*'.repeat(lengthMax+4) + '\n'

//     for(let i = 0; i<names.length; i++){
//         marco += '* ' + names[i] + ' '.repeat(lengthMax-names[i].length) + ' *\n'
//     }

//     marco += '*'.repeat(lengthMax+4)

//     return marco
// }

function createFrame(names) {
    
    //! esta línea es la que me da 4 estrellas en vez de 5
    //if(names.length === 0) return ''
    
    const lineas = []
    let lengthMax = 0

    for(let nombre of names){
        if(nombre.length > lengthMax){
            lengthMax = nombre.length
        }
        lineas.push(nombre)
    }

    //comenzamos el marco
    const borde = '*'.repeat(lengthMax+4)

    const lineasEnMarco = lineas.map(
        name => `* ${name}${' '.repeat(lengthMax - name.length)} *`
    )
    

    return [borde, ...lineasEnMarco, borde].join('\n')
}