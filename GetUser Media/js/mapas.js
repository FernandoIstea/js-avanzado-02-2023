const mapa = document.querySelector("div#mapa")

function retornoIframeMapa(coords) {
    return `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1169.0326503498359!2d${coords.longitude}!3d${coords.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1680902866877!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}

function geolocalizar() {
    const options = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
          navigator.geolocation.getCurrentPosition(success, error, options)
}
geolocalizar()

function success(pos) {
    const coords = pos.coords
          console.log(coords)
          mapa.innerHTML = retornoIframeMapa(coords)
          const iframe = document.querySelector("iframe")
          window.addEventListener("resize", ()=> {
            iframe.width = (window.innerWidth * 0.95) //mantenemos el ancho al +-90% del ancho de la página
          })
}

function error(err) {
    console.warn(`Error: ${err.code} - ${err.message}`)
    //alert(`Error: ${err.code} - ${err.message}`)
}