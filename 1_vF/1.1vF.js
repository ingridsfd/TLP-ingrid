//Solicitar al usuario 3 números
let a = parseFloat( prompt( "Dame un número" ) );
let b = parseFloat( prompt( "Dame un segundo número" ) );
let c = parseFloat( prompt( "Dame un tercer número" ) );

//Debe analizar los números: cuál es el mayor, cuál el del centro y cuál el menor
//para revisar si los valores ingresados están bien o són válidos
if ( isNaN( a ) || isNaN( b ) || isNaN( c ) ) {
    console.log( "No es válido. Ingresa un número porfavor" );
} else {
    //Mostramos todos los valores que ha ingresado el usuario hasta el momento
    console.log( "Registraste: " + a + ", " + b + ", " + c );
}
//menor
let menor = ( a < b ) ? // a es menor que b?
    ( ( a < c ) ? a : c ) : //a es menor que c? no? entonces es c
    ( ( b < c ) ? b : c ); //b es menor que c? no? entonces es c
//mayor
let mayor = ( a > b ) ? //a es mayor que b? 
    ( ( a > c ) ? a : c ) : //a es mayor que c? no? entonces es c
    ( ( b > c ) ? b : c ); //a es mayor que c? no? entonces es c
//en medio
let medio = ( a != menor && a != mayor ) ? a : ( ( b != menor && b != mayor ) ? b : c );
//Imprimimos resultados de menor a mayor y viceversa
console.log( "Valores ordenados de menor a mayor: " + menor + ", " + medio + ", " + mayor );
console.log("Valores ordenados de mayor a menor: " + mayor + ", " + medio + ", " + menor);