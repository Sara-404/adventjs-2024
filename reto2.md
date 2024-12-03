# Reto 2 Enmarcando nombres
## Descripción
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

```js
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```

## Solución propuesta

```js
function createFrame(names) {
    //NO ESPECIFICA SI EL ARRAY ESTÁ VACÍO QUÉ HABRÍA QUE DEVOLVER
    if(names.length === 0) return ''
    
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
```
Para ver el código al completo :arrow_right:
[Reto 2](https://github.com/Sara-404/adventjs-2024/blob/main/reto2.js)