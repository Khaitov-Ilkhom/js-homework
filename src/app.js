// change currency
const video = document.querySelector("#video")
const playBtn = document.querySelector("#play-btn")
const nextBtn = document.querySelector("#next-btn")
const prevBtn = document.querySelector("#prev-btn")
const  videoTitle= document.querySelector("#video-title")
const videoArtist = document.querySelector("#video-company")

let playingVideo = false

let currentVideoIndex = 0

let videos = [
    {
        src: "./video/1.mp4",
        title: "Drive BMW",
        company: "BMW"
    },
    {
        src: "./video/2.mp4",
        title: "Drive BMW",
        company: "BMW"
    },
    {
        src: "./video/3.mp4",
        title: "Drive BMW",
        company: "BMW"
    },
    {
        src: "./video/4.mp4",
        title: "Drive BMW",
        company: "BMW"
    },
]

const renewIndex = () => {
    video.src = videos[currentVideoIndex].src
    videoTitle.innerText = videos[currentVideoIndex].title
    videoArtist.innerText = videos[currentVideoIndex].company
}
renewIndex()

const playVideo = () => {
    playingVideo = !playingVideo

    if (playingVideo) {
        video.play()
        playBtn.firstElementChild.classList.add("hidden")
        playBtn.lastElementChild.classList.remove("hidden")
    } else {
        video.pause()
        playBtn.firstElementChild.classList.remove("hidden")
        playBtn.lastElementChild.classList.add("hidden")
    }
}

const playNext = () => {
    if (currentVideoIndex + 1 < videos.length) {
        currentVideoIndex++
    } else {
        currentVideoIndex = 0
    }
    renewIndex()
    playingVideo = false
    playVideo()
}
const playPrev = () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--
    } else {
        currentVideoIndex = videos.length - 1
    }    renewIndex()
    playingVideo = false
    playVideo()
}

playBtn.addEventListener("click", playVideo)
prevBtn.addEventListener("click", playPrev)
nextBtn.addEventListener("click", playNext)