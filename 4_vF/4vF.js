//Solicitar al usuario un número por prompt o por input y guardarlo
let num = parseFloat( prompt( "Introduce un número cualquiera" ) );


//Debe ser capaz de identificar si los datos de entrada son tipo number sino volver a solicitar los datos
if ( isNaN( num ) ) {
    console.log("No es válido. Ingresa un número válido.")
} else {
    console.log( "Registraste el número: " + num );
}

//Debe imprimir la serie de fibonacci dependiendo del número recibido
//Si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci
//La serie de fibonacci es como n1, n2, n3
//n2+n3 = n4 // n3+n4 = n5 y así para cada número
function fibonacci(num) {
    //definir las variables para el array que mostrará la serie del fibonacci
    let a = 0;
    let b = 1;
    //crear un array
    let fibo = [a, b];
    //crear la iteración
    for (let i = 2; i < num; i++) {
        //crear la variable que antecede a la secuencia
        let c = a + b;
        a = b; //esta es la duplicación del número que antecede
        b = c;
        fibo.push( c );
    }
    return fibo;
}

//Imprimir resultado
console.log( "El resultado de Fibonacci de " + num + " es " + fibonacci(num) );