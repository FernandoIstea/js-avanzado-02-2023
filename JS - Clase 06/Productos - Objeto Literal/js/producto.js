function Producto() {
    
}

// const Producto = {
//     precio: 0,
//     stock: 0,
//     precioConIVA: function() {
//         return (precio * 1.21).toLocaleString()
//     },
//     puntoDePedido: function() {
//         if (this.stock > 0) {
//             return parseInt(this.stock * 0.2) //Calculamos el 20% del Stock como punto de pedido
//         } else {
//             return 0
//         }
//     },
//     descontarDeStock: function(unidades) {
//         if (isNaN(unidades)) {
//             console.error("Debe especificar un valor numérico.")
//             return 
//         }
//         if (this.stock - parseInt(unidades) >= 0) {
//             return this.stock -= parseInt(unidades)
//         } else {
//             console.error("No se pueden descontar las unidades indicadas.")
//         }
//     }
// }