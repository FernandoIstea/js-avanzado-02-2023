//TEMPLATES PARA ARMAR ESTRUCTURAS HTML CON JAVASCRIPT

function retornoCard(producto) {
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">$ ${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

function retornoError() {
    return `<div class="card-error">
                <h2>Houston, tenemos un problema 🔌</h2>
                <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
                <h3>Intenta nuevamente en unos instantes...</h3>
            </div>`
}