package Ejer6;

import java.util.Scanner;

public class FraseReverse {
	//Crear un programa con Java que realice lo siguiente:
	//Debe solicitar al usuario por consola una palabra o frase.
	//Debe mostrar por consola el texto escrito al revés.
	//Entrada: eduardo // Salida: odraude
	public static void main(String[] args) {
		//Le pedimos datos al usuario
		Scanner in = new Scanner(System.in);
		System.out.println("Ingresa tu nombre, una palabra o frase: ");
		String text = in.nextLine(); //La guardamos en una variable para poder usar el input aquí adelante
		//Sabemos que StringBuilder (documentacion) es una clase usada para mutar o modificaar una serie de caracteres.
		//Entre paréntesis le ponemos el nombre donde guardamos el input del usuario
		//Aplicamos el método .reverse() para regresar los caracteres alrevés
		//Convertimos nuevamente a String
		//Definimos nueva clase que usará los métodos StringBuilder().reverse(), .toString();
		String textoAlreves = new StringBuilder(text).reverse().toString();
		//Imprimimos el resultado y concatenamos 
		System.out.println("El nombre, la palabra o frase que ingresaste, alrevés queda así: " + textoAlreves);
	}
	
	//resultado1: eduardo --> odraude
	//resultado2: El clima esta agradable hoy --> yoh elbadarga atse amilc lE
	//resultado3: ingrid --> dirgni

}
