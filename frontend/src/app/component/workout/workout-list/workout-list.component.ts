import {Component, OnInit} from '@angular/core';
import {Workout} from '../workout.model';
import {WorkoutService} from '../../../service/workout.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-workout-list',
  imports: [
    DatePipe,
  ],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css'
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(private workoutService : WorkoutService) {
  }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe({
      next: data => this.workouts = data,
      error: err => console.log('Error loading workouts', err)
    })
  }
}
