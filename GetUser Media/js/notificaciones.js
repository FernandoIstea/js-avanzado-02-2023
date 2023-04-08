const button = document.querySelector("button")

function emitirNotificacion() {
    let mensaje = "Hola Mundo. Hola notificaciones!"
    let notification = new Notification(mensaje)
}

function notificar() {
    if (Notification.permission !== "denied") {
        // emitirNotificacion()
        emitirNotificacionCompleta(title, body)
        return
    }
    Notification.requestPermission((permission)=> {
        if (permission === "granted") {
            notificar() //recursividad porque se habilitaron las notificaciones
        }
    })
}

let title = "Título de la notificación"
let body = {
    body: 'Este es el cuerpo de la notificación, donde podemos volcar un mensaje más amplio.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827370.png'
}

function emitirNotificacionCompleta(title, body) {
    let notification = new Notification(title, body)
        notification.onclick = ()=> {
            console.log("💬 Hiciste clic en la notificación.")
            notification.close()
        }
}

button.addEventListener("click", notificar)