// console.log("Hola mundo, hola JS Avanzado.")
// console.warn("Esto es un mensaje de advertencia.")
// console.error("Houston, tenemos un problema.")

// let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
// debugger
// vegetales.push('Palta')
// console.table(vegetales)

let nombre = "   Educación IT 2023      "
let numero = 2103.1975
let usuarioLogueado = true
let esAdmin = false 
const cursos = ['JS Avanzado', 'VueJS', 'React', 'PWA']
const persona = {nombre: 'Fer', ocupacion: 'Profesor'}




function mostrarNombre() {
    let nombre = 'Fer'
        console.log(nombre)
}
mostrarNombre()

function muestroNombre(nombre = '🔺 Debes pasarle un parámetro Boolean.') {
    console.log(nombre)
}

//PROPIEDADES Y MÉTODOS EN VARIABLES

function ingresarNombre(nom) {
    return nom
}