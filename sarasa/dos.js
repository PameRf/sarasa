/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

function mostrar() {
  
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;

  let flagMejorProm=1;
  let nombreMejorProm;
  let mejorNotaProm;

  let flagMasJoven=1;
  let edadMasJoven;
  let nombreMasJoven;
  
  let contadorFisica=0;
  let contadorQuimica=0;
  let contadorSistemas=0;

  let porcentajeFisica=0;
  let porcentajeQuimica=0;
  let porcentajeSistemas=0;

  let flagMayorCursada=1;
  let nombreMayorCursada;
  let edadMayorCursada;
  let cantidadMayorMaterias;



  for(let i= 0; i <500 ; i++){

  nombre=prompt("Ingrese nombre").toLowerCase();
  

  carrera=prompt("Ingrese carrera: Quimica; Fisica;Sistemas").toLowerCase();

  while(carrera != "quimica" && carrera!= "fisica" && carrera != "sistemas"){
    carrera=prompt("Ingrese carrera: Quimica; Fisica;Sistemas").toLowerCase();

  }
  sexo=prompt("Ingrese sexo: masculino - femenino -no binario").toLowerCase();

  while(sexo!="masculino" && sexo != "femenino" &&  sexo != "no binario"){

    sexo=prompt("Error! Reingrese sexo: masculino - femenino -no binario").toLowerCase();

  }
  cantidadMaterias= parseInt(prompt("Ingrese cantidad de materias entre 1 y 5"));

  while(cantidadMaterias <1 || cantidadMaterias >5){
    cantidadMaterias= parseInt(prompt("Error!Ingrese cantidad de materias entre 1 y 5"));

  }
  notaPromedio=parseInt(prompt("Ingrese nota promedio entre 0 y 10"));

  while(notaPromedio < 0 || notaPromedio >10){

    notaPromedio=parseInt(prompt("Error!:Ingrese nota promedio entre 0 y 10"));

  }

  edad= parseInt(prompt("Ingrese edad"));
  while(edad <=0){
    edad= parseInt(prompt("Error! Reingrese edad"));
  }

  if(carrera=="fisica"){
    if(flagMejorProm==1|| notaPromedio > mejorNotaProm){
      mejorNotaProm=notaPromedio;
      nombreMejorProm=nombre;
      flagMejorProm=0;
    }
   
  }

  if(sexo== "femenino"){
    if(flagMasJoven==1 || edad< edadMasJoven){
      edadMasJoven=edad;
      nombreMasJoven=nombre;
      flagMasJoven=0;
      
    }
    
  }

  if(carrera != "quimica"){
    if(flagMayorCursada==1 || cantidadMaterias > cantidadMayorMaterias){
      cantidadMayorMaterias=cantidadMaterias;
      nombreMayorCursada=nombre;
      edadMayorCursada=edad;
      flagMayorCursada=0;
    }

  }

  if(carrera=="quimica"){
    contadorQuimica++;
    console.log("quimica"+contadorQuimica);
  }
  else if(carrera== "sistemas"){
    contadorSistemas++;
    console.log("sistemas"+contadorSistemas);
  }
  else{
    contadorFisica++;
    console.log("fisica"+contadorFisica);

  }
 

}

 
  if(carrera== "fisica"){
    porcentajeFisica= contadorFisica*100/500;

  }
  else if(carrera== "quimica"){
    porcentajeQuimica= contadorQuimica* 100/500;
  }
  else{
    porcentajeSistemas= contadorSistemas*100/500;
  }

  alert("a-  El nombre del mejor promedio de los alumnos que estudian Fisica es "+nombreMejorProm+" tiene un promedio de "+ mejorNotaProm);

  alert("b-El nombre de la alumna mas joven es "+ nombreMasJoven+ " y tiene " + edadMasJoven+ " años");
 

  alert("c- El porcentaje de alumnos de quimica es del "+ porcentajeQuimica+ "%"+ " el procetaje de fisica es del "+porcentajeFisica+"% y el porcentaje de sistemas es del "+ porcentajeSistemas+ "%");

  alert("d-El  estudiante que cursa mas materias es "+ nombreMayorCursada+ "tiene la edad de "+ edadMayorCursada+ " y cursa "+ cantidadMayorMaterias+ " materias");

   

}
