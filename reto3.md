# Reto 3: Organizando el inventario
## Descripción
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

```js
const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventary)

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

organizeInventory(inventary2)

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
```
## Solución propuesta

```js
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
```
Para ver el código al completo :arrow_right:
[Reto 3](https://github.com/Sara-404/adventjs-2024/blob/main/reto3.js)