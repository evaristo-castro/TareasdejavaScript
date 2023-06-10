// Crear la clase y objeto
function Persona(nombre, apellido){
	this.name = nombre;
	this.lastname = apellido;
}

// crear metodo saludar que pertenece a persona
Persona.prototype.saludar = function() {
	console.log(`Mi nombre y apellido es ${this.name} ${this.lastname}`)
};
//crear variable y asignar metodo y  y enviar parametros
const person1 = new Persona('Natalia', 'Beltran');
const person2 = new Persona('Jose', 'Monroy');

//console.log(person1.lastname, person2.name);

function Estudiante(nombre, apellido, curso){
	Persona.call(this, nombre, apellido);
	this.curso = curso;
}

Estudiante.prototype = Object.create(Persona.prototype);
// Volviendo  o restaurar la clase estudiante
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.bienvenido = function() {
	console.log(`Hola bienvenido ${this.name} ${this.lastname} ${this.curso}`)
};

const estu1 = new Estudiante('Evaristo','castro','desarrollo web');
// llamar a la variable y al metodo
estu1.bienvenido();
person1.saludar();