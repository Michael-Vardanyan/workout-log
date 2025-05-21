import {Component, OnInit} from '@angular/core';
import {Workout} from '../workout.model';
import {WorkoutService} from '../../../service/workout.service';
import {DatePipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-workout-list',
  imports: [DatePipe, MatTableModule, MatIcon, MatIconButton, MatInput, FormsModule],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css'
})
export class WorkoutListComponent implements OnInit {
  displayedColumns: string[] = ['exercise', 'sets', 'reps', 'weight', 'createdAt', 'actions'];
  workouts: Workout[] = [];

  editWorkoutId: string | undefined = undefined;
  editedWorkout: Partial<Workout> = {};

  constructor(private workoutService : WorkoutService) {
  }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe({
      next: data => this.workouts = data,
      error: err => console.log('Error loading workouts', err)
    });
  }

  startEdit(workout: Workout) {
    this.editWorkoutId = workout.id;
    this.editedWorkout = { ...workout }; // make a shallow copy
  }

  onSaveEdit(id: string) {
    this.workoutService.updateWorkout(id, this.editedWorkout as Workout).subscribe({
      next: () => {
        this.editWorkoutId = undefined;
        this.editedWorkout = {};
      }
    });
  }

  cancelEdit() {
    this.editWorkoutId = undefined;
    this.editedWorkout = {};
  }


  onDelete(id: string) {
    console.log(id);
    this.workoutService.deleteWorkout(id).subscribe({
      next: (id) => {
        console.log('Deleted workout with id: ', id)
      },
      error: err => console.error('Error deleting workout: ', err)
    });
  }
}
