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

var activarluces1 = document.querySelectorAll('.luces1');
var activarluces2 = document.querySelectorAll('.luces2');
let contadorDeLuz=0;
let condicioncolor;

let num;
let num2;

var ruleta1;
var ruleta2;

let numTotal = 20
buttonVolver.disabled = false

mensaje.innerText = `Gana el primero en llegar a: ${numTotal}`
function iniciarruleta1(){
    ruleta1=setInterval(mostrarLuz1,800);
}
function iniciarruleta2(){
    ruleta2=setInterval(mostrarLuz2,800);
}
function lanzar1(){
    //ruleta2=setInterval(mostrarLuz2,180);
    if(Number(labelPtsIa.innerText) >= numTotal){
        finJuego1();
    }else{
        switch(contadorDeLuz+1){
            case 1:
                num = obtenerNumRandom()
                
                labelPtsIa.innerText = `${Number(labelPtsIa.innerText) + Number(num)}`
                labelDadoIa.innerText = `${num}`            
        
                if(labelDataIa.innerText === "0"){
                    labelDataIa.innerText = `${num}`
                    
                }
                else{
                    labelDataIa.innerText = `${labelDataIa.innerText} + ${num}`
                    //console.log(contadorDeLuz);
                }
            break;
            case 2:
                num = obtenerNumRandom()
                if(Number(labelPtsIa.innerText) != 0){
                    labelPtsIa.innerText = `${Number(labelPtsIa.innerText) - Number(num)}`
                    labelDadoIa.innerText = `${num}`                                
                }
                if(labelDataIa.innerText === "0"){
                    labelDataIa.innerText = `${num}`
                }
                else{
                    labelDataIa.innerText = `${labelDataIa.innerText} - ${num}`
                    //console.log(contadorDeLuz);
                }
            break;
        }
    } 

    // finJuego()
}

function lanzar2(){
    if(Number(labelPtsJugador.innerText) >= numTotal){
        finJuego2();
    }else{
        switch(contadorDeLuz+1){
            case 1:
                num = obtenerNumRandom()
                
                labelPtsJugador.innerText = `${Number(labelPtsJugador.innerText) + Number(num)}`
                labelDadoJugador.innerText = `${num}`            
        
                if(labelDataJugador.innerText === "0"){
                    labelDataJugador.innerText = `${num}`
                    
                }
                else{
                    labelDataJugador.innerText = `${labelDataJugador.innerText} + ${num}`
                    //console.log(contadorDeLuz);
                }
            break;
            case 2:
                num = obtenerNumRandom()
                if(Number(labelPtsJugador.innerText) != 0){
                    labelPtsJugador.innerText = `${Number(labelPtsJugador.innerText) - Number(num)}`
                    labelDadoJugador.innerText = `${num}`                                
                }
                if(labelDataJugador.innerText === "0"){
                    labelDataJugador.innerText = `${num}`
                }
                else{
                    labelDataJugador.innerText = `${labelDataJugador.innerText} - ${num}`
                    //console.log(contadorDeLuz);
                }
            break;
        }
    
    }
    // finJuego()
}

function obtenerNumRandom(){
    return (Math.floor((Math.random() * (7 - 1) + 1)))
}

function mostrarLuz1 (){
    activarluces1[contadorDeLuz].className = 'luces1';
    contadorDeLuz++;

    if(contadorDeLuz > 1) contadorDeLuz = 0;
    // contadorDeLuz = Math.floor((Math.random() * (1 - 0) + 0));
    const luzActual1 = activarluces1[contadorDeLuz];
    luzActual1.classList.add(luzActual1.getAttribute('color1'))
}
function mostrarLuz2 (){
    activarluces2[contadorDeLuz].className = 'luces2';
    contadorDeLuz++;

     if(contadorDeLuz > 1) contadorDeLuz = 0;

     const luzActual2 = activarluces2[contadorDeLuz];
     luzActual2.classList.add(luzActual2.getAttribute('color2'))
 }

function finJuego1(){
    lanzar1();
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
            labelResult.innerText = 'Jugador 1'
            labelGeneralId.innerText = Number(labelGeneralId.innerText) + 1
        }else{
            labelResult.innerText = 'Jugador 2'
            labelGeneralJugador.innerText = Number(labelGeneralJugador.innerText) + 1
        }
        divColorResult.className = 'alert alert-success'
        resultadoGlobal.style.display = 'block';
        // buttonVolver.style.display = 'block';
        
    }
    clearInterval(ruleta1);
}
function finJuego2(){
    lanzar2();
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
            labelResult.innerText = 'Jugador 1'
            labelGeneralId.innerText = Number(labelGeneralId.innerText) + 1
        }else{
            labelResult.innerText = 'Jugador 2'
            labelGeneralJugador.innerText = Number(labelGeneralJugador.innerText) + 1
        }
        divColorResult.className = 'alert alert-success'
        resultadoGlobal.style.display = 'block';
        // buttonVolver.style.display = 'block';
        
    }
    clearInterval(ruleta2);
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
    buttonVolver.disabled = false
    resultadoGlobal.style.display = 'none';
    clearInterval(ruleta1);
    clearInterval(ruleta2);
}
