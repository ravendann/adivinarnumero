let contador;
let numeroSecreto;
let arregloNumerosSecretos = [];
let numeroMaximo = 10;

document.querySelector("body").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        if(document.getElementById("inputNumeroUsuario").disabled == false){
            verificarIntento();
        } else{
            reiniciarJuego();
        }
        
    }
})

reiniciarJuego();

function reiniciarJuego(){
    contador = 1;
    
    numeroSecreto = generarNumeroSecreto();
  
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p","Indica un numero entre 1 y " + numeroMaximo);

    document.getElementById("inputNumeroUsuario").disabled = false;
    document.getElementById("reiniciar").disabled = true;
    document.getElementById("intentar").disabled = false;
    document.getElementById("inputNumeroUsuario").focus();
}

function generarNumeroSecreto() {
    let numero = Math.floor((Math.random() * numeroMaximo) + 1);
    
    if(arregloNumerosSecretos.length == numeroMaximo){
        location.reload();
    }else{
        if(arregloNumerosSecretos.includes(numero) == false){
            arregloNumerosSecretos.push(numero);
            console.log(arregloNumerosSecretos);
            return numero;
        } else{
            return generarNumeroSecreto();
        }
    }
    
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("inputNumeroUsuario").value);
    if(numeroUsuario == numeroSecreto){
        asignarTextoElemento("p", "Acertaste en " + contador + " " + (contador > 1 ? "intentos" : "intento"));
        document.getElementById("inputNumeroUsuario").disabled = true;
        document.getElementById("reiniciar").disabled = false;
        document.getElementById("intentar").disabled = true;
    } else if(numeroSecreto > numeroUsuario){
        asignarTextoElemento("p", "Es mayor: intento " + contador );
        document.getElementById("inputNumeroUsuario").focus();
    } else {
        asignarTextoElemento("p", "Es menor: intento " + contador );
        document.getElementById("inputNumeroUsuario").focus();
    }
    document.getElementById("inputNumeroUsuario").value = "";
    
    contador++;
    return;
}