var palabras = ["MANZANA", "ORACLE", "ALURA", "AHORCADO","PROGRAMACION","AUTOBUS","ECUACIONES"];
var palabraNueva = document.querySelector("#ingresar-palabra");
var botonAgregar = document.querySelector("#agregar-palabra");

/*
botonAgregar.addEventListener("click", function(event){
    event.preventDefault();
    palabras.push(palabraNueva.value.toUpperCase());
    palabras = localStorage.getItem("palabras");
    console.log(palabras);
    palabraNueva.value = "";
});

localStorage.setItem("palabras", JSON.stringify(palabras));
var palabrasNuevas = JSON.parse(localStorage.getItem("palabras"));
console.log(palabrasNuevas);
*/
/*
console.log(palabras);
localStorage.setItem("palabras",JSON.stringify(palabras));
palabras = localStorage.getItem("palabras");
palabras = JSON.parse(palabras);
palabras.push("aguila");
localStorage.setItem("palabras", JSON.stringify(palabras));
palabras = localStorage.getItem("palabras");
palabras = JSON.parse(palabras);
palabras.push("cocodrilo");
console.log(palabras);
*/

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







