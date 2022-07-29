var res1 = document.getElementById('res1')
var res2 = document.getElementById('res2')
var res3 = document.getElementById('res3')
var res4 = document.getElementById('res4')
var res9 = document.getElementById('res9')

    var ex1 = 'stiff'
    var ex2 = 'cadeira flexora'
    var ex3 = 'mesa flexora'
//
    var ex4 = 'panturrilha com joelho flexionado'
    var ex5 = 'panturrilha com joelho estendido'
    
    var exercicios_posterior = []
    exercicios_posterior.push(ex1, ex2, ex3)
    var array_posterior

    var exercicios_panturrilha = []
    exercicios_panturrilha.push(ex4, ex5)
    var array_panturrilha

function gerar()
{
    array_posterior = arrayAleatoria(exercicios_posterior)
    array_panturrilha = arrayAleatoria(exercicios_panturrilha)
    exerciciosPosterior()
    exerciciosPanturrilha()
}

function exerciciosPosterior()
{
    res1.innerHTML = `${array_posterior[0]}`
    res2.innerHTML = `${array_posterior[1]}`
    res3.innerHTML = `${array_posterior[2]}`

    fotosPosterior()
}

function fotosPosterior()
{
    /*FOTOS POSTERIOR*/

    if (array_posterior[0] == 'stiff')
    {
        document.getElementById("img1").innerHTML = "<img src = '../../imagens/posterior/stiff.gif'>"
    }

    else if (array_posterior[0] == 'cadeira flexora')
    {
        document.getElementById("img1").innerHTML = "<img src = '../../imagens/posterior/cadeira-flexora.gif'>"
    }
    
    else if (array_posterior[0] == 'mesa flexora')
    {
        document.getElementById("img1").innerHTML = "<img src = '../../imagens/posterior/mesa-flexora.gif'>"
    }

    if (array_posterior[1] == 'stiff')
    {
        document.getElementById("img2").innerHTML = "<img src = '../../imagens/posterior/stiff.gif'>"
    }

    else if (array_posterior[1] == 'cadeira flexora')
    {
        document.getElementById("img2").innerHTML = "<img src = '../../imagens/posterior/cadeira-flexora.gif'>"
    }
    
    else if (array_posterior[1] == 'mesa flexora')
    {
        document.getElementById("img2").innerHTML = "<img src = '../../imagens/posterior/mesa-flexora.gif'>"
    }

    if (array_posterior[2] == 'stiff')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/posterior/stiff.gif'>"
    }

    else if (array_posterior[2] == 'cadeira flexora')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/posterior/cadeira-flexora.gif'>"
    }
    
    else if (array_posterior[2] == 'mesa flexora')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/posterior/mesa-flexora.gif'>"
    }
}

function exerciciosPanturrilha()
{
    res4.innerHTML = `${array_panturrilha[0]}`
    res5.innerHTML = `${array_panturrilha[1]}`

    fotosPanturrilha()
}

function fotosPanturrilha()
{
    /*FOTOS PANTURRILHA*/

    if (array_panturrilha[0] == 'panturrilha com joelho flexionado')
    {
        document.getElementById("img4").innerHTML = "<img src = '../../imagens/posterior/panturrilha-joelho-flexionado.gif'>"
    }

    else if (array_panturrilha[0] == 'panturrilha com joelho estendido')
    {
        document.getElementById("img4").innerHTML = "<img src = '../../imagens/posterior/panturrilha-joelho-estendido.gif'>"
    }

    if (array_panturrilha[1] == 'panturrilha com joelho flexionado')
    {
        document.getElementById("img5").innerHTML = "<img src = '../../imagens/posterior/panturrilha-joelho-flexionado.gif'>"
    }

    else if (array_panturrilha[1] == 'panturrilha com joelho estendido')
    {
        document.getElementById("img5").innerHTML = "<img src = '../../imagens/posterior/panturrilha-joelho-estendido.gif'>"
    }
}

function arrayAleatoria(n)
{

    for (let i = n.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [n[i], n[j]] = [n[j], n[i]];
    }

    return n;
}