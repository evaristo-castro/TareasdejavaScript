
function nnotas(){
// Pedir al usuario la cantidad de números a ingresar
let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de notas:"));

// Crear un array para almacenar los números ingresados
let notas = [];

// Leer los números ingresados por el usuario
for (var i = 0; i < cantidadNumeros; i++) {
  var nota = parseInt(prompt("Ingrese la nota #" + (i + 1) + ":"));
  notas.push(nota);
}

// Mostrar los números por pantalla
console.log("Las notas  ingresadas son:");
for (var i = 0; i < notas.length; i++) {
  console.log(notas[i]);
  
  
}
alert(notas);
console.log(notas);
}
nnotas();