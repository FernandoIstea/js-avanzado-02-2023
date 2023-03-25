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
    return parseInt(Math.random() * 1000000)
}

function generarProductos() {
    arrayProductos.push({id: 1234, nombre: 'MACBOOK AIR M2 512GB', precio: 655000, stock: 34})
    arrayProductos.push({id: 2345, nombre: 'LENOVO 14 PULGADAS', precio: 189000, stock: 60})
    arrayProductos.push({id: 3456, nombre: 'TABLET APPLE 9.8', precio: 275000, stock: 41})
    arrayProductos.push({id: 4567, nombre: 'TABLET DROID 10.1', precio: 145000, stock: 70})
    arrayProductos.push({id: 5678, nombre: 'LENOVO GAMER 17 PULGADAS', precio: 597000, stock: 48})
}
generarProductos()

function limpiarCampos() {
    inputID.value = ""
    inputNombre.value = ""
    inputPrecio.value = ""
    inputStock.value = ""
    selectCategoria.value = "..."
    spanPrecioIva.textContent = "0"
    spanPuntoPedido.textContent = "0"
}

btnAgregar.addEventListener("click", ()=> {
    let nuevoProd = {id: 0, nombre: '', precio: 0, categoria: '', stock: 0}
        nuevoProd.id = crearID()
        nuevoProd.nombre = inputNombre.value.toUpperCase()
        nuevoProd.precio = parseInt(inputPrecio.value)
        nuevoProd.stock = parseInt(inputStock.value)
        nuevoProd.categoria = selectCategoria.value //validar el dato seleccionado que sea !== de ...
        inputID.value = nuevoProd.id
        arrayProductos.push(nuevoProd)
        alert("✅ Producto agregado al listado.")
        console.clear()
        console.table(arrayProductos) //solo para ver la info del array
})

btnLimpiarCampos.addEventListener("click", limpiarCampos)

btnCalcular.addEventListener("click", ()=> {
    
    Producto.precio = inputPrecio.value
    Producto.stock = inputStock.value
    spanPrecioIva.textContent = `AR$ ${Producto.precioConIVA()}`
    spanPuntoPedido.textContent = Producto.puntoDePedido()
})