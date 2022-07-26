var res1 = document.getElementById('res1')
var res2 = document.getElementById('res2')
var res3 = document.getElementById('res3')
var res4 = document.getElementById('res4')
var res9 = document.getElementById('res9')

    var ex1 = 'agachamento'
    var ex2 = 'leg press'
    var ex3 = 'cadeira extensora'
    var ex4 = 'agachamento bulgaro'
    var ex5 = 'leg press horizontal'
//
    var exercicios_quadriceps = []
    exercicios_quadriceps.push(ex4, ex5)
    var array_quadriceps

function gerar()
{
    array_quadriceps = arrayAleatoria(exercicios_quadriceps)
    exerciciosQuadriceps()
}

function exerciciosQuadriceps()
{
    res1.innerHTML = ex1
    res2.innerHTML = ex2
    res3.innerHTML = `${array_quadriceps[0]}`
    res4.innerHTML = ex3

    fotosQuadriceps()
}

function fotosQuadriceps()
{
    /*FOTOS QUADRICEPS*/
    
    document.getElementById("img1").innerHTML = "<img src = '../../imagens/quadriceps/agachamento-com-barra.gif'>"

    document.getElementById("img2").innerHTML = "<img src = '../../imagens/quadriceps/pernas-leg-press-45-tradicional.gif'>"

    if (array_quadriceps[0] == 'agachamento bulgaro')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/quadriceps/agachamento-bulgaro.gif'>"
    }

    else if (array_quadriceps[0] == 'leg press horizontal')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/quadriceps/leg-press-horizontal.png'>"
    }

    document.getElementById("img4").innerHTML = "<img src = '../../imagens/quadriceps/pernas-extensao-de-pernas-na-maquina.gif'>"
}

function arrayAleatoria(n)
{

    for (let i = n.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [n[i], n[j]] = [n[j], n[i]];
    }

    return n;
}