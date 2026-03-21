import { Route } from '@angular/router'

export const BOOKS_LIST_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./books-list.component').then((m) => m.BooksListComponent),
  },
]
