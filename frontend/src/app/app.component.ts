import { Component } from '@angular/core';
import {WorkoutListComponent} from './component/workout/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  imports: [WorkoutListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
