# Reto 6: ¿Regalo dentro de la caja?
## Descripción
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:
* Está rodeada por # en los bordes de la caja.
* El * no está en los bordes de la caja.

Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

```js
inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
```

## Solución propuesta

```js
/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    
    //no comprobamos los bordes de arriba ni de abajo
    for(let i = 1; i<box.length - 1; i++){
        
        //si la línea incluye el regalo
        if(box[i].includes('*') 
            && box[i].indexOf('*') > box[i].indexOf('#') 
            && box[i].indexOf('*') < box[i].lastIndexOf('#')){
            //condición para que esté dentro -> # * #
            return true
        }
    }

    return false
}
```
Para ver el código al completo :arrow_right:
[Reto 6](https://github.com/Sara-404/adventjs-2024/blob/main/reto6.js)