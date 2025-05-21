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

  getWorkout(id: string) {
    return this.http.get<Workout>(`${this.workoutsURL}/${id}`)
  }

  createWorkout(workout: Workout) {
    return this.http.post<Workout>(this.workoutsURL, workout);
  }

  updateWorkout(id: string, workout: Workout) {
    return this.http.put(`${this.workoutsURL}/${id}`, workout)
  }

  deleteWorkout(id: string) {
    return this.http.delete(`${this.workoutsURL}/${id}`);
  }

}
