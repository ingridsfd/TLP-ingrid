//Solicitar al usuario la temperatura en grados Celcius por prompt o por input
let celcius = parseFloat( prompt( "Introduce un número cualquiera para que sean tus grados Celcius:" ) );


//De ser capaz de identificar si los datos de entrada son tipo number sino volver a solicitar los datos
if ( isNaN( celcius ) ) {
    console.log("No es válido. Ingresa un número válido.")
} else {
    console.log( "Registraste " + celcius + " grados Celcius." );
}

//Debe convertir la temp ingresada de grados Celcius a F y K
//Obtener operación Fahrenheit
let fahrenheit = ( celcius * 9 / 5 ) + 32;
//Obtener operación Kelvin
let kelvin = celcius + 273.15;
//Imprimir por consola
console.log( "Este es el resultado en grados Fahrenheit: " + fahrenheit );
console.log( "Este es el resultado en grados Kelvin: " + kelvin );