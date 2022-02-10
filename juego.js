var botonIniciarJuego=document.querySelector("#iniciar-juego");
var letras = [];
var letra = "";
var espacioIncorrecto = 350;
var letrasCorrectasTecleadas = [""];
var letrasIncorrectasTecleadas = [""];
var aciertos = 0;
var oportunidad = 0;
var finJuego = false;
var palabra = "";
var div = document.querySelector("#volverAJugar");
var cantidadDeJuegos = 0;

function sortearPalabra(){
    //Elegir palabra al azar
    letras = [];
    var posicion = Math.round(Math.random()*(palabras.length-1));
    palabra = palabras[posicion];
    for(let letra of palabra){
        letras.push(letra)
    }
    //console.log(letras);
    //console.log(letras.length);
}

function dibujarLineas(){
    var inicioJuego = false;
    var x1=290;
    var y=330;
    var x2=310;
    for(var i=1; i<=letras.length;i++){
        dibujarLinea(x1,y,x2,y,"black");
        x1+=30;//310+10 = 320
        x2+=30;//10+(20)+310=340
        inicioJuego = true;
    }
}

function teclearLetra(){
    document.onkeydown = function(event){
        //Capturar evento de tecla
        var abecedario = ["À","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var letraAceptada = true;
        var letraCorrectaRepetida = true;
        if(event == null){
            letra=window.event.keyCode;
        }else{
            for(var i=0;i<abecedario.length;i++){
                if(String.fromCharCode(event.keyCode)==abecedario[i]){
                    letraAceptada = true;
                    break;
                }else{
                    letraAceptada = false;
                }
            }
            for(var x=0;x<letrasCorrectasTecleadas.length;x++){
                if(String.fromCharCode(event.keyCode)==letrasCorrectasTecleadas[x]){
                    letraCorrectaRepetida = false;
                    break;
                }else{
                    letraCorrectaRepetida = true;
                }
            }
            if(letraAceptada && letraCorrectaRepetida && finJuego==false){
                letra=String.fromCharCode(event.keyCode);
                if(letra=="À"){
                    letra="Ñ";
                }
                //console.log(letra);
                acomodarLetras();
            }
        }
    }
}

function acomodarLetras(){
    var espacioCorrecto = 290;
    var letraCorrecta = true;
    for(var i=0;i<letras.length;i++){

        if(letra == letras[i]){
            escribirTexto(letra,"black",espacioCorrecto,325);
            letrasCorrectasTecleadas.push(letra);
            aciertos+=1;
            //console.log(letrasCorrectasTecleadas);
        }else{
            for(var x=0;x<letras.length;x++){
                if(letra == letras[x]){
                    letraCorrecta = true;
                    break;
                }else{
                    letraCorrecta = false;
                }
            }
        }
        espacioCorrecto+=30;
    }
    if(letraCorrecta==false){
        var letraIncorrectaRepetida = false;
        for(var i=0;i<letrasIncorrectasTecleadas.length;i++){
            if(letra==letrasIncorrectasTecleadas[i]){
                letraIncorrectaRepetida = true;
                break;
            }else{
                letraIncorrectaRepetida = false;
            }
        }
        if(letraIncorrectaRepetida == false){
            console.log("Tecla incorrecta dd");
            escribirTexto(letra,"black",espacioIncorrecto,280);
            espacioIncorrecto+=23;
            oportunidad+=1;
            letrasIncorrectasTecleadas.push(letra);
        }
    }
    contarOportunidades();
}

function contarOportunidades(){
    if(aciertos == letras.length){
        escribirMensaje("FELICIDADES, GANASTE!", "green", 410,170);
        finJuego = true;
        if(cantidadDeJuegos==0){
            var boton = document.createElement("button");
            boton.textContent = "Volver a jugar!"
            boton.classList.add("botonJugarDenuevo");
            boton.setAttribute("id","botonJugarDenuevo");
            div.appendChild(boton);
            location.href='#botonJugarDenuevo';
            var nuevoBoton = document.querySelector("#botonJugarDenuevo");
            nuevoBoton.addEventListener("click",function(event){
                event.preventDefault();
                iniciarJuego();
                location.href='#canvas';
            });
        }
        cantidadDeJuegos+=1;
        palabraNueva.disabled=false;
    }
    switch(oportunidad){
        case 1: dibujarColumna1(); break;
        case 2: dibujarColumna2(); break;
        case 3: dibujarColumna3(); break;
        case 4: dibujarCabeza4();
                dibujarCaraFeliz(); break;
        case 5: dibujartorso5(); break;
        case 6: dibujarPierna6(); break;
        case 7: dibujarPierna7(); break;
        case 8: dibujarBrazo8(); break;
        case 9: dibujarBrazo9();
                escribirMensaje("PERDISTE :(","red", 410,170);
                escribirMensaje("La palabra correcta era: "+ palabra, "black", 380, 210);
                finJuego = true;
                if(cantidadDeJuegos==0){
                    var boton = document.createElement("button");
                    boton.textContent = "Volver a jugar!"
                    boton.classList.add("botonJugarDenuevo");
                    boton.setAttribute("id","botonJugarDenuevo");
                    div.appendChild(boton);
                    location.href='#botonJugarDenuevo';
                    var nuevoBoton = document.querySelector("#botonJugarDenuevo");
                    nuevoBoton.addEventListener("click",function(event){
                        event.preventDefault();
                        iniciarJuego();
                        location.href='#canvas';
                    });
                }
                cantidadDeJuegos+=1;
                palabraNueva.disabled=false;
                break;
    }
}

function iniciarJuego(){
    finJuego = false;
    oportunidad = 0;
    aciertos = 0;
    espacioIncorrecto = 350;
    letrasCorrectasTecleadas = [""];
    letrasIncorrectasTecleadas = [""];
    palabraNueva.disabled=true;
    dibujarPaisaje();
    sortearPalabra();
    dibujarLineas();
    teclearLetra();
}

botonIniciarJuego.addEventListener("click", function(event){
    event.preventDefault();
    iniciarJuego();
});