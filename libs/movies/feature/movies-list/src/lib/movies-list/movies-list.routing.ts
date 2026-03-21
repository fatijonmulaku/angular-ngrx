import { Route } from '@angular/router'

export const MOVIES_LIST_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./movies-list.component').then((m) => m.MoviesListComponent),
  },
]
