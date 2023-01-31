let contador = document.getElementById('contador')
let clic = document.getElementById('clique')

var click = 0
var gols = 0

contador.innerHTML = `<p>Gols: ${gols}</p>`
clic.disabled = true

function contagem() {
    if (gols >= 10) {
        clic.disabled = false
        gols += click
    } else {
        gols += 1
        contador.innerHTML =`<p>Gols: ${gols}</p>`
    }
}

function clique() {
    clic.disabled = true
    click += 3
}

function autoclick() {

}