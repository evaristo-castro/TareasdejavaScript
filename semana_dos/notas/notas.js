function notasEstudiante(){
    let contador1 = 0 ;
    let contador2 = 0 ;
    let contador3 = 0 ;
    for(let i = 0; i < 12; i++){
    let nota = parseFloat(prompt("ingrese la nota entre 0 -10"));
    if (nota<6) {
         contador1 ++;
    }else if(nota<11){
         contador2 ++;  
    }else{
        contador3 ++;
    }
    

}

alert(" Reprobados son : " + contador1 + "  y  Aprobados son  " + contador2 + "  Notas Erradas: " + contador3);
}

notasEstudiante();