import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'books',
    loadChildren: () => import('@angular-monorepo/book-app/feature/books-list').then((m) => m.BOOKS_LIST_ROUTES),
  },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
]
