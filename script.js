// Botão de gols
let contador = document.getElementById('contador')

// Botões de powerup
let carrinho_html = document.getElementById('carrinho')
let simular_html = document.getElementById('simular')
let drible_html = document.getElementById('drible')

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
let braçadeira_html = document.getElementById('braçadeira')

// Informações dos upgrades
var infopass = document.getElementById('infopass')
var infochut = document.getElementById('infochut')
var infoesc = document.getElementById('infoesc')
var infolat = document.getElementById('infolat')
var infocab = document.getElementById('infocab')
var infoagar = document.getElementById('infoagar')

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
var valor_braçadeira = 1700000

// Quanto cada um gera obs. Valor inicial = 0
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
var cps = 0

// Spans
var infopasse = document.getElementById("infopasse")
var infochute = document.getElementById('infochute')
var infoescanteio = document.getElementById('infoescanteio')
var infolateral = document.getElementById('infolateral')
var infocabeçada = document.getElementById('infocabeçada')
var infoagarrar = document.getElementById('infoagarrar')

// Atualiza o contador e as variaveis para o novo valor através da função aut
var automatic = setInterval(aut, 1000)
automatic

contador.innerHTML = `<p>Gols: ${gols.toFixed(0)}</p><p id='cps'>Gols por segundo: ${cps.toFixed(2)}</p>`
chute_html.disabled = true
passe_html.disabled = true
escanteio_html.disabled = true
lateral_html.disabled = true
cabeçada_html.disabled = true
agarrar_html.disabled = true

// Mostra as informações na tela quando o botão (i) for pressionado
var titulo = document.getElementById('titulo')
var infs = document.getElementById('infs')
var titulo_chut = document.getElementById('titulo2')
var infs_chut = document.getElementById('infs2')
var titulo_esc = document.getElementById('titulo3')
var infs_esc = document.getElementById("infs3")
var titulo_lat = document.getElementById("titulo4")
var infs_lat = document.getElementById("infs4")
var titulo_cab = document.getElementById('titulo5')
var infs_cab = document.getElementById('infs5')
var titulo_agar = document.getElementById('titulo6')
var infs_agar = document.getElementById('infs6')

function infos(i) {
    if (i == 'infopasse') {
        infopass.style.display = 'block'
        titulo.style.display = 'block'
        infs.style.display = 'block'
        titulo.innerHTML = 'Passe'
        infs.innerHTML = `A cada passe são gerados <strong>${cps_passe}</strong> gols por segundo.`
        infopasse.setAttribute('onclick', "fechar(this.id)")
    }

    else if (i == 'infochute') {
        infochut.style.display = 'block'
        titulo_chut.style.display = 'block'
        infs_chut.style.display = 'block'
        titulo_chut.innerHTML = 'Chute'
        infs_chut.innerHTML = `A cada chute são gerados <strong>${cps_chute}</strong> gols por clique.`
        infochute.setAttribute('onclick', "fechar(this.id)")
    }

    else if (i == 'infoescanteio') {
        infoesc.style.display = 'block'
        titulo_esc.style.display = 'block'
        infs_esc.style.display = 'block'
        titulo_esc.innerHTML = 'Escanteio'
        infs_esc.innerHTML = `A cada Escanteio são gerados <strong>${cps_escanteio}</strong> gols por segundo.`
        infoescanteio.setAttribute('onclick', 'fechar(this.id)')
    }

    else if (i == 'infolateral') {
        infolat.style.display = 'block'
        titulo_lat.style.display = 'block'
        infs_lat.style.display = 'block'
        titulo_lat.innerHTML = 'Lateral'
        infs_lat.innerHTML = `A cada Lateral são gerados <strong>${cps_lateral}</strong> gols por segundo.`
        infolateral.setAttribute('onclick', 'fechar(this.id)')
    }

    else if (i == 'infocabeçada') {
        infocab.style.display = 'block'
        titulo_cab.style.display = 'block'
        infs_cab.style.display = 'block'
        titulo_cab.innerHTML = 'Cabeçada'
        infs_cab.innerHTML = `A cada Cabeçada são gerados <strong>${cps_cabeçada}</strong> gols por segundo.`
        infocabeçada.setAttribute('onclick', 'fechar(this.id)')
    }

    else if (i == 'infoagarrar') {
        infoagar.style.display = 'block'
        titulo_agar.style.display = 'block'
        infs_agar.style.display = 'block'
        titulo_agar.innerHTML = 'Agarrar'
        infs_agar.innerHTML = `A cada Agarrar são gerados <strong>${cps_agarrar}</strong> gols por segundo.`
        infoagarrar.setAttribute('onclick', 'fechar(this.id)')
    }
}
function fechar(f) {
    if (f == 'infopasse') {
        infopass.style.display = 'none'
        titulo.style.display = 'none'
        infs.style.display = 'none'
        infopasse.setAttribute('onclick', "infos(this.id)")
    }
    else if (f == 'infochute') {
        infochut.style.display = 'none'
        titulo_chut.style.display = 'none'
        infs_chut.style.display = 'none'
        infochute.setAttribute('onclick', "infos(this.id)")
    }
    else if (f == 'infoescanteio') {
        infoesc.style.display = 'none'
        titulo_esc.style.display = 'none'
        infs_esc.style.display = 'none'
        infoescanteio.setAttribute('onclick', 'infos(this.id)')
    }
    else if (f == 'infolateral') {
        infolat.style.display = 'none'
        titulo_lat.style.display = 'none'
        infs_lat.style.display = 'none'
        infolateral.setAttribute('onclick', 'infos(this.id)')
    }
    else if (f == 'infocabeçada') {
        infocab.style.display = 'none'
        titulo_cab.style.display = 'none'
        infs_cab.style.display = 'none'
        infocabeçada.setAttribute('onclick', 'infos(this.id)')
    }
    else if (f == 'infoagarrar') {
        infoagar.style.display = 'none'
        titulo_agar.style.display = 'none'
        infs_agar.style.display = 'none'
        infoagarrar.setAttribute('onclick', 'infos(this.id)')
    }
}

