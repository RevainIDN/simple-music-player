import './style.scss'

const audio = document.querySelector('.audio');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const progressBar = document.querySelector('.progress-bar');
durationDisplay.textContent = formatTime(audio.duration);

audio.volume = 0.2;
let currentMusic = 0;

const musicArr = [
	{ title: 'Lost in the City Lights', subtitle: 'Cosmo Sheldrake', audio: `${import.meta.env.BASE_URL}/audio/lost-in-city-lights-145038.mp3`, img: `${import.meta.env.BASE_URL}/cover-1.png` },
	{ title: 'Forest Lullaby', subtitle: 'Lesfm', audio: `${import.meta.env.BASE_URL}/audio/forest-lullaby-110624.mp3`, img: `${import.meta.env.BASE_URL}/cover-2.png` }
]

function play() {
	if (audio.paused) {
		audio.play()
		document.querySelector('.pause-img').src = `${import.meta.env.BASE_URL}Pause.svg`
	} else {
		audio.pause()
		document.querySelector('.pause-img').src = `${import.meta.env.BASE_URL}Play.svg`
	}
}

function scrollingMusic() {
	audio.src = musicArr[currentMusic].audio;
	audio.load();
	progressBar.style.width = '0%';
	document.querySelector('.pause-img').src = `${import.meta.env.BASE_URL}Play.svg`
	document.querySelector('.cover-img').src = musicArr[currentMusic].img;
	document.querySelector('.title').textContent = musicArr[currentMusic].title;
	document.querySelector('.subtitle').textContent = musicArr[currentMusic].subtitle;
}

function prevMusic() {
	currentMusic--;

	if (currentMusic < 0) {
		currentMusic = musicArr.length - 1;
	}
	scrollingMusic();
}

function nextMusic() {
	currentMusic++;

	if (currentMusic > musicArr.length - 1) {
		currentMusic = 0;
	}
	scrollingMusic();
}

function formatTime(seconds) {
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateProgress() {
	const progress = (audio.currentTime / audio.duration) * 100;
	progressBar.style.width = `${progress}%`;
}

pauseBtn.addEventListener('click', play);
prevBtn.addEventListener('click', prevMusic);
nextBtn.addEventListener('click', nextMusic);

audio.addEventListener('timeupdate', () => {
	currentTimeDisplay.textContent = formatTime(audio.currentTime);
	durationDisplay.textContent = formatTime(audio.duration || 0);
	updateProgress();
})

progressBar.parentElement.addEventListener('click', (e) => {
	const clickPosition = e.offsetX;
	const newTime = (clickPosition / progressBar.parentElement.offsetWidth) * audio.duration;
	audio.currentTime = newTime;
});

audio.addEventListener('loadedmetadata', () => {
	durationDisplay.textContent = formatTime(audio.duration);
});