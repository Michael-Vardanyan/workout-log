package dev.bymichael.backend.service;

import dev.bymichael.backend.entity.Workout;
import dev.bymichael.backend.exception.WorkoutNotFoundException;
import dev.bymichael.backend.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class WorkoutService {

    private final WorkoutRepository workoutRepository;

    @Autowired
    public WorkoutService(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    public Workout createWorkout(Workout workout) {
        workout.setCreatedAt(LocalDateTime.now());
        return workoutRepository.save(workout);
    }

    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public Workout getWorkoutById(Long id) {
        Workout workoutById = workoutRepository.findById(id).orElseThrow(
                () -> new WorkoutNotFoundException("Workout with ID [" + id + "] not found!"));
        return workoutById;
    }

    public Workout updateWorkout(Long id, Workout workout) {
        Workout workoutToUpdate = workoutRepository.findById(id).orElseThrow(
                () -> new WorkoutNotFoundException("Can't update Workout with ID [" + id + "], because it does not exist!")
        );

        workoutToUpdate.setExercise(workout.getExercise());
        workoutToUpdate.setSets(workout.getSets());
        workoutToUpdate.setReps(workout.getReps());
        workoutToUpdate.setWeight(workout.getWeight());
        workoutToUpdate.setCreatedAt(LocalDateTime.now());

        return workoutRepository.save(workoutToUpdate);
    }

    public String deleteWorkout(Long id) {
        Workout workoutToDelete = workoutRepository.findById(id).orElseThrow(
                () -> new WorkoutNotFoundException("Can't delete workout with ID [" + id + "], because it does not exist!")
        );

        workoutRepository.delete(workoutToDelete);

        return "Workout with ID [" + id + "] deleted!";
    }
}
