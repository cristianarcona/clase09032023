// puntajes
// labelPtsIa
// labelPtsJugador

// dados
// labelDadoIa
// labelDadoJugador

// RESULTADO
// resultadoGlobal
// labelResult


let mensaje = document.getElementById('mensaje')

let labelPtsIa = document.getElementById('labelPtsIa')
let labelPtsJugador = document.getElementById('labelPtsJugador')
let labelDadoIa = document.getElementById('labelDadoIa')
let labelDadoJugador = document.getElementById('labelDadoJugador')
let labelResult = document.getElementById('labelResult')
let labelDataIa = document.getElementById('labelDataIa')
let labelDataJugador = document.getElementById('labelDataJugador')
let labelGeneralId = document.getElementById('labelGeneralId')
let labelGeneralJugador = document.getElementById('labelGeneralJugador')

let buttonLanzamiento = document.getElementById('buttonLanzamiento')
let buttonVolver = document.getElementById('buttonVolver')

let divColorResult = document.getElementById('divColorResult')

let numTotal = 30
buttonVolver.disabled = true

mensaje.innerText = `Gana el primero en llegar a: ${numTotal}`
function lanzar(){
    let num = obtenerNumRandom()
    labelPtsIa.innerText = `${Number(labelPtsIa.innerText) + Number(num)}`
    labelDadoIa.innerText = `${num}`
    let num2 = obtenerNumRandom()
    labelPtsJugador.innerText = `${Number(labelPtsJugador.innerText) + Number(num2)}`
    labelDadoJugador.innerText = `${num2}`

    if(labelDataIa.innerText === "0" && labelDataJugador.innerText === "0" ){
        labelDataIa.innerText = `${num}`
        labelDataJugador.innerText = `${num2}`
    }
    else{
        labelDataIa.innerText = `${labelDataIa.innerText} + ${num}`
        labelDataJugador.innerText = `${labelDataJugador.innerText} + ${num2}`
    }
    finJuego()
}

function obtenerNumRandom(){
    return (Math.floor((Math.random() * (7 - 1) + 1)))
}

function finJuego(){
    if(Number(labelPtsIa.innerText) >= numTotal && Number(labelPtsJugador.innerText) >= numTotal){
        buttonLanzamiento.disabled = true
        buttonVolver.disabled = false
        labelResult.innerText = 'Empate'
        resultadoGlobal.style.display = 'block';
        // buttonVolver.style.display = 'block';
        divColorResult.className = 'alert alert-warning'
    } else if (Number(labelPtsIa.innerText) >= numTotal || Number(labelPtsJugador.innerText) >= numTotal){
        buttonLanzamiento.disabled = true
        buttonVolver.disabled = false
        if(Number(labelPtsIa.innerText) >= numTotal){
            labelResult.innerText = 'IA'
            labelGeneralId.innerText = Number(labelGeneralId.innerText) + 1
        }else{
            labelResult.innerText = 'Jugador 1'
            labelGeneralJugador.innerText = Number(labelGeneralJugador.innerText) + 1
        }
        divColorResult.className = 'alert alert-success'
        resultadoGlobal.style.display = 'block';
        // buttonVolver.style.display = 'block';
    }
}

function volver(){
    limpiar()
}

function reset(){
    limpiar();
    labelGeneralId.innerText = '0'
    labelGeneralJugador.innerText = '0'

}

function limpiar(){
    labelPtsIa.innerText = '0'
    labelDadoIa.innerText = '0'
    labelPtsJugador.innerText = '0'
    labelDadoJugador.innerText = '0'
    labelDataJugador.innerText = '0'
    labelDataIa.innerText = '0'
    buttonLanzamiento.disabled = false
    buttonVolver.disabled = true
    resultadoGlobal.style.display = 'none';
}