const selectPropiedad = document.querySelector("select#propiedad")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")
const spanValorPoliza = document.querySelector("span#valorPoliza")

function cargarArrays(select, array) {
    if (array.length > 0) {
        for (elemento of array) {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        }
    }
} 
cargarArrays(selectPropiedad, datosPropiedad)
cargarArrays(selectUbicacion, datosUbicacion)

btnCotizar.addEventListener("click", ()=> {
    const cotizadorHogar = new Cotizador(inputMetros2.value, selectPropiedad.value, selectUbicacion.value, costoM2)
          spanValorPoliza.textContent = cotizadorHogar.cotizar().toFixed(2)
              //spanValorPoliza.textContent = resultado.toFixed(2)
})