// Inicia o contador
function contagem() {
    gols += gols_valor
    contador.innerHTML = `<p>Gols: ${gols.toFixed(0)}</p><p id='cps'>Gols por segundo: ${cps.toFixed(2)}</p>`
}

// Área de Powerups
function powerup(click) {
    let seg1 = 0
    let gradient1 = 100
    let cont1 = 0

    let seg2 = 0
    let gradient2 = 100
    let cont2 = 0

    let seg3 = 0
    let gradient3 = 100
    let cont3 = 0

    var porcent = gols * 20 / 100

    if (click == 'carrinho') {
        var timer_carrinho = setInterval(min_carrinho, 1000)
        if (d100() < 20) {
            gols -= porcent
        } else {
            gols += porcent
        }
        carrinho_html.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0.59) 100%, black)`
        timer_carrinho
        carrinho_html.disabled = true

        function min_carrinho() {
            if (seg1 < 45) {
                seg1 += 1
                cont1 += 1
                if (cont1 == 1) {
                    gradient1 -= 3
                    carrinho_html.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0.59) ${gradient1}%, rgba(0, 0, 0, 0) 0%)`
                    cont1 = 0
                }
                if (gradient1 <= 0) {
                    carrinho_html.style.backgroundImage = 'url(imagens/img-powerup/carrinho.png)'
                    carrinho_html.style.backgroundSize = 'cover'
                    gradient1 = 100
                    seg1 = 0
                    cont1 = 0
                    carrinho_html.disabled = false
                    clearInterval(timer_carrinho)
                }
            }
        }
    }
    else if (click == 'drible') {
        var timer_drible = setInterval(min_drible, 1000)

        var up = cps_chute
        cps_chute *= 2

        drible_html.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0.59) 100%, black)`
        timer_drible
        drible_html.disabled = true

        function min_drible() {
            if (seg2 < 60) {
                seg2 += 1
                cont2 += 1
                if (cont2 == 1) {
                    gradient2 -= 2
                    drible_html.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0.59) ${gradient2}%, rgba(0, 0, 0, 0) 0%)`
                    cont2 = 0
                }
                if (gradient2 <= 0) {
                    drible_html.style.backgroundImage = 'url(imagens/img-powerup/drible.png)'
                    drible_html.style.backgroundSize = 'cover'
                    gradient2 = 100
                    seg2 = 0
                    cont2 = 0
                    cps_chute = up
                    drible_html.disabled = false
                    clearInterval(timer_drible)
                }
            }
        }
    }
    else if (click == 'simular') {
        var timer_simular = setInterval(min_simular, 1000)
        var guard_chute = chutes
        var guard_passe = passe
        var guard_escanteio = escanteio
        var guard_lateral = lateral
        var guard_cabeçada = cabeçada
        var guard_agarrar = agarrar
        var guard_cpschute = cps_chute
        var guard_cpspasse = cps_passe
        var guard_cpsescanteio = cps_escanteio
        var guard_cpslateral = cps_lateral
        var guard_cpscabeçada = cps_cabeçada
        var guard_cpsagarrar = cps_agarrar
        var guard_gols = gols_valor
        var verificar = false

        if (d100() < 25) {

            verificar = true
            chutes = 0
            passe = 0
            escanteio = 0
            lateral = 0
            cabeçada = 0
            agarrar = 0
            cps_chute = 0
            cps_passe = 0
            cps_escanteio = 0
            cps_lateral = 0
            cps_cabeçada = 0
            cps_agarrar = 0
            gols_valor = 1

            chute_html.disabled = true
            passe_html.disabled = true
            escanteio_html.disabled = true
            lateral_html.disabled = true
            cabeçada_html.disabled = true
            agarrar_html.disabled = true
            clearInterval(automatic)
            
        } else {
            agarrar *= 2
            chutes *= 16
        }

        simular_html.style.background = 'linear-gradient(to top, rgba(255, 255, 255, 0.59) 100%, black)'
        timer_simular
        simular_html.disabled = true

        function min_simular() {
            if (seg3 < 100) {
                seg3 += 1
                cont3 += 1
                if (cont3 == 1) {
                    gradient3 -= 1
                    simular_html.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0.59) ${gradient3}%, rgba(0, 0, 0, 0) 0%)`
                    cont3 = 0
                }
                if (gradient3 <= 0) {
                    simular_html.style.backgroundImage = 'url(imagens/img-powerup/simular.png)'
                    simular_html.style.backgroundSize = 'cover'

                    gradient3 = 100
                    seg3 = 0
                    cont3 = 0

                    if (verificar == true) {
                        chutes = guard_chute
                        agarrar = guard_agarrar
                        cabeçada = guard_cabeçada
                        escanteio = guard_escanteio
                        lateral = guard_lateral
                        passe = guard_passe
                        cps_agarrar = guard_cpsagarrar
                        cps_cabeçada = guard_cpscabeçada
                        cps_chute = guard_cpschute
                        cps_escanteio = guard_cpsescanteio
                        cps_lateral = guard_cpslateral
                        cps_passe = guard_cpspasse
                        gols_valor = guard_gols
                        automatic = setInterval(aut, 1000)
                        automatic
                    }
            
                    simular_html.disabled = false
                    clearInterval(timer_simular)
                }
            }
        }
    }

    function d100() {
        return Math.floor(Math.random() * (100 - 1) + 1)
    }
}

// Área de Upgrades
function verif_upgrade(clicado) {
    if (clicado == 'chute') {
        gols -= valor_chute
        if (gols < valor_chute) {
            chute_html.disabled = true
            chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
    
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
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
            chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgba(255, 0, 0, 0.767)'
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
            passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }

        if (gols < valor_chute) {
            chute_html.disabled = true
            chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgba(255, 0, 0, 0.767)'
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
            chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgba(255, 0, 0, 0.767)'
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
            chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgba(255, 0, 0, 0.767)'
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
            chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_passe) {
            passe_html.disabled = true
            passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_escanteio) {
            escanteio_html.disabled = true
            escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_lateral) {
            lateral_html.disabled = true
            lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_cabeçada) {
            cabeçada_html.disabled = true
            cabeçada_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }
        if (gols < valor_agarrar) {
            agarrar_html.disabled = true
            agarrar_html.style.color = 'rgba(255, 0, 0, 0.767)'
        }

        valor_agarrar *= 1.5
        agarrar += cps_agarrar

        if (gols < 0) {
            gols = 0
        }
    }
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p><p id='cps'>Gols por segundo: ${cps.toFixed(2)}</p>`
}

// Área de Buffs
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
    if (obtido == 'braçadeira') {
        cps_passe += 3
        cps_chute += 3
        cps_escanteio += 3
        cps_agarrar += 3
        braçadeira_html.style.display = 'none'
    }
}

