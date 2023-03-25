const imgCover = document.querySelector("img.cover")
const progressBar = document.querySelector("progress")
const volumeBar = document.querySelector("input#volume")
const songList = document.querySelector("div.song-list")
const buttonPlay = document.querySelector("div.button-play")
const buttonPause = document.querySelector("div.button-pause")
const songSelected = document.querySelectorAll("p")

imgCover.addEventListener("error", ()=> imgCover.src = "covers/blank.jpg")

const paragraphCanciones = document.querySelectorAll("p.song-list-normal")

for (paragraph of paragraphCanciones) {
    paragraph.addEventListener("click", (e)=> { //obj global Event
        let cancionElegida = e.target
            cargarCancion(cancionElegida.textContent)
            cargarCover(cancionElegida.textContent)
            for (p of paragraphCanciones) {
                if (p === cancionElegida) {
                    p.className = "song-list-selected"
                } else {
                    p.className = "song-list-normal"
                }
            }
    })
}

const cargarCancion = (source)=> {
    const cancion = "sources/" + source.replaceAll(" ", "_") + ".mp3"
    audio.src = cancion
    volumeBar.value = (audio.volume * 100).toString()
    audio.addEventListener("loadeddata", ()=> {
            progressBar.max = audio.duration.toString()
    })   
}

const cargarCover = (source)=> {
    const cover = "covers/" + source.replaceAll(" ", "_") + ".jpg"
    imgCover.src = cover
}

const audio = document.createElement('audio')
      audio.id = "audioPlayer"
      audio.src = ""
      audio.volume = 0.1 //10 % del volumen
      audio.addEventListener('timeupdate', ()=> {
        progressBar.value = audio.currentTime
      })
      audio.addEventListener("ended", ()=> {
        console.warn("El audio ha finalizado.")
      })

volumeBar.addEventListener("change", ()=> {
        audio.volume = (volumeBar.value / 100)
        console.log(volumeBar.value)
})

buttonPlay.addEventListener("click", ()=> {
        if (audio.src !== "") {
            audio.play()
        }
})
buttonPause.addEventListener("click", ()=> audio.pause())