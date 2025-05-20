import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Workout} from '../component/workout/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutsURL = 'http://localhost:8081/api/workouts';

  constructor(private http: HttpClient) {}

  getWorkouts() {
    return this.http.get<Workout[]>(this.workoutsURL);
  }

}
