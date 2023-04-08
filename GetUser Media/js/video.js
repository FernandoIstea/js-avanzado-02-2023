const video = document.querySelector("video")
let videoUrl = ''

function cargarVideoSegunRed() {
    const network = navigator.connection
        //   console.log(network)
        const networkType = `${network.effectiveType} - ${network.type}`
        console.log('Network Type:', networkType)
        switch(networkType) {
            case '4g - wifi':
                videoUrl = 'assets/sample-video-4k-25fps.mp4'
                break
            case '3g - cellular':
                videoUrl = 'assets/sample-video-FHD-25fps.mp4'
                break
            case '2g - cellular':
                videoUrl = 'assets/sample-video-HD-25fps.mp4'
                break
            default:
                videoUrl = 'assets/sample-video-HD-25fps.mp4'
                break
        }
        video.src = videoUrl
        console.log(videoUrl)
}
cargarVideoSegunRed()

