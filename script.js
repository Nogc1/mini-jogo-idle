let contador = document.getElementById('contador')
let clic = document.getElementById('clique')
let auto = document.getElementById('autoclick')

var valor_click = 10
var valor_auto = 20

var clique_auto = 0
var click = 0

var gols = 0
var gols_valor = 1

setInterval(aut, 1000 )

contador.innerHTML = `<p>Gols: ${gols.toFixed(0)}</p>`
clic.disabled = true
auto.disabled = true

function contagem() {
    gols += gols_valor
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

function clique() {
    gols -= valor_click
    if (gols < valor_click) {
        clic.disabled = true
    }

    if (gols < valor_auto) {
        auto.disabled = true
    }

    valor_click = valor_click * 1.2
    click += 3
    gols_valor = click

    if (gols < 0) {
        gols = 0
    }

    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

function autoclick() {
    gols -= valor_auto
    if (gols < valor_auto) {
        auto.disabled = true
    }

    if (gols < valor_click) {
        clic.disabled = true
    }

    clique_auto += 1
    valor_auto = valor_auto * 1.1

    if (gols < 0) {
        gols = 0
    }

    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

function aut() {
    if (gols >= valor_click) {
        clic.disabled = false
    }

    if (gols >= valor_auto) {
        auto.disabled = false
    }

    if (gols < valor_click) {
        clic.disabled = true
    }
    
    if (gols < valor_auto) {
        auto.disabled = true
    }

    gols += clique_auto

    clic.value = `Clique ${valor_click.toFixed(0)}`
    auto.value = `Autoclick ${valor_auto.toFixed(0)}`
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}