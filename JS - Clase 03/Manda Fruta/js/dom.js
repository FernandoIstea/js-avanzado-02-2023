const container = document.querySelector(".container")
const imgCarrito = document.querySelector("#imgCarrito")
const inputSearch = document.querySelector("#inputSearch")

//Manejo de Eventos desde JS
//imgCarrito.onclick = saludar //si la función no tiene parámetros, no debe llevar paréntesis
// imgCarrito.onclick = function() { //saludar
//     console.log("Controlando el evento CLICK")
// }
imgCarrito.addEventListener("click", function() {
    console.log("Controlando el evento CLICK")
})
imgCarrito.addEventListener("mousemove", function() {
    imgCarrito.title = "Ir al carrito"
})

inputSearch.addEventListener("search", function() {
    console.log(inputSearch.value)
    //disparar una función que filtre o busque datos
})

//Lógica aplicada al DOM HTML
function cargarProductos() {
    if (productos.length > 0) {
        for (let producto of productos) {
            container.innerHTML += retornoCard(producto)
        }
    } else {
        console.warn('No existen productos para mostrar.')
        container.innerHTML = retornoError()
    }
}
cargarProductos()

function saludar() {
    alert("Hola JS!")
}