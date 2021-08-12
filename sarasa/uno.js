/*Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota
 mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/

function mostrar() {
  
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;

  let promedioRep=0;
  let acumEdadRep=0;
  let contadorRep=0;

  let flagMasJoven=1;
  let edadMasJoven;
  let tipoMasJoven;
  let sexoMasJoven;

  let contadorAve=0;
  let contadorMam=0;
  let procentajeAves=0;

  let mayoTipo="";
  let totalMascotas=0;
  let seguir;

  do{

    nombre=prompt("Ingrese nombre").toLowerCase();

    while(nombre.length <3 || nombre.length >8){
      nombre=prompt("Error! Ingrese nombre").toLowerCase();
    }

    tipo=prompt("Ingrese tipo: mamifero, ave, reptil").toLowerCase();

    while(tipo != "mamifero"&& tipo!="ave" && tipo != "reptil"){
      tipo=prompt("Error! Reingrese tipo: mamifero, ave, reptil").toLowerCase();

    }
    if(tipo == "reptil"){
      sangre= "fria";
      alert("Si es reptil solo se permite sangre fria");
    }

    else{
    sangre=prompt("Ingrese sangres: fria / calida").toLowerCase();
  

    while( sangre !=" fria"&& sangre != "calida"){
    sangre=prompt("Ingrese sangres: fria / calida").toLowerCase
    }
  }
    edad=parseInt(prompt("Ingrese edad"));

    while(edad <=0){
    edad=parseInt(prompt("Error!Ingrese edad"));

    }

    sexo= prompt("Ingrese sexo: “m” de macho o “h” de hembra").toLowerCase();
    while(sexo != "m" && sexo != "h"){
    sexo= prompt("Ingrese sexo: “m” de macho o “h” de hembra").toLowerCase();
    }

    
    seguir=prompt("Desea seguir ingresando datos: s/n").toLowerCase();

		while(seguir != "s" && seguir!= "n"){
			seguir=prompt("Desea seguir ingresando datos: s/n").toLowerCase();
		}

    if(flagMasJoven ==1|| edad < edadMasJoven){
      edadMasJoven=edad;
      tipoMasJoven = tipo;
      sexoMasJoven= sexo;
      flagMasJoven=0;
    }

    if(tipo== "reptil"){
      acumEdadRep= acumEdadRep+ edad;
      contadorRep++;
    }
    else if (tipo =="ave"){
      contadorAve++;
    }
    else{
      contadorMam++;
    }

    totalMascotas++;

	}while(seguir == "s")


  if(contadorAve > contadorMam && contadorAve > contadorRep){
    mayoTipo= "Aves";
  }
  else if(contadorMam >=contadorAve && contadorMam > contadorRep){
    mayoTipo="Mamiferos";
  }
  else{
    mayoTipo="Reptiles";
  }

  if(contadorRep >0){

    promedioRep = acumEdadRep / contadorRep;
    alert("a- El promedio de edad de los reptiles es de "+promedioRep);
  }
  else{
    alert("a-No se ingresaron reptiles");
  }

  alert("b- La mascota mas joven es de tipo "+tipoMasJoven+ " tiene "+edadMasJoven+ " años y su sexo es "+sexoMasJoven);
  
  if(contadorAve>0){
    procentajeAves= contadorAve*100/ totalMascotas;
    alert("c-El porcentaje de aves sobre el total de mascotas es del"+ procentajeAves+"%");
  }

  alert("d-El tipo de mascotas que hay mayor catidad es de: "+ mayoTipo);

}
