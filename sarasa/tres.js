/*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/

function mostrar() {
    let tipoJuguete;
    let origen;
    let precio;

    let contadorMuñeca=0;
    let contadorRompecabezas=0;
    let contadorpelota=0;

    let contadorImportados=0;
    let acumPrecioImportados=0;
    let promedioImp=0;

    let flagMasBarato=1;
    let rompecMasBarato;
    let precioMasBarato;

    let TotalPrecio=0;
    let masVendido="";
    let iva;
    let seguir;

    do{

      tipoJuguete=prompt("Ingrese tipo: muñeca, rompecabezas, pelota").toLowerCase();

      while(tipoJuguete != "muñeca" && tipoJuguete != "rompecabezas" && tipoJuguete!= "pelota"){
        tipoJuguete=prompt("Error! Ingrese tipo: muñeca, rompecabezas, pelota").toLowerCase();
      }
      origen= prompt("Ingres origen: nacional, importado").toLowerCase();
      while(origen != "nacional" && origen != "importado"){

        origen= prompt("Error!Ingrese origen: nacional, importado").toLowerCase();
      }
      precio=parseInt(prompt("Ingrese precio  entre 1000 y 5000 pesos"));

      while(precio <1000 || precio >5000){
        precio=parseInt(prompt("Error! Ingrese precio  entre 1000 y 5000 pesos"));

      }
      seguir=prompt(" Desea seguir ingresando datos s/n");
      
      while(seguir != "s" && seguir!= "n"){
        seguir=prompt("Desea seguir ingresando datos: s/n").toLowerCase();
      }

      if(tipoJuguete == "muñeca"){
        contadorMuñeca++;
      }
      else if(tipoJuguete=="rompecabezas"){
        contadorRompecabezas++;
      }
      else{
        contadorpelota++;
      }

      if(origen== "nacional"&& tipoJuguete =="rompecabezas"){
        if(flagMasBarato==1|| precio < precioMasBarato){
          precioMasBarato=precio;
          rompecMasBarato=tipoJuguete;
          flagMasBarato=0;
        }
      }

      if(origen=="importado"){
        acumPrecioImportados=acumPrecioImportados+precio;
        contadorImportados++;
      }
      
      TotalPrecio=TotalPrecio+precio;



      
    
    }while(seguir=="s");


    if(contadorMuñeca> contadorRompecabezas && contadorMuñeca > contadorpelota){
      masVendido="Muñeca";

    }
    else if (contadorRompecabezas >= contadorMuñeca && contadorRompecabezas >contadorpelota){
      masVendido= "Rompecabezas";
    }
    else{
      masVendido="Pelota";
    }
    iva= TotalPrecio* 0.21;

    
    if(contadorImportados> 0){
      promedioImp= acumPrecioImportados / contadorImportados;

      alert("b- El promedio de precio de los juguetes importados "+ promedioImp);
    
    }
    alert("a- El juguete mas vendifo es "+ masVendido);
    alert("c-La recaudacion total fue de "+TotalPrecio);
    alert("d- el precio del rompecabezas nacional mas barato"+ precioMasBarato);
    alert("Del total de las vents se percibio de iva $"+ iva);

    




}
