import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Movie, User } from '@angular-monorepo/shared/data-access'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient)

  fetchMovies() {
    return this.http.get<Movie[]>('https://dummyapi.online/api/movies');
  }

  fetchUsers() {
    return this.http.get<User[]>('https://dummyapi.online/api/users')
  }
}
