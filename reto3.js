/*
Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

name: el nombre del juguete (string).
quantity: la cantidad disponible de ese juguete (entero).
category: la categoría a la que pertenece el juguete (string).
Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}.

*/
const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventary))

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventary2))

////Otra solución sin definir el nombre de las propiedades, menos memoria pero más difícil de leer y mantener
// function organizeInventory(inventory) {

//     //si el array está vacío, devuelve un objeto vacío
//     if(inventory.length === 0) return {}
    
//     let inventarioOrganizado = new Object()

//     for(const objeto of inventory){
//         //si el objeto no tiene esa categoría
//         if(!inventarioOrganizado.hasOwnProperty(objeto.category)){
//            inventarioOrganizado[`${objeto.category}`] = {[objeto.name] : objeto.quantity}
//         }
//         //si ya la tiene...
//         else{
//             //si ya tiene el nombre del juguete en la categoría
//             if(inventarioOrganizado[`${objeto.category}`].hasOwnProperty(objeto.name)){
//                 inventarioOrganizado[`${objeto.category}`][objeto.name] += objeto.quantity

//             }
//             //si no tiene el nombre del juguete
//             else{
//                 inventarioOrganizado[`${objeto.category}`][objeto.name] = objeto.quantity
//             }
//         }
//     }
    
//     return inventarioOrganizado
// }

function organizeInventory(inventory) {

    //si el array está vacío, devuelve un objeto vacío
    if(inventory.length === 0) return {}
    
    let inventarioOrganizado = new Object()

    for(const objeto of inventory){

        const objCategory = objeto.category
        const objName = objeto.name
        const objQuantity = objeto.quantity

        //si el objeto no tiene esa categoría
        if(!inventarioOrganizado.hasOwnProperty(objCategory)){
           inventarioOrganizado[objCategory] = {[objName] : objQuantity}
        }
        //si ya la tiene...
        else{
            //si ya tiene el nombre del juguete en la categoría
            if(inventarioOrganizado[objCategory].hasOwnProperty(objName)){
                inventarioOrganizado[objCategory][objName] += objQuantity

            }
            //si no tiene el nombre del juguete
            else{
                inventarioOrganizado[objCategory][objName] = objQuantity
            }
        }
    }
    
    return inventarioOrganizado
}

//código más compacto y según yo optimizado, pero me da menos puntuación (??)
// function organizeInventory(inventory) {

//     //si el array está vacío, devuelve un objeto vacío
//     if(inventory.length === 0) return {}
    
//     let inventarioOrganizado = new Object()

//     for(const {name, quantity, category} of inventory){

//         //si el objeto no tiene esa categoría
//         if(!inventarioOrganizado[category]){
//            inventarioOrganizado[category] = {}
//         }
        
//         //añade el juguete por su nombre y suma o establece su cantidad
//         inventarioOrganizado[category][name] = (inventarioOrganizado[category][name] || 0) + quantity
//     }
    
//     return inventarioOrganizado
// }