//document.GetElementById()
const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")
const logo = document.getElementById("logo")
const buttonCart = document.getElementById("buttonCart")
const ol = document.getElementById("listaFrutas")
const frutas = ['Manzana', 'Banana', 'Pera', 'Kiwi', 'Limón', 'Durazno', 'Melón', 'Sandía', 'Naranja', 'Mandarina']

titulo.textContent = 'Título cambiado por JS'
parrafo.innerText = 'Esto es un párrafo, modificado también por el lenguaje JS.'

const imagenCoding = 'images/coding-notebook.png'
logo.src = imagenCoding


//INNER HTML
const imagenCart = 'images/cart.png'
buttonCart.innerHTML = "<img src='" + imagenCart +  "'>"
//buttonCart.innerHTML = "comprar"

function listarFrutasEnPantalla() {
    // for (let fruta of frutas) {
    //     ol.innerHTML += '<li>' + fruta + '</li>'
    // }
    frutas.forEach(fruta => {
        ol.innerHTML += '<li>' + fruta + '</li>'
    })
}
listarFrutasEnPantalla()

function agregarImagenesEnPantalla() {
    const imagenes = ['images/coding-notebook.png', 'images/logo-edit.png', 'images/logo-js.png']
    const divImagenes = document.getElementById("divImagenes")
    
        imagenes.forEach(imagen => {
            let tagImg = '<img src="' + imagen + '" class="imagen otra-clase">'
                divImagenes.innerHTML += tagImg
        })
}
agregarImagenesEnPantalla()

logo.classList.add("blur")
//logo.classList.toggle("imagen-con-borde")

function capturarTagsParagraph() {
    const parrafos = document.getElementsByTagName("p")
    for (parr of parrafos) {
        parr.textContent = ''
    }
}

function capturarTagsClaseBlueText() {
    const tagsTB = document.getElementsByClassName('text-blue')
    if (tagsTB.length > 0) {
        for (tag of tagsTB) {
            tag.classList.add('fondo-gris')
        }
    }
}

const imgLogo = document.querySelector("img")
const cardTitle = document.querySelector(".card-title")
const elemento = document.querySelector("#listaFrutas")

const otroElemento = document.querySelectorAll("h1.imagen.otra-clase")

//fernando.luna@istea.com.ar