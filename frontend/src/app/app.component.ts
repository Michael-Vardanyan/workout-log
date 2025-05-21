import {Component} from '@angular/core';
import {WorkoutListComponent} from './component/workout/workout-list/workout-list.component';
import {WorkoutFormComponent} from './component/workout/workout-form/workout-form.component';

@Component({
  selector: 'app-root',
  imports: [WorkoutListComponent, WorkoutFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
