package dev.bymichael.backend.exception;

public class WorkoutNotFoundException extends RuntimeException{
    public WorkoutNotFoundException(String message) {
       super(message);
    }
}
