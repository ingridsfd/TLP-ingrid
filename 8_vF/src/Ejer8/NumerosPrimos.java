package Ejer8;

import java.util.Scanner;

public class NumerosPrimos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Crea un programa con Java que realice lo siguiente:
		//Debe solicitar al usuario 10 números por consola y almacenarlos en un array
		Scanner scanner = new Scanner(System.in);
        int[] numeros = new int[10];
        int[] numerosPrimos = new int[10];
        int indicePrimos = 0;

        System.out.println("Ingrese 10 números:");

        for (int i = 0; i < 10; i++) {
            System.out.print("Número " + (i+1) + ": ");
            numeros[i] = scanner.nextInt();
        }

        System.out.println("Los números ingresados son:");
        for (int i = 0; i < 10; i++) {
            System.out.print(numeros[i] + " ");
        }
        //termina solicitar numeros
        //Debe pasar los números que sean primos a las primeras posiciones, desplazando los demás números al final, 
        // de tal forma que no se pierda ningún número
        
        // Mover los números primos al principio del array
        for (int i = 0; i < 10; i++) {
            if (esPrimo(numeros[i])) {
                numerosPrimos[indicePrimos++] = numeros[i];
            }
        }

        for (int i = 0; i < 10; i++) {
            if (!esPrimo(numeros[i])) {
                numerosPrimos[indicePrimos++] = numeros[i];
            }
        }

        // Mostrar el array original
        System.out.println("Array original:");
        for (int i = 0; i < 10; i++) {
            System.out.println("Posición " + i + ": " + numeros[i]);
        }

        // Mostrar el array con números primos al principio
        System.out.println("Array con números primos al principio:");
        for (int i = 0; i < 10; i++) {
            System.out.println("Posición " + i + ": " + numerosPrimos[i]);
        }
        

	}
	
	// Método para verificar si un número es primo
    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }

        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }

        return true;
    }

}
