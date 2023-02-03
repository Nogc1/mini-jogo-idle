// Botões de farm
let contador = document.getElementById('contador')
let chute_html = document.getElementById('chute')
let passe_html = document.getElementById('passe')
let chuteira_html = document.getElementById('chuteira')

var valor_chute = 10
var valor_passe = 20
var valor_chuteira = 50

var passe = 0
var chutes = 0
var chuteira = 0

var gols = 0
var gols_valor = 1

// Atualiza o contador e as variaveis para o novo valor através da função aut
setInterval(aut, 1000)

contador.innerHTML = `<p>Gols: ${gols.toFixed(0)}</p>`
chute_html.disabled = true
passe_html.disabled = true
chuteira_html.disabled = true

// Inicia o contador
function contagem() {
    gols += gols_valor
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

// Verifica se o botão foi apertado e qual que foi apertado
function clique(clicked) {
    if (clicked == 'chute') {
        gols -= valor_chute
        if (gols < valor_chute) {
            chute_html.disabled = true
        }
    
        if (gols < valor_passe) {
            passe_html.disabled = true
        }
    
        valor_chute *= 1.2
        chutes += 3
        gols_valor = chutes
    
        if (gols < 0) {
            gols = 0
        }
    }
    else if (clicked == 'chuteira') {
        gols -= valor_chuteira
        if (gols < valor_chute) {
            chute_html.disabled = true
        }
        if (gols < valor_passe) {
            passe_html.disabled = true
        }
        if (gols < valor_chuteira) {
            chuteira_html.disabled = true
        }

        valor_chuteira *= 1.2
        chuteira += 2

        if (gols < 0) {
            gols = 0
        }
    }
    else if (clicked == 'passe') {
        gols -= valor_passe
        if (gols < valor_passe) {
            passe_html.disabled = true
        }

        if (gols < valor_chute) {
            chute_html.disabled = true
        }

        passe += 1
        valor_passe *= 1.1

        if (gols < 0) {
            gols = 0
        }
    }

    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

function aut() {
    if (gols >= valor_chute) {
        chute_html.disabled = false
    }

    if (gols >= valor_passe) {
        passe_html.disabled = false
    }

    if (gols >= valor_chuteira) {
        chuteira_html.disabled = false
    }

    if (gols < valor_chute) {
        chute_html.disabled = true
    }
    
    if (gols < valor_passe) {
        passe_html.disabled = true
    }

    if (gols < valor_chuteira) {
        chuteira_html.disabled = true
    }

    gols += passe
    gols += chuteira

    chute_html.value = `Chute ${valor_chute.toFixed(0)}`
    passe_html.value = `Passe ${valor_passe.toFixed(0)}`
    chuteira_html.value = `Chuteira ${valor_chuteira.toFixed(0)}`
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}