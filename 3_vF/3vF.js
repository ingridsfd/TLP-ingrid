//Solicitar al usuario un número por prompt o por input y guardarlo
let num = parseFloat( prompt( "Introduce un número cualquiera" ) );


//De ser capaz de identificar si los datos de entrada son tipo number sino volver a solicitar los datos
if ( isNaN( num ) ) {
    console.log("No es válido. Ingresa un número válido.")
} else {
    console.log( "Registraste el número: " + num );
}

//Debe calcular el factorial del número recibido
// El factorial es un número multiplicado por una 
//serie de números que le preceden( n * n - 1 * n - 1 * n - 1 )
function factorial(num){
if ( num === 0 ) {
    console.log("El factorial de 0 es 1")
} else {
    let result = 1;
    for ( let i = 1; i <= num; i++) {
        result *= i;
        
    }
    return result;
    }
}


//Imprimir por consola
console.log( "El factorial de " + num + " es " + factorial(num) );