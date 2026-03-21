import { Component, Input } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Movie } from '@angular-monorepo/shared/data-access'

@Component({
    selector: 'angular-monorepo-movie',
    standalone: true,
  imports: [CommonModule, NgOptimizedImage],
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.scss',
})
export class MovieComponent {
  @Input() movie!: Movie;
}
