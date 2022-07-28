var res1 = document.getElementById('res1')
var res2 = document.getElementById('res2')
var res3 = document.getElementById('res3')
var res4 = document.getElementById('res4')

    var ex1 = 'supino declinado'
    var ex2 = 'crossover parte inferior'
//
    var ex3 = 'supino reto'
    var ex4 = 'voador'
//
    var ex5 = 'desenvolvimento'
    var ex6 = 'elevação frontal no crossover'
    var ex7 = 'elevação lateral na máquina'
    var ex8 = 'elevação lateral no banco'
    var ex9 = 'elevação lateral no crossover'

    var exercicios_peito_medial = []
    exercicios_peito_medial.push(ex3, ex4)
    var array_peito_medial

    var exercicios_ombro1 = []
    exercicios_ombro1.push(ex5, ex6)
    var array_ombro1

    var exercicios_ombro2 = []
    exercicios_ombro2.push(ex7, ex8, ex9)
    var array_ombro2

function gerar()
{
    array_peito_medial = arrayAleatoria(exercicios_peito_medial)
    array_ombro1 = arrayAleatoria(exercicios_ombro1)
    array_ombro2 = arrayAleatoria(exercicios_ombro2)
    exerciciosPeito()
    exerciciosOmbro()
    
}

function exerciciosPeito()
{
    res1.innerHTML = ex1
    res2.innerHTML = ex2
    res3.innerHTML = `${array_peito_medial[0]}`

    fotosPeito()
}

function fotosPeito()
{
    /*FOTOS PEITO INFERIOR*/
    
    document.getElementById("img1").innerHTML = "<img src = '../../imagens/peito/supino-declinado.gif'>"

    document.getElementById("img2").innerHTML = "<img src = '../../imagens/peito/crossover-parte-inferior.gif'>"

    /*FOTOS PEITO MEDIAL*/

    if (array_peito_medial[0] == 'supino reto')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/peito/supino-reto.gif'>"
    }

    else if (array_peito_medial[0] == 'voador')
    {
        document.getElementById("img3").innerHTML = "<img src = '../../imagens/peito/voador-no-aparelho.gif'>"
    }
}

function exerciciosOmbro()
{
    res5.innerHTML = `${array_ombro1[0]}`
    res6.innerHTML = `${array_ombro2[0]}`
    res7.innerHTML = `${array_ombro2[1]}`
    res8.innerHTML = `${array_ombro2[2]}`

    fotosOmbro()
}

function fotosOmbro()
{
    if (array_ombro1[0] == 'desenvolvimento')
    {
        document.getElementById("img5").innerHTML = "<img src = '../../imagens/ombro/ombros-desenvolvimento-de-ombros-frontal-com-barra.gif'>"
    }

    else if (array_ombro1[0] == 'elevação frontal no crossover')
    {
        document.getElementById("img5").innerHTML = "<img src = '../../imagens/ombro/elevacao-frontal-crossover.png'>"
    }

    if (array_ombro2[0] == 'elevação lateral na máquina')
    {
        document.getElementById("img6").innerHTML = "<img src = '../../imagens/ombro/elevacao-alteral-maquina.png'>"
    }

    else if (array_ombro2[0] == 'elevação lateral no banco')
    {
        document.getElementById("img6").innerHTML = "<img src = '../../imagens/ombro/elevacao-lateral-banco.png'>"
    }

    else if (array_ombro2[0] == 'elevação lateral no crossover')
    {
        document.getElementById("img6").innerHTML = "<img src = '../../imagens/ombro/elevacao-lateral-crossover.png'>"
    }

    if (array_ombro2[1] == 'elevação lateral na máquina')
    {
        document.getElementById("img7").innerHTML = "<img src = '../../imagens/ombro/elevacao-alteral-maquina.png'>"
    }

    else if (array_ombro2[1] == 'elevação lateral no banco')
    {
        document.getElementById("img7").innerHTML = "<img src = '../../imagens/ombro/elevacao-lateral-banco.png'>"
    }

    else if (array_ombro2[1] == 'elevação lateral no crossover')
    {
        document.getElementById("img7").innerHTML = "<img src = '../../imagens/ombro/elevacao-lateral-crossover.png'>"
    }

    if (array_ombro2[2] == 'elevação lateral na máquina')
    {
        document.getElementById("img8").innerHTML = "<img src = '../../imagens/ombro/elevacao-alteral-maquina.png'>"
    }

    else if (array_ombro2[2] == 'elevação lateral no banco')
    {
        document.getElementById("img8").innerHTML = "<img src = '../../imagens/ombro/elevacao-lateral-banco.png'>"
    }

    else if (array_ombro2[2] == 'elevação lateral no crossover')
    {
        document.getElementById("img8").innerHTML = "<img src = '../../imagens/ombro/elevacao-lateral-crossover.png'>"
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