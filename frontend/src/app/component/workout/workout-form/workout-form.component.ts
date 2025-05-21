import { Component } from '@angular/core';
import {WorkoutService} from '../../../service/workout.service';
import {Workout} from '../workout.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  imports: [FormsModule],
  templateUrl: './workout-form.component.html',
  styleUrl: './workout-form.component.css'
})
export class WorkoutFormComponent {
  exercise: string = '';
  createdAt: string = '';
  sets: number = 0;
  reps: number = 0;
  weight: number = 0;

  constructor(private workoutService: WorkoutService) {}

  submitWorkout() {
    const newWorkout: Workout = {
      exercise: this.exercise,
      sets: this.sets,
      reps: this.reps,
      weight: this.weight
    };

    this.workoutService.createWorkout(newWorkout).subscribe({
      next: (created) => {
        console.log('Workout created: ', created)
      },
      error: (err) => console.error('Error creating workout:', err)
    })
  }
}
