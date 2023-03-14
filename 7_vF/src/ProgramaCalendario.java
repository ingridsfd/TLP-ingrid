import java.time.*;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.Scanner;

public class ProgramaCalendario {
    public static void main(String[] args) {
        //crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);
        
        //pedir al usuario que ingrese un día de la semana y una hora
        System.out.print("Ingresa un día de la semana (Monday - Friday): ");
        String diaSemana = scanner.nextLine();
        System.out.print("Ingresa una hora (HH): ");
        int hora = Integer.parseInt(scanner.nextLine());
        System.out.print("Ingresa los minutos (MM): ");
        int minutos = Integer.parseInt(scanner.nextLine());
        
        //convertir la entrada del usuario en objetos de fecha y hora
        DayOfWeek dia = DayOfWeek.valueOf(diaSemana.toUpperCase());
        LocalTime tiempo = LocalTime.of(hora, minutos);
        LocalDateTime fechaTiempo = LocalDateTime.of(LocalDate.now().with(TemporalAdjusters.nextOrSame(dia)), tiempo);
        
        //obtener la fecha y hora del próximo viernes a las 15:00 hrs
        LocalDateTime viernes = fechaTiempo.with(TemporalAdjusters.next(DayOfWeek.FRIDAY)).withHour(15).withMinute(0).withSecond(0);
        
        //calcular la diferencia de tiempo entre la fecha y hora actual y la fecha y hora del próximo viernes a las 15:00 hrs
        long minsFinDe = ChronoUnit.MINUTES.between(fechaTiempo, viernes);
        
        //imprimir el resultado
        System.out.println("Faltan " + minsFinDe + " minutos para el fin de semana.");
        
        //cerrar el objeto Scanner
        scanner.close();
    }
}