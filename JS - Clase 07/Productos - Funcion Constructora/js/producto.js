class Producto {
    static acercaDe() {
        alert("Copyright 2023 - Team JS Avanzado by Educación IT")
    }
    #categorias = ['Portátil', 'Tablet', 'Desktop', 'Smartwatch']

    constructor(precio, stock) {
        this.precio = parseFloat(precio)
        this.stock = parseInt(stock)
        this.categoria = 'N/A'
    }
    precioConIVA() {
        return (this.precio * 1.21).toLocaleString()
    }

    puntoDePedido() {
        if (this.stock > 0)
            return parseInt(this.stock * 0.2) //Calculamos el 20% del Stock como punto de pedido
        return 0
    }

    descontarDeStock(unidades) {
        if (isNaN(unidades)) {
            console.error("Debe especificar un valor numérico.")
            return
        }
        if (this.stock - parseInt(unidades) >= 0) {
            return this.stock -= parseInt(unidades)
        } else {
            console.error("No se pueden descontar las unidades indicadas.")
        }
    }

    getCategorias() {
        return this.#categorias
    }

    setCategoria(index) {
        if (index <= this.#categorias.length)
            return this.categoria = this.#categorias[index]
        console.error("Se ha producido un error al asignar la categoría:", index)
    }
}