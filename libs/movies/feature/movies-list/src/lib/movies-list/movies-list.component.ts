import { Component, inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesFeatureStore } from '@angular-monorepo/movies/data-access'
import { MovieComponent } from '@angular-monorepo/movie'
import { Observable } from 'rxjs'
import { Movie } from '@angular-monorepo/shared/data-access'

@Component({
  selector: 'angular-monorepo-movies-list',
  standalone: true,
  imports: [CommonModule, MovieComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  providers: [MoviesFeatureStore],
})
export class MoviesListComponent implements OnInit {
  moviesStore = inject(MoviesFeatureStore)
  readonly movies$: Observable<Movie[]> = this.moviesStore.movies$

  ngOnInit() {
    this.moviesStore.getAllMovies()
    this.moviesStore.getAllUsers()
  }
}
