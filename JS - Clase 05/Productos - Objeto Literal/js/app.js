const btnAgregar = document.querySelector(".button")
const btnCalcular = document.querySelector(".button-outline")
const btnLimpiarCampos = document.querySelector(".button-slategrey")
const inputID = document.querySelector("#inputID")
const inputNombre = document.querySelector("#inputNombre")
const inputPrecio = document.querySelector("#inputPrecio")
const inputStock = document.querySelector("#inputStock")
const spanPrecioIva = document.querySelector("span#precioIva")
const spanPuntoPedido = document.querySelector("span#puntoPedido")
const selectCategoria = document.querySelector("#selectCategoria")
const arrayProductos = []

function crearID() {
    return parseInt(Math.random() * 100000)
}

function generarProductos() {
    arrayProductos.push({id: 1234, nombre: 'MACBOOK AIR M2 512GB', precio: 655000, stock: 34})
    arrayProductos.push({id: 2345, nombre: 'LENOVO 14 PULGADAS', precio: 189000, stock: 60})
    arrayProductos.push({id: 3456, nombre: 'TABLET APPLE 9.8', precio: 275000, stock: 41})
    arrayProductos.push({id: 1234, nombre: 'TABLET DROID 10.1', precio: 145000, stock: 70})
    arrayProductos.push({id: 1234, nombre: 'LENOVO GAMER 17 PULGADAS', precio: 597000, stock: 48})
}

function limpiarCampos() {
    inputID.value = ""
    inputNombre.value = ""
    inputPrecio.value = ""
    inputStock.value = ""
    selectCategoria.value = "..."
    spanPrecioIva.textContent = "0"
    spanPuntoPedido.textContent = "0"
}