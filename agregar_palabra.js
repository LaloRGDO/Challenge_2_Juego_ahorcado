var palabras = ["MANZANA", "AHORCADO","PROGRAMACION","AUTOBUS","ECUACIONES"];
var palabraNueva = document.querySelector("#ingresar-palabra");
var botonAgregar = document.querySelector("#agregar-palabra");

botonAgregar.addEventListener("click", function(event){
    event.preventDefault();

    if(localStorage.getItem("palabras")==null){
        localStorage.setItem("palabras",JSON.stringify(palabras));
    }
    palabras = localStorage.getItem("palabras");
    palabras = JSON.parse(palabras);

    palabras.push(palabraNueva.value.toUpperCase());
    localStorage.setItem("palabras",JSON.stringify(palabras));
    palabras = localStorage.getItem("palabras");
    palabras = JSON.parse(palabras);

    palabraNueva.value = "";
});







