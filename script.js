const jogos = [
    {
        id: 0,
        nome: "The Ascent",
        img: "imagens/ascent.jpg",
        sinopse: "The Ascent é um videogame de RPG de ação com tema cyberpunk desenvolvido pelo estúdio de jogos indie sueco Neon Giant e publicado pela Curve Digital para Microsoft Windows, Xbox Series X/S e Xbox One em 29 de julho de 2021"
    },

    {
        id: 1,
        nome: "Yakuza: Like a Dragon",
        img: "imagens/yakuza.png",
        sinopse: "Ao contrário dos jogos anteriores da série Yakuza que focavam na vida de Kazuma Kiryu, um homem tentando levar uma vida normal depois de sua aposentadoria do clã Tojo, Like a Dragon introduz um jogo protagonista chamado Ichiban Kasuga.[10] Depois de ser preso por 18 anos e acabar por ser traído por seu antigo chefe, Ichiban parte em uma jornada pessoal para se tornar um herói e descobrir a razão dessa traição"
    },

    {
        id: 2,
        nome: "Ghostlore",
        img: "imagens/ghostlore.jpg",
        sinopse: "Ghostlore é um Action-RPG 'Eastpunk' onde se combate monstros do folclore sudeste asiático. Inspirado pelos clássicos ARPG's intemporais como Diablo 2 e Titan Quest, Ghostlore apresenta um item detalhado e um sistema de personalização de personagens, mapas gerados de forma processual, e uma bela arte isométrica 2D."
    },

    {
        id: 3,
        nome: "Atomic Heart",
        img: "imagens/atomic.jpg",
        sinopse: "Atomic Heart é um jogo de tiro em primeira pessoa desenvolvido pela Mundfish e publicado pela Focus Entertainment e 4Divinity. O jogo foi lançado para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One e Xbox Series X/S em 21 de fevereiro de 2023. O jogo recebeu críticas geralmente positivas após o lançamento"
    },

    {
        id: 4,
        nome: "Ni no Kuni II: Revenant Kingdom",
        img: "imagens/ninokuni2.jpg",
        sinopse: "Ni no Kuni II: Revenant Kingdom é um jogo eletrônico de RPG de ação desenvolvido pela Level-5 e publicado pela Bandai Namco Entertainment. O jogo é uma sequência de Ni no Kuni: Wrath of the White Witch, e foi lançado em 23 de março de 2018 para Microsoft Windows e PlayStation 4"
    },

    {
        id: 5,
        nome: "Ghostwire: Tokyo",
        img: "imagens/ghostwire.jpg",
        sinopse: "Ghostwire: Tokyo é um jogo eletrônico de ação-aventura em primeira pessoa desenvolvido pela Tango Gameworks e publicado pela Bethesda Softworks"
    },

    {
        id: 6,
        nome: "Wo Long: Fallen Dynasty",
        img: "imagens/wolong.jpg",
        sinopse: "Wo Long: Fallen Dynasty é um videogame RPG de ação e fantasia histórica desenvolvido pela Team Ninja e publicado pela Koei Tecmo. O jogo foi lançado em 3 de março de 2023 para PlayStation 4, PlayStation 5, Windows, Xbox One e Xbox Series X/S."
    },

    {
        id: 7,
        nome: "Hi-Fi Rush",
        img: "imagens/hifi.jpg",
        sinopse: "Hi-Fi Rush é um jogo eletrônico de ação e ritmo desenvolvido pela Tango Gameworks e publicado pela Bethesda Softworks. Foi lançado mundialmente em 25 de janeiro de 2023, para plataformas Windows e Xbox Series X/S."
    },

    {
        id: 8,
        nome: "Remnant, From the Ashes",
        img: "imagens/remnant.jpg",
        sinopse: "Remnant: From the Ashes é um videogame de RPG de ação desenvolvido pela Gunfire Games e publicado pela Perfect World Entertainment. Foi lançado para Windows, PlayStation 4 e Xbox One em agosto de 2019, seguido por uma porta Nintendo Switch lançada em março de 2023."
    },

    {
        id: 9,
        nome: "Eastern Exorcist",
        img: "imagens/eastern.jpg",
        sinopse: "Eastern Exorcist é um impressionante RPG de ação de rolagem lateral 2D ambientado em um mundo oriental fictício com a infestação de monstros demoníacos cruéis. Jogue como um exorcista habilidoso contra o mal caótico para abrir caminho pelo mundo brutal e experimente emaranhados imprevistos de seres complexos"
    },

    {
        id: 9,
        nome: "Torchlight II",
        img: "imagens/torchlight2.jpg",
        sinopse: "Torchlight II é um jogo eletrônico de RPG desenvolvido pela Runic Games, sendo lançado no dia 20 de setembro de 2012. É a sequência do jogo Torchlight, tendo como principais novidades o modo multiplayer, a personalização dos personagens e a melhoria do GUTS, ferramenta que permite a criação de conteúdos para o jogo"
    }
]



let nomeJogo = document.querySelector('#nomeJogo')
let imgJogo = document.querySelector('#imgJogo')
let sinopseJogo = document.querySelector('#sinopseJogo')

let contador = 0

function proximoJogo() {
    if (contador == jogos.length -1 ) {
        contador = 0
    } else {
        contador += 1
    }
    
    nomeJogo.innerHTML = jogos[contador].nome
    imgJogo.setAttribute("src",jogos[contador].img)
    sinopseJogo.innerHTML = jogos[contador].sinopse
    
}

function jogoAnterior() {
    if (contador == 0) {
        contador = jogos.length -1
    } else {
        contador -= 1
    }
    
    nomeJogo.innerHTML = jogos[contador].nome
    imgJogo.setAttribute("src",jogos[contador].img)
    sinopseJogo.innerHTML = jogos[contador].sinopse
}

function randomJogo() {
    contador = Math.floor(Math.random() * jogos.length)

    nomeJogo.innerHTML = jogos[contador].nome
    imgJogo.setAttribute("src",jogos[contador].img)
    sinopseJogo.innerHTML = jogos[contador].sinopse

}