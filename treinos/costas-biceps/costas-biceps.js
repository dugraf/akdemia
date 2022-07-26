var res1 = document.getElementById('res1')
var res2 = document.getElementById('res2')
var res3 = document.getElementById('res3')
var res4 = document.getElementById('res4')
var res9 = document.getElementById('res9')
var foto1 = document.getElementById('img1')

//document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/supino-inclinado-com-halteres.webp'>"

    var ex1 = 'puxada alta'
    var ex2 = 'puxada baixa'
    var ex3 = 'serrote'
    var ex4 = 'remada no banco'
    var ex5 = 'DROP MECANICO: puxada alta no crossover'
//
    var ex6 = 'scott'
//
    var ex7 = 'rosca'
    var ex8 = 'rosca na polia baixa'
//
    var ex9 = 'rosca no banco inclinado'
    var ex10 = 'rosca com polia baixa unilateral'

    var exercicios_costas = []
    exercicios_costas.push(ex2, ex3, ex4)
    var array_costas

    var exercicios_biceps1 = []
    exercicios_biceps1.push(ex7, ex8)
    var array_biceps1

    var exercicios_biceps2 = []
    exercicios_biceps2.push(ex9, ex10)
    var array_biceps2

function gerar()
{
    array_costas = arrayAleatoria(exercicios_costas)
    array_biceps1 = arrayAleatoria(exercicios_biceps1)
    array_biceps2 = arrayAleatoria(exercicios_biceps2)
    exerciciosCosta()
    exerciciosBiceps()
    
}

function exerciciosCosta()
{
    res1.innerHTML = ex1
    res2.innerHTML = `${array_costas[0]}`
    res3.innerHTML = `${array_costas[1]}`
    res4.innerHTML = ex5

    res9.innerHTML = `${array_costas}`

    fotosCosta()
}

function fotosCosta()
{
    /*FOTOS COSTAS*/
    
    document.getElementById("img1").innerHTML = "<img src = '../../imagens/costas/costas-puxada-aberta-com-barra-no-pulley-1.gif'>"

    if (array_costas[0] == 'puxada baixa')
    {
        document.getElementById("img2").innerHTML = "<img src = '../../imagens/costas/remada-sentado-com-cabos-e-triangulo-para-costas.gif'>"
    }

    else if (array_costas[0] == 'serrote')
    {
        document.getElementById("img2").innerHTML = "<img src = '../../imagens/costas/serrote-com-halteres-no-banco-inclinado.gif'>"
    }

    else if (array_costas[0] == 'remada no banco')
    {
        document.getElementById("img2").innerHTML = "<img src = '../../imagens/costas/costas-remada-no-banco-inclinado-com-halteres.gif'>"
    }

    if (array_costas[1] == 'puxada baixa')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/costas/remada-sentado-com-cabos-e-triangulo-para-costas.gif'>"
    }

    else if (array_costas[1] == 'serrote')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/costas/serrote-com-halteres-no-banco-inclinado.gif'>"
    }

    else if (array_costas[1] == 'remada no banco')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/costas/costas-remada-no-banco-inclinado-com-halteres.gif'>"
    }

    document.getElementById("img4").innerHTML = "<img src = '../../imagens/costas/Rope-Straight-Arm-Pulldown.gif'>"

}

function exerciciosBiceps()
{
    res5.innerHTML = ex6
    res6.innerHTML = `${array_biceps1[0]}`
    res7.innerHTML = `${array_biceps2[0]}`

    fotosBiceps()
}


function fotosBiceps()
{
    document.getElementById("img5").innerHTML = "<img src = '../../imagens/biceps/scott.gif'>"

    if (array_biceps1[0] == 'rosca')
    {
        document.getElementById("img6").innerHTML = "<img src = '../../imagens/biceps/rosca-biceps-direta-na-barra-ez.gif'>"
    }

    else if (array_biceps1[0] == 'rosca na polia baixa')
    {
        document.getElementById("img6").innerHTML = "<img src = '../../imagens/biceps/rosca-na-polia-baixa.png'>"
    }

    if (array_biceps2[0] == 'rosca no banco inclinado')
    {
        document.getElementById("img7").innerHTML = "<img src = '../../imagens/biceps/rosca-biceps-com-halteres-no-banco-inclinado.gif'>"
    }

    else if (array_biceps2[0] == 'rosca com polia baixa unilateral')
    {
        document.getElementById("img7").innerHTML = "<img src = '../../imagens/biceps/rosca-unilateral-na-polia-baixa.gif'>"
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