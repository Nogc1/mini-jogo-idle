// Botão de gols
let contador = document.getElementById('contador')
// Botões de upgrades
let chute_html = document.getElementById('chute')
let passe_html = document.getElementById('passe')
let escanteio_html = document.getElementById('escanteio')


// Botões de buffs
let section_html = document.getElementById('buff')
let chuteira_html = document.getElementById('chuteira')


// Preço dos upgrades
var valor_chute = 10
var valor_passe = 20
var valor_escanteio = 50


// Preço dos buffs
var valor_chuteira = 1000

// Quanto cada um gera  obs. Valor inicial
var passe = 0
var chutes = 0
var escanteio = 0

// Contador
var gols = 0
var gols_valor = 1

// Atualiza o contador e as variaveis para o novo valor através da função aut
setInterval(aut, 1000)

contador.innerHTML = `<p>Gols: ${gols.toFixed(0)}</p>`
chute_html.disabled = true
passe_html.disabled = true
escanteio_html.disabled = true

// Inicia o contador
function contagem() {
    gols += gols_valor
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

// Verifica se o botão foi apertado e qual que foi apertado
function verif_upgrade(clicado) {
    if (clicado == 'chute') {
        gols -= valor_chute
        if (gols < valor_chute) {
            chute_html.disabled = true
            chute_html.style.color = 'rgb(151, 19, 19)'
        }
    
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgb(151, 19, 19)'
        }
    
        valor_chute *= 1.2
        chutes += 3
        gols_valor = chutes
    
        if (gols < 0) {
            gols = 0
        }
    }
    else if (clicado == 'escanteio') {
        gols -= valor_escanteio
        if (gols < valor_chute) {
            chute_html.disabled = true
            chute_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgb(151, 19, 19)'
        }

        valor_escanteio *= 1.2
        escanteio += 2

        if (gols < 0) {
            gols = 0
        }
    }
    else if (clicado == 'passe') {
        gols -= valor_passe
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgb(151, 19, 19)'
        }

        if (gols < valor_chute) {
            chute_html.disabled = true
            chute_html.style.color = 'rgb(151, 19, 19)'
        }

        passe += 1
        valor_passe *= 1.1

        if (gols < 0) {
            gols = 0
        }
    }

    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

function verif_buff(obtido) {
    if (obtido == 'chuteira') {

    }
}

function aut() {

    // Verifica se o upgrade pode ser comprado
    if (gols >= valor_chute) {
        chute_html.disabled = false
        chute_html.style.color = 'rgb(54, 158, 54)'
    }

    if (gols >= valor_passe) {
        passe_html.disabled = false
        passe_html.style.color = 'rgb(54, 158, 54)'
    }

    if (gols >= valor_escanteio) {
        escanteio_html.disabled = false
        escanteio_html.style.color = 'rgb(54, 158, 54)'
    }

    if (gols < valor_chute) {
        chute_html.disabled = true
        chute_html.style.color = 'rgb(151, 19, 19)'
    }
    
    if (gols < valor_passe) {
        passe_html.disabled = true
        passe_html.style.color = 'rgb(151, 19, 19)'
    }

    if (gols < valor_escanteio) {
        escanteio_html.disabled = true
        escanteio_html.style.color = 'rgb(151, 19, 19)'
    }

    // Verifica se o buff pode ser comprado
    if (gols >= 700) {
        section_html.style.display = 'block'
        chuteira_html.style.display = 'inline-block'
    }
    if (gols < valor_chuteira) {
        chuteira_html.disabled = true
    }

    gols += passe
    gols += escanteio

    // Muda a cor caso o upgrade esteja habilitado ou desabilitado 
    if (chute_html.disabled == true) {
        chute_html.style.color = 'rgb(151, 19, 19)'
    } else {
        chute_html.style.color = 'rgb(54, 158, 54)'
    }

    if (passe_html.disabled == true) {    
        passe_html.style.color = 'rgb(151, 19, 19)'
    } else {
        passe_html.style.color = 'rgb(54, 158, 54)'
    }

    if (escanteio_html.disabled == true) {
        escanteio_html.style.color = 'rgb(151, 19, 19)'
    } else {
        escanteio_html.style.color = 'rgb(54, 158, 54)'
    }

    chute_html.value = `Chute ${valor_chute.toFixed(0)}`
    passe_html.value = `Passe ${valor_passe.toFixed(0)}`
    escanteio_html.value = `Escanteio ${valor_escanteio.toFixed(0)}`
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}