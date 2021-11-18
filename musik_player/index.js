const music_container = document.getElementById('musiccontainer');
const progress = document.querySelector('.progress');
const progress_container = document.querySelector('.progress-container');
const title = document.getElementById('music-title');
const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const audio = document.getElementById('audio');
const music_cover = document.getElementById('music-cover');

// song selection
const songslist = ['Hey', 'Summer', 'Ukulele'];
let songindex = 2;

loadsong(songslist[songindex]);

// functions
function loadsong(song) {
    title.innerText = song;
    music_cover.src = `images/${song}.jpg`;
    audio.src = `music_mp3/${song}.mp3`;
}
function playsong() {
    music_container.classList.remove('pause');
    music_container.classList.add('play');
    playbtn.innerHTML = '<i class="fas fa-pause"></i>';
    audio.play();
}
function pausesong() {
    music_container.classList.remove('play');
    music_container.classList.add('pause');
    playbtn.innerHTML = '<i class="fas fa-play"></i>';
    audio.pause();
}
function prevsong() {
    songindex--;
    if (songindex < 0) {
        songindex = songslist.length - 1;
    }
    loadsong(songslist[songindex]);
    playsong();
}
function nextsong() {
    songindex++;
    if (songindex > 2) {
        songindex = 0;
    }
    loadsong(songslist[songindex]);
}
function updateprogress() {
    const { duration, currentTime } = e.srcElement;
    const progress_width = (currentTime / duration) * 100;
    progress.style.width = `${progress_width}%`;
    console.log(progress_width);
}
function setprogress(e) {
    const { duration } = audio;
    const clickX = e.offsetX;
    const progress_width = (clickX / progress_container.clientWidth) * 100;
    audio.currentTime = (duration * progress_width) / 100;
    progress.style.width = `${progress_width}%`;
}

// event listeners
playbtn.addEventListener('click', () => {
    const isplaying = music_container.classList.contains('play');
    if (isplaying) {
        pausesong();
    } else {
        playsong();
    }
})
prevbtn.addEventListener('click', prevsong);
nextbtn.addEventListener('click', nextsong);
progress.addEventListener('timeupdate', updateprogress);
progress_container.addEventListener('click', setprogress);
audio.addEventListener('ended', nextsong);