const pianoKeys = document.querySelectorAll(".piano-keys .key");
const shortKeys = document.querySelectorAll(".short-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysChecked = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("./audio/a.wav");
audio.volume *= 0.5;

const playTunne = (key) => {
    console.log(key);
    audio.src = `./audio/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTunne(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

shortKeys.forEach((key) => {
    key.addEventListener("click", () => playTunne(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTunne(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysChecked.addEventListener("click", showHideKeys);

