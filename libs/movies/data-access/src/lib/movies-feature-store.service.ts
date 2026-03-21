import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { Movie, User } from '@angular-monorepo/shared/data-access'
import { inject, Injectable } from '@angular/core'
import { switchMap } from 'rxjs'
import { MoviesService } from './movies.service'
import { HttpErrorResponse } from '@angular/common/http'
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'

interface MoviesFeatureState {
  movies: EntityState<Movie>
  users: EntityState<User>
}

const moviesAdapter: EntityAdapter<Movie> = createEntityAdapter<Movie>()
const { selectAll: selectAllMovies } = moviesAdapter.getSelectors()
const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>()
const { selectAll: selectAllUsers } = usersAdapter.getSelectors()

const moviesFeatureInitialState = {
  movies: moviesAdapter.getInitialState(),
  users: usersAdapter.getInitialState(),
}

@Injectable()
export class MoviesFeatureStore extends ComponentStore<MoviesFeatureState> {
  moviesService = inject(MoviesService)

  constructor() {
    super(moviesFeatureInitialState)
  }

  readonly movies$ = this.select(state => selectAllMovies(state.movies))
  readonly users$ = this.select(state => selectAllUsers(state.users))

  readonly setAllMovies = this.updater((state, movies: Movie[]) => (
    { ...state, movies: moviesAdapter.setAll(movies, state.movies) }),
  )
  readonly setAllUsers = this.updater((state, users: User[]) => (
    { ...state, users: usersAdapter.setAll(users, state.users)}
  ))

  readonly getAllMovies = this.effect((triggers$) => {
    return triggers$.pipe(
      switchMap(() => this.moviesService.fetchMovies().pipe(
        tapResponse(
          (movies) => this.setAllMovies(movies),
          (error: HttpErrorResponse) => this.logError(error),
        ),
      )),
    )
  })

  readonly getAllUsers = this.effect((triggers$) => {
    return triggers$.pipe(
      switchMap(() => this.moviesService.fetchUsers().pipe(
        tapResponse(
          (users) => this.setAllUsers(users),
          (error: HttpErrorResponse) => this.logError(error),
        ),
      )),
    )
  })

  private logError(error: HttpErrorResponse): void {
    console.error('An error occurred:', error)
  }
}
