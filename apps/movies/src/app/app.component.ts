import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
<<<<<<<< HEAD:apps/movies/src/app/app.component.ts
export class AppComponent implements OnInit {
  ngOnInit(): void {
    return
  }
========
export class AppComponent {
  title = 'todo-app'
>>>>>>>> origin/ngrx-signal-store:apps/todo-app/src/app/app.component.ts
}
