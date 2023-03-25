const blankCover = "cover/blank.png"

const audio = document.createElement('audio')
      audio.controls = false
      audio.src="./Sources/Tones_and_I_Dance_Monkey.mp3"
      audio.volume = "0.2"

//Controlar los elementos HTML
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const cover = document.getElementById("cover")
const label = document.getElementById("label")
const progress = document.getElementById("progress")

const music = {
    pista: "Sources/Tones_and_I_Dance_Monkey.mp3",
    song: "Tones and I - Dance Monkey",
    cover: "cover/tones_and_I.jpg"
}

//eventos de audio
play.addEventListener("click", ()=> {
    audio.play()
    progress.max = audio.duration
    cover.src = music.cover || blankCover
    label.textContent = `Reproduciendo ${music.song}`
 })

volume.addEventListener("change", ()=> {
    console.log(volume.value)
    audio.volume = volume.value
 })
 
 pause.addEventListener("click", ()=> {
    audio.pause()
 })
 
 audio.addEventListener("playing", ()=> {
    cover.classList.remove("grayScale")
    label.textContent = `Reproduciendo: ${music.song}`
 })
 
 audio.addEventListener("pause", ()=> {
    // cover.src = blankCover
    cover.classList.add("grayScale")
    label.textContent = "Reproducción pausada..."
 })
 
 audio.addEventListener("timeupdate", ()=> {
    progress.value = audio.currentTime
    console.clear()
    console.log(`${audio.currentTime}`)
 })