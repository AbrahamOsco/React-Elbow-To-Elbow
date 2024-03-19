let linternaEncendida = false
let audioBatman = document.querySelector('#bati_encendido')
let audioClick = document.querySelector("#bati_click")
audioClick.loop = false
let divBatman = document.querySelector(".batman")
let botonBatman = document.querySelector(".bati_boton")

botonBatman.addEventListener("click", () => {
    if (!linternaEncendida){
        linternaEncendida = true
        divBatman.classList.add("batman_activo")
    } else if (linternaEncendida) { 
        linternaEncendida = false
        divBatman.classList.remove("batman_activo")
    }
    sonido()
})

function sonido() {
    audioBatman.paused? audioBatman.play() : audioBatman.pause() 
    audioClick.play()
}
