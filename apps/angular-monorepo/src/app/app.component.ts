import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NxWelcomeComponent } from './nx-welcome.component'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.title = 'false';
  }

  title = 'angular-monorepo'
}
