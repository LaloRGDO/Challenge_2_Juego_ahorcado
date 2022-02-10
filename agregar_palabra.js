var palabras = ["MANZANA", "ORACLE", "ALURA", "AHORCADO","PROGRAMACION","AUTOBUS","ECUACIONES"];
var palabraNueva = document.querySelector("#ingresar-palabra");
var botonAgregar = document.querySelector("#agregar-palabra");

botonAgregar.addEventListener("click", function(event){
    event.preventDefault();
    palabras.push(palabraNueva.value.toUpperCase());
    localStorage.setItem("palabras", palabras);
    console.log(palabras);
    palabraNueva.value = "";
});


