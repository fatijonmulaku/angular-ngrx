import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'movies',
    loadChildren: () => import('@angular-monorepo/movies/movies-list').then((m) => m.MOVIES_LIST_ROUTES),
  },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
]
