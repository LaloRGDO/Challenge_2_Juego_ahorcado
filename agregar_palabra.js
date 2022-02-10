var palabras = ["MANZANA", "ORACLE", "ALURA", "AHORCADO","PROGRAMACION","AUTOBUS","ECUACIONES"];
var palabraNueva = document.querySelector("#ingresar-palabra");
var botonAgregar = document.querySelector("#agregar-palabra");

botonAgregar.addEventListener("click", function(event){
    event.preventDefault();
    console.log(palabras);
    palabras = localStorage.getItem("palabras");
    palabras = JSON.parse(palabras);
    console.log(palabras);
    palabras.push(palabraNueva.value.toUpperCase());
    localStorage.setItem("palabras",JSON.stringify(palabras));
    palabras = localStorage.getItem("palabras");
    palabras = JSON.parse(palabras);
    console.log(palabras);
    palabraNueva.value = "";
});







