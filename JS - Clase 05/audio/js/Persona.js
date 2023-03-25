function Persona(nombreCompleto, edad, ocupacion) {
    this.nombreCompleto = nombreCompleto
    this.edad = edad
    this.ocupacion = ocupacion
    this.presentarme = function() {
        console.log(`Hola, mi nombre es ${this.nombreCompleto}`)
    }
}

const Profe = new Persona('Fer Moon', 48, 'Profe')
const Mecanico = new Persona('Nico Moon', 26, 'Técnico mecánico automotor')
const Auditora = new Persona('Laura Grisel', 51, 'Auditora de regulaciones')

