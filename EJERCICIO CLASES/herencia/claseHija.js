

class Profesor extends Persona {

    constructor(nam, ape, correo, edad, horas, costoHora){

       super(nam, ape,correo,edad);
       this.horas = horas;
       this.costoHor =costoHora;
}
    getCalculoSueldo(){
        return this.horas * this.costoHor ;
    }


}
