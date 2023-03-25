const titulo = document.querySelector("#titulo")
const parrafo = document.querySelector("p")
const logo = document.querySelector("img#logo")

parrafo.textContent = "Estamos probando el funcionamiento de querySelector y querySelectorAll, ambos métodos implementados en ES6 - 2015."

const parrafos = document.querySelectorAll("p.text-blue.fondo-gris")

//actualizar los elementos de manera masiva desde JS
function aplicarBordeNegro() {
    //debugger
    for (let elemento of parrafos) {
        elemento.classList.add("borde-negro")
        //elemento.textContent = ""
    }
}
aplicarBordeNegro()

//quitar una clase CSS
function quitarClaseCSS() {
    debugger
    for (let elemento of parrafos) {
        elemento.classList.remove("fondo-gris")
    }
}

// logo.style.width = '140px'
// logo.style.height = '220px'
logo.style.padding = '8px'
logo.style.margin = '30px'
logo.style.borderColor = 'lightgreen'
logo.style.borderWidth = '8px'
logo.style.borderStyle = 'dotted'

