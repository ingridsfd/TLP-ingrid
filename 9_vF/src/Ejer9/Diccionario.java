package Ejer9;
import java.util.HashMap;
import java.util.Scanner;

//Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
//Utiliza un objeto HashMap para almacenar los pares de palabras.
//Debe solicitar al usuario una palabra en español e imprimir por consola la palabra en inglés.
//Si la palabra escrita no se encuentra en el diccionario, debe imprimir un mensaje
//por consola, diciendop que: "La palabra no se encuentra en el diccionario."
//Dato de entrada: gato
//Dato de salida: cat

public class Diccionario {
    public static void main(String[] args) {
        HashMap<String, String> diccionario = new HashMap<>();
        diccionario.put("hola", "hello");
        diccionario.put("adiós", "goodbye");
        diccionario.put("perro", "dog");
        diccionario.put("gato", "cat");

        Scanner scanner = new Scanner(System.in);
        System.out.print("Escribe una palabra en español de estas: hola, adiós, perro, gato");
        String palabra = scanner.nextLine();
        if (diccionario.containsKey(palabra)) {
            System.out.println("La traducción al inglés es: " + diccionario.get(palabra));
        } else {
            System.out.println("La palabra no se encuentra en el diccionario.");
        }
    }
}
