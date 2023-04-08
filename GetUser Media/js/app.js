const videoElement = document.querySelector('video');
const recordButton = document.querySelector('#record');
const stopButton = document.querySelector('#stop');
const downloadLink = document.querySelector('#download');

// Pedir permiso para acceder a la cámara
// navigator.mediaDevices.getUserMedia({ video: true })
//   .then(stream => {// Asignar el stream a la fuente del elemento de vídeo
//     videoElement.srcObject = stream;
//   })
//   .catch(error => {
//     console.error('Ocurrió un error al intentar acceder a la cámara', error);
//   });

let mediaRecorder;
let chunks = [];
let videoBlob;
let videoUrl;

// Pedir permiso para acceder a la cámara
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {// Asignar el stream al elemento vídeo
    videoElement.srcObject = stream; // Crear el objeto MediaRecorder para grabar
    mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    // El evento dataavailable agrega los fragmentos de video al búfer de memoria
    mediaRecorder.addEventListener('dataavailable', event => {
      chunks.push(event.data);
      console.log(chunks)
    });
    // Escuchar el evento stop para detener el objeto MediaRecorder y concatenar los fragmentos de video
    mediaRecorder.addEventListener('stop', () => {
      videoBlob = new Blob(chunks, { type: 'video/webm' });
      videoUrl = URL.createObjectURL(videoBlob);
      downloadLink.download = `video-${new Date().getTime()}.webm`;
      downloadLink.href = videoUrl;
      downloadLink.style.display = 'inline';
    });
  })
  .catch(error => {
    console.error('Ocurrió un error al intentar acceder a la cámara', error);
  });

// Escuchar el evento click del botón "Grabar"
recordButton.addEventListener('click', () => {
  chunks = [];
  mediaRecorder.start();
});

// Escuchar el evento click del botón "Detener"
stopButton.addEventListener('click', () => {
  mediaRecorder.stop();
});

downloadLink.addEventListener("downloadend", ()=> {
    videoUrl.revokeObjectURL();
})

// Ocultar el enlace de descarga al principio
downloadLink.style.display = 'none';


function recuperarClientesDeStorage() {
    return JSON.parse(localStorage.getItem("dbClientes")) || []
}



const dbClientes = recuperarClientesDeStorage()
