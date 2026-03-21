import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    return
  }
}
