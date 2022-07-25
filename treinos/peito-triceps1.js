var res1 = document.getElementById('res1')
var res2 = document.getElementById('res2')
var res3 = document.getElementById('res3')
var res4 = document.getElementById('res4')


    var ex1 = ['peito 45', 'peito desenvolvimento', 'maquina peito superior']
    var ex2 = ['peito 45', 'peito desenvolvimento', 'maquina peito superior', 'crossover parte superior']
    var ex3 = ['supino reto', 'voador', 'voador no banco']
    var ex4 = ['peito 45', 'peito desenvolvimento', 'maquina peito superior', 'crossover parte superior']

function gerar()
{
    res1.innerHTML = ''
    var numero_aleatorio = aleatorio()

    res1.innerHTML += `${ex1[numero_aleatorio]}`
//--   
    res2.innerHTML = ''
    var numero_aleatorio = aleatorio()
    
    res2.innerHTML += `${ex2[numero_aleatorio]}`

    if (ex2[numero_aleatorio] == ex1[numero_aleatorio])
    {
        res2.innerHTML = ex2[numero_aleatorio - 1]

        if (ex2[numero_aleatorio - 1] == undefined)
        {
            res2.innerHTML = ex2[numero_aleatorio + 1]
            ex2[numero_aleatorio + 1].slice()
        }
    }
    
//--
    res3.innerHTML = ''
    var numero_aleatorio = aleatorio()

    res3.innerHTML += `${ex3[numero_aleatorio]}`

//--
    res4.innerHTML = ''
    var numero_aleatorio = aleatorio()

    if (ex4[numero_aleatorio] == ex1[numero_aleatorio])
    {
        res4.innerHTML = ex4[numero_aleatorio + 1]
    }

    else if (ex4[numero_aleatorio] == ex2[numero_aleatorio])
    {
        res4.innerHTML = ex4[numero_aleatorio + numero_aleatorio.number + 1]
    }
}


function validacao(n)
{
    
}

function aleatorio ()
{
    let tempo = new Date()
    var segundos = tempo.getTime() % 3

    res5 .innerHTML = `${segundos}`
    return segundos
}