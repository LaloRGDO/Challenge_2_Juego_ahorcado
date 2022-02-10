var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function crearColumna(x,y,largo,alto){
    pincel.fillStyle="Sienna";
    pincel.fillRect(x,y,largo,alto);
}

function dibujarPaisaje(){
    pincel.fillStyle="#009933";//cesped
    pincel.fillRect(0,230,800,130);

    pincel.fillStyle="#00ccff"//cielo
    pincel.fillRect(0,0,800,230);

    pincel.fillStyle="yellow";//sol
    pincel.beginPath();
    pincel.arc(400,115,30,0,Math.PI*2,true);
    pincel.fill();

    pincel.fillStyle="grey";//montaña
    pincel.beginPath();
    pincel.moveTo(0,230);
    pincel.lineTo(200,50);
    pincel.lineTo(400,115);
    pincel.lineTo(600,53);
    pincel.lineTo(800,230)
    pincel.stroke;
    pincel.fill();

    //base
    pincel.fillStyle = "Sienna";
    pincel.beginPath();
    pincel.moveTo(70,360);
    pincel.lineTo(160,360);
    pincel.lineTo(115,320);
    pincel.fill();
}

pincel.fillStyle="#009933";//cesped
pincel.fillRect(0,230,800,130);

pincel.fillStyle="#00ccff"//cielo
pincel.fillRect(0,0,800,230);

pincel.fillStyle="yellow";//sol
pincel.beginPath();
pincel.arc(400,115,30,0,Math.PI*2,true);
pincel.fill();

pincel.fillStyle="grey";//montaña
pincel.beginPath();
pincel.moveTo(0,230);
pincel.lineTo(200,50);
pincel.lineTo(400,115);
pincel.lineTo(600,53);
pincel.lineTo(800,230)
pincel.stroke;
pincel.fill();

//base
pincel.fillStyle = "Sienna";
pincel.beginPath();
pincel.moveTo(70,360);
pincel.lineTo(160,360);
pincel.lineTo(115,320);
pincel.fill();

function dibujarColumna1(){
    crearColumna(110,20,10,340);//Columna 1
}
function dibujarColumna2(){
    crearColumna(110,20,180,10);//Columna 2
}
function dibujarColumna3(){
    crearColumna(280,20,10,45);//Columna 3
}
function dibujarCabeza4(){
    pincel.fillStyle = "lightsalmon";//cabeza 4
    pincel.beginPath();
    pincel.arc(285,95,30,0,Math.PI*2,true);
    pincel.fill();
}
function dibujarCaraFeliz(){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.arc(285,95,20,0,Math.PI,false);
    pincel.moveTo(275,85);
    pincel.arc(270,85,5,0,Math.PI*2,true);
    pincel.moveTo(305,85);
    pincel.arc(300,85,5,0,Math.PI*2,true);
    pincel.stroke();
}
function dibujarCaraMuerto(){
    pincel.beginPath();
    pincel.moveTo(272,83);
    pincel.lineTo(280,91);
    pincel.moveTo(280,83);
    pincel.lineTo(272,91);
    pincel.moveTo(290,83);
    pincel.lineTo(298,91);
    pincel.moveTo(298,83);
    pincel.lineTo(290,91);
    pincel.moveTo(272,110);
    pincel.lineTo(298,110);
    pincel.strokeStyle = "black";
    pincel.lineWidth = 2;
    pincel.stroke();
}
function dibujartorso5(){
    pincel.strokeStyle = "lightsalmon";//torso
    pincel.beginPath();
    pincel.moveTo(285,125);
    pincel.lineTo(285,230);
    pincel.lineWidth = 8;
    pincel.stroke();
}
function dibujarPierna6(){
    pincel.strokeStyle = "lightsalmon";//Pierna 6
    pincel.beginPath();
    pincel.moveTo(285,220);
    pincel.lineTo(260,280);
    pincel.lineWidth = 8;
    pincel.stroke();
}
function dibujarPierna7(){
    pincel.strokeStyle = "lightsalmon";//Pierna 7
    pincel.beginPath();
    pincel.moveTo(285,220);
    pincel.lineTo(315,280);
    pincel.lineWidth = 8;
    pincel.stroke();
}
function dibujarBrazo8(){
    pincel.strokeStyle = "lightsalmon";//Brazo 8
    pincel.beginPath();
    pincel.moveTo(285,150);
    pincel.lineTo(230,120);
    pincel.lineWidth = 8;
    pincel.stroke();
}
function dibujarBrazo9(){
    pincel.strokeStyle = "lightsalmon";//Brazo 9
    pincel.beginPath();
    pincel.moveTo(285,150);
    pincel.lineTo(340,120);
    pincel.lineWidth = 8;
    pincel.stroke();
    dibujarCabeza4();
    dibujarCaraMuerto();
}

function dibujarLinea(x1,y1,x2,y2,color){
    pincel.strokeStyle = color;
    pincel.beginPath();
    pincel.moveTo(x1,y1);
    pincel.lineTo(x2,y2);
    pincel.lineWidth = 2;
    pincel.stroke();
}

function escribirTexto(texto, color, x, y){
    pincel.font="25px American Captain";
    pincel.fillStyle = color;
    pincel.fillText(texto,x,y);
}

function escribirMensaje(texto, color, x, y){
    pincel.font="20px American Captain";
    pincel.fillStyle = color;
    pincel.fillText(texto,x,y);
}

function limpiarLineas(){
    pincel.fillStyle="#009933";//cesped
    pincel.fillRect(220,280,800,200);
    pincel.fillStyle="#009933";
    pincel.fillRect(340,230,800,200);
}

