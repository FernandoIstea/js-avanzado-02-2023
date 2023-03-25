const inputs = document.querySelectorAll("input")
const nombre = document.querySelector("#nombre")
const telefono = document.querySelector("#telefono")
const email = document.querySelector("#email")
const btnEnviar = document.querySelector("#btnEnviar")
const form = document.querySelector("form")

function aplicarEventos() { // recibir foco = focus / perder el foco = blur
    for (const input of inputs) {
        input.addEventListener("focus", function() {
            input.classList.add("background-yellow")
        })
        input.addEventListener("blur", function() {
            input.classList.remove("background-yellow")
        })
    }
}
aplicarEventos()

// nombre.addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {
//         telefono.focus()
//     }
// })

form.addEventListener("submit", function(e) {
    e.preventDefault()
    //agregamos nuestro código JS asociado
})

window.addEventListener("online", function() {
    btnEnviar.disabled = false
    console.log("Estamos online!")
})

window.addEventListener("offline", function() {
    btnEnviar.disabled = true
    //guardo la info del Form, en WebStorage
    console.warn("Te has quedado sin Internet :(")
})
