# Reto 10: El ensamblador élfico
## Descripción

Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

* MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
* INC x: Incrementa en 1 el contenido del registro x
* DEC x: Decrementa en 1 el contenido del registro x
* JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.

Comportamiento esperado:
* Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
* El salto con JMP es absoluto y lleva al índice exacto indicado por y.
* Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.

```js
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */
```

__Nota__: Los registros que no han sido inicializados previamente se inicializan a 0.

## Solución propuesta

```js
/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    let registros = new Map()

    for(let i = 0; i< instructions.length; i++){
        const [inst, reg1, reg2] = instructions[i].split(' ')

        if(inst === 'MOV'){
            //compruebo si no es número (es un registro), si lo es lo obtiene del map si existe (sino 0)
            //si es un número lo pasamos a Number (sino se queda string y las sumas son concatenaciones)
            const valor = isNaN(reg1) ? registros.get(reg1) || 0 : Number(reg1)
            registros.set(reg2, valor)
        }
        else if(inst === 'JMP'){
            //si el registro vale 0 (sino está en el map es 0 por defecto), salta al índice indicado
            if((registros.get(reg1) || 0) === 0) i = Number(reg2) - 1
        }
        else if(inst === 'INC'){
            //incrementa el valor del registro
            registros.set(reg1,(registros.get(reg1) || 0 ) + 1)
        }
        else if(inst === 'DEC'){
            //decrementa el valor del registro
            registros.set(reg1,(registros.get(reg1) || 0 ) - 1)
        }

    }

    //obtiene el registro A, sino existe devuelve undefined
    return registros.get('A')

}
```

Para ver el código al completo :arrow_right:
[Reto 10](https://github.com/Sara-404/adventjs-2024/blob/main/reto10.js)