package dev.bymichael.backend.controller;

import dev.bymichael.backend.entity.Workout;
import dev.bymichael.backend.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
public class WorkoutLogController {

    private final WorkoutService workoutService;

    @Autowired
    public  WorkoutLogController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout){
        return workoutService.createWorkout(workout);
    }

    @GetMapping
    public List<Workout> getAllWorkouts() {
        return workoutService.getAllWorkouts();
    }

    @GetMapping("/{id}")
    public Workout getWorkoutById(@PathVariable Long id){
        return workoutService.getWorkoutById(id);
    }

    @PutMapping("/{id}")
    public Workout updateWorkout(@PathVariable Long id, @RequestBody Workout workout){
        return workoutService.updateWorkout(id, workout);
    }

    @DeleteMapping("/{id}")
    public String deleteWorkout(@PathVariable Long id){
       return workoutService.deleteWorkout(id);
    }
}
