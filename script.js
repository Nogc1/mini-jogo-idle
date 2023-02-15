// Botão de gols
let contador = document.getElementById('contador')

// Botões de upgrades
let chute_html = document.getElementById('chute')
let passe_html = document.getElementById('passe')
let escanteio_html = document.getElementById('escanteio')
let lateral_html = document.getElementById('lateral')
let cabeçada_html = document.getElementById('cabeçada')
let agarrar_html = document.getElementById('agarrar')

// Botões de buffs
let section_html = document.getElementById('buff')
let chuteira_html = document.getElementById('chuteira')
let camiseta_html = document.getElementById('camiseta')
let caneleira_html = document.getElementById('caneleira')
let meia_html = document.getElementById('meia')
let calção_html = document.getElementById('calção')

// Preço dos upgrades
var valor_chute = 30
var valor_passe = 10
var valor_escanteio = 50
var valor_lateral = 1000
var valor_cabeçada = 50000
var valor_agarrar = 500000

// Preço dos buffs
var valor_chuteira = 1000
var valor_camiseta = 50000
var valor_caneleira = 100000
var valor_meia = 1000000
var valor_calção = 1200000

// Quanto cada um gera  obs. Valor inicial
var passe = 0
var chutes = 0
var escanteio = 0
var lateral = 0
var cabeçada = 0
var agarrar = 0

// cps
var cps_chute = 2.5
var cps_passe = 0.8
var cps_escanteio = 5
var cps_lateral = 100
var cps_cabeçada = 500
var cps_agarrar = 1000

// Contador
var gols = 0
var gols_valor = 1

// Atualiza o contador e as variaveis para o novo valor através da função aut
setInterval(aut, 1000)

contador.innerHTML = `<p>Gols: ${gols.toFixed(0)}</p>`
chute_html.disabled = true
passe_html.disabled = true
escanteio_html.disabled = true
lateral_html.disabled = true
cabeçada_html.disabled = true
agarrar_html.disabled = true

// Inicia o contador
function contagem() {
    gols += gols_valor
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

// Área de upgrades
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
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgb(151, 19, 19)'
        }
    
        valor_chute *= 1.2
        chutes += cps_chute
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
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgb(151, 19, 19)'
        }

        valor_escanteio *= 1.2
        escanteio += cps_escanteio

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
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgb(151, 19, 19)'
        }

        passe += cps_passe
        valor_passe *= 1.1

        if (gols < 0) {
            gols = 0
        }
    }
    else if (clicado == 'lateral') {
        gols -= valor_lateral
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
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgb(151, 19, 19)'
        }

        valor_lateral *= 1.2
        lateral += cps_lateral

        if (gols < 0) {
            gols = 0
        }
    }
    else if (clicado == 'cabeçada') {
        gols -= valor_cabeçada
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
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgb(151, 19, 19)'
        }

        valor_cabeçada *= 1.2
        cabeçada += cps_cabeçada

        if (gols < 0) {
            gols = 0
        }
    }
    else if (clicado == 'agarrar') {
        gols -= valor_agarrar
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
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgb(151, 19, 19)'
        }
        if (gols < valor_agarrar) {
            agarrar_html.disabled = true
            agarrar_html.style.color = 'rgb(151, 19, 19)'
        }

        valor_agarrar *= 1.5
        agarrar += cps_agarrar

        if (gols < 0) {
            gols = 0
        }
    }
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}

// Área de buffs
function verif_buff(obtido) {
    if (obtido == 'chuteira') {
        cps_chute += 2.5
        cps_passe += 1.3
        cps_escanteio += 1
        chuteira_html.style.display = 'none'
    }
    if (obtido == 'camiseta') {
        cps_lateral += 5
        camiseta_html.style.display = 'none'
    } 
    if (obtido == 'caneleira') {
        cps_chute += 1.1
        cps_agarrar += 2
        caneleira_html.style.display = 'none'
    }
    if (obtido == 'meia') {
        cps_escanteio += 3
        cps_lateral += 2
        meia_html.style.display = 'none'
    }
    if (obtido == 'calção') {
        cps_cabeçada += 1
        cps_lateral += 3
        cps_agarrar += 4
        calção_html.style.display = 'none'
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
    if (gols >= valor_lateral) {
        lateral_html.disabled = false
        lateral_html.style.color = 'rgb(54, 158, 54)'
    }
    if (gols >= valor_cabeçada) {
        cabeçada_html.disabled = false
        cabeçada_html.style.color = 'rgb(54, 158, 54)'
    }
    if (gols >= valor_agarrar) {
        agarrar_html.disabled = false
        agarrar_html.style.color = 'rgb(54, 158, 54)'
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
    if (gols < valor_lateral) {
        lateral_html.disabled = true
        lateral_html.style.color = 'rgb(151, 19, 19)'
    }
    if (gols < valor_cabeçada) {
        cabeçada_html.disabled = true
        cabeçada_html.style.color = 'rgb(151, 19, 19)'
    }
    if (gols < valor_agarrar) {
        agarrar_html.disabled = true
        agarrar_html.style.color = 'rgb(151, 19, 19)'
    }

    // Verifica se o buff pode ser comprado
    if (gols >= 700) {
        section_html.style.display = 'block'
        if (gols > valor_chuteira) {
            chuteira_html.disabled = false
        } else {
            chuteira_html.disabled = true
        }
        if (gols > valor_camiseta) {
            camiseta_html.disabled = false
        } else {
            camiseta_html.disabled = true
        }
        if (gols > valor_caneleira) {
            caneleira_html.disabled = false
        } else {
            caneleira_html.disabled = true
        }
        if (gols > valor_meia) {
            meia_html.disabled = false
        } else {
            meia_html.disabled = true
        }
        if (gols > valor_calção) {
            calção_html.disabled = false
        } else {
            calção_html.disabled = true
        }
    }
    

    gols += passe
    gols += escanteio
    gols += lateral
    gols += cabeçada

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

    if (lateral_html.disabled == true) {
        lateral_html.style.color = 'rgb(151, 19, 19)'
    } else {
        lateral_html.style.color = 'rgb(54, 158, 54)'
    }

    if (cabeçada_html.disabled == true) {
        cabeçada_html.style.color = 'rgb(151, 19, 19)'
    } else {
        cabeçada_html.style.color = 'rgb(54, 158, 54)'
    }

    chute_html.value = `Chute ${valor_chute.toFixed(0)}`
    passe_html.value = `Passe ${valor_passe.toFixed(0)}`
    escanteio_html.value = `Escanteio ${valor_escanteio.toFixed(0)}`
    lateral_html.value = `Lateral ${valor_lateral.toFixed(0)}`
    cabeçada_html.value = `Cabeçada ${valor_cabeçada.toFixed(0)}`
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p>`
}