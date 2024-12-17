/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:
*/

console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]))
  // +---------+-----------+
  // | Name    | City      |
  // +---------+-----------+
  // | Alice   | London    |
  // | Bob     | Paris     |
  // | Charlie | New York  |
  // +---------+-----------+

console.log(drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
]))
  // +----------+----------+
  // | Gift     | Quantity |
  // +----------+----------+
  // | Doll     | 10       |
  // | Book     | 5        |
  // | Music CD | 1        |
  // +----------+----------+


/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    
    const tabla = []

    //obtengo el nombre de las claves
    const claves = Object.keys(data[0])

    //array con las length máximas. Inicializa con el ancho del nombre de la propiedad
    let anchos = claves.map((clave) => clave.length)

    //compara las length para guardar en el array anchos las máximas
    for(const objeto of data){
        for(const propiedad in objeto){
            const valor = objeto[propiedad].length
            if(anchos[claves.indexOf(propiedad)] < valor) anchos[claves.indexOf(propiedad)] = valor
        }
    }

    //construcción de la tabla
    
    const borde = '+' + anchos.map(ancho => '-'.repeat(ancho + 2)).join('+') + '+'
    
    const cabecera = '| ' + claves.map((clave, i) => 
        clave[0].toUpperCase() + clave.slice(1).padEnd(anchos[i], ' ')).join('| ') + '|'

    const filas = data.map(objeto => {
        return '| ' + claves.map((clave, i) => 
            String(objeto[clave]).padEnd(anchos[i], ' ')
        ).join(' | ') + ' |'
    })

    tabla.push(borde)
    tabla.push(cabecera)
    tabla.push(borde)
    tabla.push(filas.join('\n'))
    tabla.push(borde)


    return tabla.join('\n')
}


/**
  * @param {Array<Object>} data
  * @returns {string}
  */
// function drawTable(data) {

//     //! 4 estrellas
    
//     const tabla = []

//     //obtengo el nombre de las claves
//     const claves = Object.keys(data[0])

//     //array con las length máximas. Inicializa con el ancho del nombre de la propiedad
//     let anchos = claves.map((clave) => clave.length)

//     //compara las length para guardar en el array anchos las máximas
//     for(const objeto of data){
//         for(const propiedad in objeto){
//             const valor = objeto[propiedad].length
//             if(anchos[claves.indexOf(propiedad)] < valor) anchos[claves.indexOf(propiedad)] = valor
//         }
//     }

//     //construcción de la tabla
    
//     const borde = '+' + anchos.map(ancho => '-'.repeat(ancho + 2)).join('+') + '+'
    
//     const cabecera = '| ' + claves.map((clave, i) => 
//         clave[0].toUpperCase() + clave.slice(1).padEnd(anchos[i], ' ')).join('| ') + '|'

//     const filas = data.map(objeto => {
//         return '| ' + claves.map((clave, i) => 
//             String(objeto[clave]).padEnd(anchos[i], ' ')
//         ).join(' | ') + ' |';
//     })

//     tabla.push(borde)
//     tabla.push(cabecera)
//     tabla.push(borde)
//     tabla.push(filas.join('\n'))
//     tabla.push(borde)


//     return tabla.join('\n')
// }


/**
  * @param {Array<Object>} data
  * @returns {string}
  */
// function drawTable(data) {
    
//     //! FALLA UN TEST SECRETO POR ASUMIR QUE HAY SÓLO DOS COLUMNAS

//     let tabla = ''

//     //para almacenar los valores de cada columna
//     let columna1 = []
//     let columna2 = []

//     //obtengo el nombre de las claves
//     const claves = Object.keys(data[0])
//     const [prop1, prop2] = claves

//     //se asigna el nombre de la propiedad como el nombre más largo de cada columna
//     let largo1 = prop1.length
//     let largo2 = prop2.length

//     for(const objeto of data){
//         //se calcula el nombre más largo de cada propiedad (columna)
//         if(largo1 < objeto[prop1].length) largo1 = objeto[prop1].length
//         if(largo2 < objeto[prop2].length) largo2 = objeto[prop2].length

//         columna1.push(objeto[prop1])
//         columna2.push(objeto[prop2])
//     }

//     //construimos la tabla:
//     let borde = '+' + '-'.repeat(largo1 + 2) + '+' + '-'.repeat(largo2 + 2) + '+'
//     tabla += borde + '\n'

//     //cabecera
//     let cabecera = '| ' + prop1.replace(prop1[0], prop1[0].toUpperCase()) + ' '.repeat((largo1 - prop1.length) + 1)
//     cabecera += '| ' + prop2.replace(prop2[0], prop2[0].toUpperCase()) + ' '.repeat((largo2 - prop2.length) + 1) + '|'
    
//     tabla += cabecera + '\n'
//     tabla += borde + '\n'

//     //campos
//     for(let i = 0; i < columna1.length; i++){
        
//         let nombre1 = String(columna1[i])
//         let nombre2 = String(columna2[i])
        
//         //columna1
//         let linea = '| ' + nombre1 + ' '.repeat((largo1 - nombre1.length) + 1)
//         //columna2
//         linea += '| ' + nombre2 + ' '.repeat((largo2 - nombre2.length) + 1) + '|'

//         tabla += linea + '\n'
//     }

//     tabla += borde

//     return tabla
// }