/*
¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. Están haciendo Agile Scream.

Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

Esta es la función que espera:
*/
console.log(getCompleted('01:00:00', '03:00:00')) // 33%
console.log(getCompleted('02:00:00', '04:00:00')) // 50%
console.log(getCompleted('01:00:00', '01:00:00')) // 100%
console.log(getCompleted('00:10:00', '01:00:00')) // 17%
console.log(getCompleted('01:10:10', '03:30:30')) // 33%
console.log(getCompleted('03:30:30', '05:50:50')) // 60%


/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    let worked = timeWorked.split(':')
    let total = totalTime.split(':')

    return Math.round(((+worked[0] * 3600 
                            + (+worked[1]) * 60 
                            + (+worked[2])) * 100) 
                            / ((+total[0]) * 3600 
                            + (+total[1]) * 60 
                            + (+total[2]))) + '%'
}


/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
// function getCompleted(timeWorked, totalTime) {
//     //!DOS ESTRELLAS
//     return Math.round(((timeWorked.substring(0,2) * 3600 
//                         + timeWorked.substring(3,5) * 60 
//                         + timeWorked.substring(6)) * 100) 
//                         / (totalTime.substring(0,2) * 3600 
//                         + totalTime.substring(3,5) * 60 
//                         + totalTime.substring(6))) + '%'
// }


/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
// function getCompleted(timeWorked, totalTime) {
//     //!UNA ESTRELLA

//     let porcentaje = ''

//     let numTotal = Number(totalTime.substring(0,2)) * 3600 + Number(totalTime.substring(3,5)) * 60 + Number(totalTime.substring(6))
//     let numWorked = Number(timeWorked.substring(0,2)) * 3600 + Number(timeWorked.substring(3,5)) * 60 + Number(timeWorked.substring(6))

//     porcentaje = Math.round((numWorked * 100) / numTotal)
    
//     return porcentaje + '%'
// }