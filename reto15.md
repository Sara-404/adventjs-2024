# Reto 15: Dibujando tablas
## Descripción
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

* Tiene una cabecera con el nombre de la columna.
* El nombre de la columna pone la primera letra en mayúscula.
* Cada fila debe contener los valores de los objetos en el orden correspondiente.
* Cada valor debe estar alineado a la izquierda.
* Los campos dejan siempre un espacio a la izquierda.
* Los campos dejan a la derecha el espacio necesario para alinear la caja.

Mira el ejemplo para ver cómo debes dibujar la tabla:

```js
drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
```

## Solución propuesta

```js
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
```

Para ver el código al completo :arrow_right:
[Reto 15](https://github.com/Sara-404/adventjs-2024/blob/main/reto15.js)