const panels = document.querySelectorAll('.panel')

panels.forEach((panels) => {
    panels.addEventListener('click', () => {
        removeActiveClasses()

        panels.classList.add('active')

    })


})
function removeActiveClasses() {
    panels.forEach((panels) => {
        panels.classList.remove('active')

    })
};

var a = document.getElementById("idAudio");
function playaudio() {
    a.play();
}
function pauseaudio() {
    a.pause();
}
function stopaudio() {
    a.pause();
    a.currentTime = 0;
}

// const audio = document.querySelector('.myAudio')
// function playAudio() {
//   audio.f
//     audio.loop = false;
//     audio.play();
// }