const imgCover = document.querySelector("img.cover")
const progressBar = document.querySelector("progress")
const volumeBar = document.querySelector("input#volume")
const songList = document.querySelector("div.song-list")
const buttonPlay = document.querySelector("div.button-play")
const buttonPause = document.querySelector("div.button-pause")
const songSelected = document.querySelectorAll("p")

const mediaSessionInfo = {title: '', artist: '', album: '', artwork: ''}

imgCover.addEventListener("error", ()=> imgCover.src = "covers/blank.jpg")

const cargarCanciones = ()=> {
    if (arrayPlaylist.length > 0) {
        for (cancion of arrayPlaylist) {
            const p = document.createElement("p")
                  p.className = "song-list-normal"
                  p.textContent = cancion.title
                  songList.append(p)
        }
    }
}
cargarCanciones()

const paragraphCanciones = document.querySelectorAll("p.song-list-normal")

for (paragraph of paragraphCanciones) {
    paragraph.addEventListener("click", (e)=> { //obj global Event
        let cancionElegida = e.target
            cargarCancion(cancionElegida.textContent)
            cargarCover(cancionElegida.textContent)
            for (p of paragraphCanciones) {
                if (p === cancionElegida) {
                    p.className = "song-list-selected"
                    mediaSessionInfo.album = cancionElegida.textContent
                    mediaSessionInfo.artist = cancionElegida.textContent
                    mediaSessionInfo.title = cancionElegida.textContent
                    mediaSessionInfo.artwork = cargarCover(cancionElegida.textContent)
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
    return cover
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
        navigator.mediaSession.metadata = new MediaMetadata({
            title: mediaSessionInfo.title,
            artist: mediaSessionInfo.artist,
            album: mediaSessionInfo.album,
            artwork: [
              {
                src: mediaSessionInfo.artwork,
                sizes: "640x640",
                type: "image/jpg",
              }
            ],
          })
})
buttonPause.addEventListener("click", ()=> audio.pause())