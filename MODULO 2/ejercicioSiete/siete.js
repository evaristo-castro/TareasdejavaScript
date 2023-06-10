function numerosImpares(){
// Pedir al usuario la cantidad de números a ingresar
var cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

// Crear un array para almacenar los números ingresados
var numeros = [];
let contador = 0;

// Leer los números ingresados por el usuario
for (var i = 0; i < cantidadNumeros; i++) {
  var numero = parseInt(prompt("Ingrese el número #" + (i + 1) + ":"));
  numeros.push(numero);
  if(numero % 2 !==0){
    contador ++;
  }
}
 alert(` La cantidad de numeros impares son; ${contador}`);
// Mostrar los números por pantalla
console.log("Los números impares son:");

}
numerosImpares();