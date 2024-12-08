/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:
*/
console.log(inBox([
    "###",
    "#*#",
    "###"
  ])) // ➞ true
  
  console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ])) // ➞ true
  
  console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ])) // ➞ false
  
  console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])) // ➞ false


/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    
    //no comprobamos los bordes de arriba ni de abajo
    for(let i = 1; i<box.length - 1; i++){
        
        //si la línea incluye el regalo
        if(box[i].includes('*')){

            //condición para que esté dentro -> # * #
            if(box[i].indexOf('*') > box[i].indexOf('#') && box[i].indexOf('*') < box[i].lastIndexOf('#')) return true
            
            else return false
        }
    }

    return false
}

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
// function inBox(box) {
//     //FUNCIONA PERO UNA ESTRELLA DE PUNTUACIÓN, será por bucle dentro de bucle
//     let dentro = false

//     //no comprobamos los bordes de arriba ni de abajo
//     for(let i = 1; i<box.length - 1; i++){

        
//         if(box[i].includes('*')){
            
//             for(const caracter of box[i]){
//                 if(caracter === '#' && dentro === false) dentro = true
//                 else if(caracter === '#' && dentro === true) dentro = false
//                 else if(caracter === '*' && dentro === true) return true
//             }
            
//         }
        
//     }

//     return false
// }