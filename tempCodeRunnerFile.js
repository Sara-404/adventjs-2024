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