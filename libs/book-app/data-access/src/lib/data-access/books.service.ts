import { inject, Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Book } from '@angular-monorepo/book-app/util'

const URL = 'https://freetestapi.com/api/v1/books'

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly http = inject(HttpClient)

  getAllBooks(search: string, order: 'asc' | 'dec'): Observable<Book[]> {
    const params = new HttpParams()
      .set('search', search)
      .set('order', order)
    return this.http.get<Book[]>(URL, { params })
  }
}
