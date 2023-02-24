//Solicitar al usuario 3 números
let v1 = parseFloat( prompt( "Dame un número" ) );
let v2 = parseFloat( prompt( "Dame un segundo número" ) );
let v3 = parseFloat( prompt( "Dame un tercer número" ) );

//Debe analizar los números: cuál es el mayor, cuál el del centro y cuál el menor
//para revisar si los valores ingresados están bien o són válidos
if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
console.log("No es válido. Ingresa un número porfavor");
} else {
    //Mostramos todos los valores que ha ingresado el usuario hasta el momento
console.log("Registraste: " + v1 + ", " + v2 + ", " + v3);
    //con Math.max indicamos cuál es el ascendente
    let maxNum = Math.max( v1, v2, v3 );
    //con Math.min indicamos cuál es el descendente
    let minNum = Math.min( v1, v2, v3 );
    //
    let midNum = ( v1 + v2 + v3 ) - maxNum - minNum;
    //Debe imprimir los números ordenados de mayor a menor
    //usamos concatenación para ordenarlos de manera tanto ascendente como descendente
console.log( "Estos son tus números en orden ascendente: " + maxNum + ", " + midNum + ", " + minNum );
console.log("Estos son tus números en orden descendente: " + minNum + ", " + midNum + ", " + maxNum);
}
