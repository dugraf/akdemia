var res1 = document.getElementById('res1')
var res2 = document.getElementById('res2')
var res3 = document.getElementById('res3')
var res4 = document.getElementById('res4')
var foto1 = document.getElementById('img1')

//document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/supino-inclinado-com-halteres.webp'>"

    var ex1 = 'peito 45'
    var ex2 = 'peito desenvolvimento'
    var ex3 = 'maquina peito superior'
    var ex4 = 'crossover parte superior'
//
    var ex5 = 'supino reto'
    var ex6 = 'voador'
//
    var ex7 = 'triceps no banco'
    var ex8 = 'polia alta com puxador'
    var ex9 = 'polia alta com corda'

function gerar()
{
    var exercicios_peito_superior = []
    exercicios_peito_superior.push(ex1, ex2, ex3, ex4)
    var array_peito_superior = arrayAleatoria(exercicios_peito_superior)

    res1.innerHTML = `${array_peito_superior[0]}`
    if (array_peito_superior[0] == 'crossover parte superior')
    {
        res1.innerHTML = `${array_peito_superior[3]}`

        if (array_peito_superior[3] == 'peito 45')
        {
            document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/supino-inclinado-com-halteres.gif'>"
        }

        else if (array_peito_superior[3] == 'peito desenvolvimento')
        {
            document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/desenvolvimento-para-ombros-com-halteres.gif'>"
        }

        else if (array_peito_superior[3] == 'maquina peito superior')
        {
            document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/maquina-peito-superior.png'>"
        }
    }

    res2.innerHTML = `${array_peito_superior[1]}`
    res4.innerHTML = `${array_peito_superior[2]}`

    if (array_peito_superior[0] == 'peito 45')
    {
        document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/supino-inclinado-com-halteres.gif'>"
    }

    else if (array_peito_superior[0] == 'peito desenvolvimento')
    {
        document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/desenvolvimento-para-ombros-com-halteres.gif'>"
    }

    else if (array_peito_superior[0] == 'maquina peito superior')
    {
        document.getElementById("img1").innerHTML = "<img src = '../imagens/peito/maquina-peito-superior.png'>"
    }

    if (array_peito_superior[1] == 'peito 45')
    {
        document.getElementById("img2").innerHTML = "<img src = '../imagens/peito/supino-inclinado-com-halteres.gif'>"
    }

    else if (array_peito_superior[1] == 'peito desenvolvimento')
    {
        document.getElementById("img2").innerHTML = "<img src = '../imagens/peito/desenvolvimento-para-ombros-com-halteres.gif'>"
    }

    else if (array_peito_superior[1] == 'maquina peito superior')
    {
        document.getElementById("img2").innerHTML = "<img src = '../imagens/peito/maquina-peito-superior.png'>"
    }

    else if (array_peito_superior[1] == 'crossover parte superior')
    {
        document.getElementById("img2").innerHTML = "<img src = '../imagens/peito/crossover-parte-superior.png'>"
    }

    if (array_peito_superior[2] == 'peito 45')
    {
        document.getElementById("img4").innerHTML = "<img src = '../imagens/peito/supino-inclinado-com-halteres.gif'>"
    }

    else if (array_peito_superior[2] == 'peito desenvolvimento')
    {
        document.getElementById("img4").innerHTML = "<img src = '../imagens/peito/desenvolvimento-para-ombros-com-halteres.gif'>"
    }

    else if (array_peito_superior[2] == 'maquina peito superior')
    {
        document.getElementById("img4").innerHTML = "<img src = '../imagens/peito/maquina-peito-superior.png'>"
    }

    else if (array_peito_superior[2] == 'crossover parte superior')
    {
        document.getElementById("img4").innerHTML = "<img src = '../imagens/peito/crossover-parte-superior.png'>"
    }

//
    var exercicios_peito_medial = []
    exercicios_peito_medial.push(ex5, ex6)

    var array_peito_medial = arrayAleatoria(exercicios_peito_medial)

    res3.innerHTML = `${array_peito_medial[0]}`

    if (array_peito_medial[0] == 'supino reto')
    {
        document.getElementById("img3").innerHTML = "<img src = '../imagens/peito/supino-reto.gif'>"
    }

    else if (array_peito_medial[0] == 'voador')
    {
        document.getElementById("img3").innerHTML = "<img src = '../imagens/peito/voador-no-aparelho.gif'>"
    }

    res9.innerHTML = `${array_peito_superior}`


//
    var exercicios_triceps = []
    exercicios_triceps.push(ex7, ex8, ex9)

    var array_triceps = arrayAleatoria(exercicios_triceps)

    res5.innerHTML = `${array_triceps[0]}`
    res6.innerHTML = `${array_triceps[1]}`
    res7.innerHTML = `${array_triceps[2]}`

    if (array_triceps[0] == 'triceps no banco')
    {
        document.getElementById("img5").innerHTML = "<img src = '../imagens/triceps/triceps-testa-deitado-no-banco-com-barra.gif'>"
    }

    else if (array_triceps[0] == 'polia alta com puxador')
    {
        document.getElementById("img5").innerHTML = "<img src = '../imagens/triceps/puxador.png'>"
    }

    else if (array_triceps[0] == 'polia alta com corda')
    {
        document.getElementById("img5").innerHTML = "<img src = '../imagens/triceps/triceps-puxada-no-pulley-com-corda.gif'>"
    }

    if (array_triceps[1] == 'triceps no banco')
    {
        document.getElementById("img6").innerHTML = "<img src = '../imagens/triceps/triceps-testa-deitado-no-banco-com-barra.gif'>"
    }

    else if (array_triceps[1] == 'polia alta com puxador')
    {
        document.getElementById("img6").innerHTML = "<img src = '../imagens/triceps/puxador.png'>"
    }

    else if (array_triceps[1] == 'polia alta com corda')
    {
        document.getElementById("img6").innerHTML = "<img src = '../imagens/triceps/triceps-puxada-no-pulley-com-corda.gif'>"
    }

    if (array_triceps[2] == 'triceps no banco')
    {
        document.getElementById("img7").innerHTML = "<img src = '../imagens/triceps/triceps-testa-deitado-no-banco-com-barra.gif'>"
    }

    else if (array_triceps[2] == 'polia alta com puxador')
    {
        document.getElementById("img7").innerHTML = "<img src = '../imagens/triceps/puxador.png'>"
    }

    else if (array_triceps[2] == 'polia alta com corda')
    {
        document.getElementById("img7").innerHTML = "<img src = '../imagens/triceps/triceps-puxada-no-pulley-com-corda.gif'>"
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