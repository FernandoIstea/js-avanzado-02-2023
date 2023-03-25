const titulo = document.querySelector("h1")

function mostrarSaludo() {
    const inputNombre = document.querySelector("input[type='text']")
    let nombre = inputNombre.value.trim()
    //let mensaje = "Bienvenid@ '" + nombre + "' al manejo de DOM."
    let mensaje = `Bienvenid@ '${nombre}' al manejo de "DOM HTML".`
    if (nombre !== '') {
        alert(mensaje)
    } else {
        console.warn("El campo no tiene valor para mostrar.")
    }
}
let nombreCompleto = `Fer Moon`

//`<li class="fondo-gris">JS Avanzado '@' Educación IT</li>`

const contenedor = document.querySelector("div.container")

const productos = [{id: 1, imagen: '💾', nombre: 'Diskete', importe: 500},
                   {id: 2, imagen: '🖨️', nombre: 'Impresora ', importe: 900},
                   {id: 3, imagen: '💻', nombre: 'Notebook', importe: 1300},]

const carrito = []

function armarTarjeta(prod) {
    return `<div class="card">
                <div><h1>${prod.imagen}</h1></div>
                <div class="card-title"><p>${prod.nombre}</p></div>
                <button id="${prod.id}" class="button button-outline">${prod.importe}</button>
            </div>`
}

function mostrarProductos() { //debugger
    let productosHTML = ''
    if (productos.length > 0) {
        for (let producto of productos) {
            productosHTML += armarTarjeta(producto)
        }
        contenedor.innerHTML = productosHTML
    }
}
mostrarProductos()

const botonesCard = document.querySelectorAll("button.button.button-outline")

function escucharClick() {
    for (boton of botonesCard) {
        boton.onclick = function(evt) { 
            console.log(evt)
            alert(`El importe del producto es ${evt.target.id}`) 
        }
    }
}
escucharClick()