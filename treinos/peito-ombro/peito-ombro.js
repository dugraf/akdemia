var res1 = document.getElementById('res1')
var res2 = document.getElementById('res2')
var res3 = document.getElementById('res3')
var res4 = document.getElementById('res4')
var res9 = document.getElementById('res9')

    var ex1 = 'supino declinado'
    var ex2 = 'crossover parte inferior'
//
    var ex3 = 'supino reto'
    var ex4 = 'voador'
//
    var ex7 = 'ombro no banco'
    var ex8 = 'polia alta com puxador'
    var ex9 = 'polia alta com corda'

    var exercicios_peito_medial = []
    exercicios_peito_medial.push(ex3, ex4)
    var array_peito_medial

    var exercicios_ombro = []
    exercicios_ombro.push(ex7, ex8, ex9)
    var array_ombro

    var a = 12

function gerar()
{
    array_peito_medial = arrayAleatoria(exercicios_peito_medial)
    array_ombro = arrayAleatoria(exercicios_ombro)
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
    res5.innerHTML = `${array_ombro[0]}`
    res6.innerHTML = `${array_ombro[1]}`
    res7.innerHTML = `${array_ombro[2]}`
    res8.innerHTML = `polia alta com corda DROPSET`

    fotosOmbro()
}

function fotosOmbro()
{
    if (array_ombro[0] == 'ombro no banco')
    {
        document.getElementById("img5").innerHTML = "<img src = '../../imagens/ombro/ombro-testa-deitado-no-banco-com-barra.gif'>"
    }

    else if (array_ombro[0] == 'polia alta com puxador')
    {
        document.getElementById("img5").innerHTML = "<img src = '../../imagens/ombro/puxador.png'>"
    }

    document.getElementById("img8").innerHTML = "<img src = '../../imagens/triceps/triceps-puxada-no-pulley-com-corda.gif'>"
}

function arrayAleatoria(n)
{

    for (let i = n.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [n[i], n[j]] = [n[j], n[i]];
    }

    return n;
}