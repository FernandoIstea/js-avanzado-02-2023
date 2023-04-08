class Cotizador {
    constructor(metrosCuadrados, factorPropiedad, factorUbicacion, costoFijo) {
        this.metrosCuadrados = metrosCuadrados
        this.factorPropiedad = factorPropiedad
        this.factorUbicacion = factorUbicacion
        this.costoFijo = costoFijo
    }
    cotizar() {
        let resultado = this.metrosCuadrados * this.factorPropiedad * this.factorUbicacion * this.costoFijo
            if (typeof resultado == 'number') {
                return resultado
            }
            return 0
            console.error("Se ha producido un error interno al generar la cotización.")
    }
}