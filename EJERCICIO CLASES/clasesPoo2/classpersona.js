 class Personaa {

constructor(nombres, apellido, correo, edad){

     this.name = nombres;
     this.apellid = apellido;
     this.email = correo;
     this.eda =edad;
  }
  getDatos(){
     const datos = `Nombres: ${this.name} Apellidos: ${this.apellid} E-mail: ${this.email} Edad: ${this.eda}`;
     return datos;
   
  }

getClasificar(){
   if((this.eda > 17) && (this.eda< 50)){
     return "Es adulto";
   }else {
        if (this.eda<=17) return "Es menor de edad";
        else return "Adulto mayor";
   }

}


}