// Função que gera as coisas automático
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
        chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
    }
    
    if (gols < valor_passe) {
        passe_html.disabled = true
        passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
    }

    if (gols < valor_escanteio) {
        escanteio_html.disabled = true
        escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
    }
    if (gols < valor_lateral) {
        lateral_html.disabled = true
        lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
    }
    if (gols < valor_cabeçada) {
        cabeçada_html.disabled = true
        cabeçada_html.style.color = 'rgba(255, 0, 0, 0.767)'
    }
    if (gols < valor_agarrar) {
        agarrar_html.disabled = true
        agarrar_html.style.color = 'rgba(255, 0, 0, 0.767)'
    }

    // Verifica se o buff pode ser comprado
    if (gols >= 700) {
        section_html.style.display = 'block'
        if (gols > valor_chuteira) {
            chuteira_html.disabled = false
            chuteira_html.style.backgroundImage = 'url(imagens/img-buffs/chuteira.png)'
        } else {
            chuteira_html.disabled = true
            chuteira_html.style.backgroundImage = 'url(imagens/img-buffs/X.png)'
        }
        if (gols > valor_camiseta) {
            camiseta_html.disabled = false
            camiseta_html.style.backgroundImage = 'url(imagens/img-buffs/Camiseta.png)'
        } else {
            camiseta_html.disabled = true
            camiseta_html.style.backgroundImage = 'url(imagens/img-buffs/X.png)'
        }
        if (gols > valor_caneleira) {
            caneleira_html.disabled = false
            caneleira_html.style.backgroundImage = 'url(imagens/img-buffs/caneleira.png)'
        } else {
            caneleira_html.disabled = true
            caneleira_html.style.backgroundImage = 'url(imagens/img-buffs/X.png)'
        }
        if (gols > valor_meia) {
            meia_html.disabled = false
            meia_html.style.backgroundImage = 'url(imagens/img-buffs/meia.png)'
        } else {
            meia_html.disabled = true
            meia_html.style.backgroundImage = 'url(imagens/img-buffs/X.png)'
        }
        if (gols > valor_calção) {
            calção_html.disabled = false
            calção_html.style.backgroundImage = 'url(imagens/img-buffs/calcao.png)'
        } else {
            calção_html.disabled = true
            calção_html.style.backgroundImage = 'url(imagens/img-buffs/X.png)'
        }
        if (gols > valor_braçadeira) {
            braçadeira_html.disabled = false
            braçadeira_html.style.backgroundImage = 'url(imagens/img-buffs/braçadeira.png)'
        } else {
            braçadeira_html.disabled = true
            braçadeira_html.style.backgroundImage = 'url(imagens/img-buffs/X.png)'
        }
    }
    

    gols += passe
    gols += escanteio
    gols += lateral
    gols += cabeçada
    gols += agarrar
    cps = passe + escanteio + lateral + cabeçada + agarrar

    // Muda a cor caso o upgrade esteja habilitado ou desabilitado 
    if (chute_html.disabled == true) {
        chute_html.style.color = 'rgba(255, 0, 0, 0.767)'
    } else {
        chute_html.style.color = 'rgb(54, 158, 54)'
    }

    if (passe_html.disabled == true) {
        passe_html.style.color = 'rgba(255, 0, 0, 0.767)'
    } else {
        passe_html.style.color = 'rgb(54, 158, 54)'
    }

    if (escanteio_html.disabled == true) {
        escanteio_html.style.color = 'rgba(255, 0, 0, 0.767)'
    } else {
        escanteio_html.style.color = 'rgb(54, 158, 54)'
    }

    if (lateral_html.disabled == true) {
        lateral_html.style.color = 'rgba(255, 0, 0, 0.767)'
    } else {
        lateral_html.style.color = 'rgb(54, 158, 54)'
    }

    if (cabeçada_html.disabled == true) {
        cabeçada_html.style.color = 'rgba(255, 0, 0, 0.767)'
    } else {
        cabeçada_html.style.color = 'rgb(54, 158, 54)'
    }

    chute_html.value = `Chute ${valor_chute.toFixed(0)}`
    passe_html.value = `Passe ${valor_passe.toFixed(0)}`
    escanteio_html.value = `Escanteio ${valor_escanteio.toFixed(0)}`
    lateral_html.value = `Lateral ${valor_lateral.toFixed(0)}`
    cabeçada_html.value = `Cabeçada ${valor_cabeçada.toFixed(0)}`
    agarrar_html.value = `Agarrar ${valor_agarrar.toFixed(0)}`
    contador.innerHTML =`<p>Gols: ${gols.toFixed(0)}</p><p id='cps'>Gols por segundo: ${cps.toFixed(2)}</p>`
}