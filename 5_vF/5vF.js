//Solicitar al usuario que intente adivinar el número secreto por prompt o input, el número será del 1 al 100;
let numInput = parseFloat( prompt( "Introduce un número del 1 al 100" ) );

//Identificar si el dato es tiponumber, en caso contrario, debe mandar mensaje de error y volver a solicitar
if ( isNaN( numInput ) ) {
    console.log("No es válido. Ingresa un número válido.")
} else {
    console.log( "Registraste el número: " + numInput );
}

//Generamos el número aleatorio entre el 1 y 100 para otra variable
let numeroSecreto = Math.floor( Math.random() * 100 ) + 1;

//Si adivina el número, mostrarle "Felicidades, adivinaste el número secreto"
if ( numInput === numeroSecreto ) {
    alert( "¡Felicidades! Has adivinado el número secreto." );
} else { //Si no adivina el número secreto, debe mostrar un mensaje "Ups, el número secreto es incorrecto, vuelve a intentarlo"
    alert( "Ups, el número secreto es incorrecto " + numeroSecreto + ". Vuelve a intentarlo." );
}

console.log( "El número secreto era " + numeroSecreto );
//El num secreto puede ser introducido manualmente o generar un num aleatorio, pero debe ser del 1 al 100