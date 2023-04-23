

alert("Primer Mensaje de Prueba JavaScript");

console.log("Segundo Mensaje de Prueba JavaScript");

document.write("Tercer Mensaje de Prueba JavaScript");


//Comentario de una linea

/*Comentario 
Multilinea*/

//-------------------------------------------------------------------------------------------------------------

// Concatenamos Una cadena de texto con una variable de tipo Numero:

/*

var entero = 8;

console.log("El valor del numero entero es: " + entero); 

*/

//-------------------------------------------------------------------------------------------------------------

// Concatenamos Una cadena de texto con una variable de tipo Numeros:

/*

var flotatate = 5.9;

console.log("El valor del numero Flotante es: " + flotatate);

*/

//-------------------------------------------------------------------------------------------------------------

// Concatenamos una Cadena de texto con una variable tipo String:

/*

var caracteres = "Esta es una cadena de caracteres";

console.log("El valor del tipo String es: " + caracteres); 

*/

//-------------------------------------------------------------------------------------------------------------

//Concatenamos una Cadena de texto y dos variables tipo String con un valor numerico en su interior:

/*

var num_String1 = "10";
var num_String2 = "20";

console.log("Concatenamos: " + num_String1 + " + " + num_String2); 

*/

//-------------------------------------------------------------------------------------------------------------

//Control de flujo con condicionales

/*

var semaforo = "rosita";

if (semaforo === "verde") {
    alert("El Semaforo esta en Verde");
}
else if(semaforo === "rojo"){
    alert("El Semaforo esta en Rojo");
}
else if(semaforo === "amarillo"){
    alert("El Semaforo esta en Amarillo");
}
else{
    alert("El Semaforo esta Apagado");
} 

*/

//-------------------------------------------------------------------------------------------------------------

// ejemplo control de flujo

/*

var edad = Number(prompt("Ingrese su edad: "));

if (edad >= 18) {
    alert("Tu Eres Mayor de edad con: " + edad);
} else {
    alert("Tu Eres Menor de edad con: " + edad);
}

*/

//-------------------------------------------------------------------------------------------------------------

// ejemplo Ciclo While

/*

var num = 0;

while(num <= 100)
{
    console.log(num);
    num=num + 2;
}

*/

//-------------------------------------------------------------------------------------------------------------

// ejemplo Ciclo Do While

/*

var pago = 0;
var totalDePagos = 0;

do {
    pago = Number(prompt("De Cuanto sera tu pago: "));
    alert("Tu pago fue de: " + pago);
    totalDePagos = totalDePagos + pago;
} while (pago != 0);

alert("El total de tus pagos fue: " + totalDePagos);

*/

//-------------------------------------------------------------------------------------------------------------

// ejemplo Ciclo For

/*

for (var num = 0; num <= 100; num = num + 2) {
    console.log(num);
}

*/