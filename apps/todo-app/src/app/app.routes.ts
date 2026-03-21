import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'todos',
    loadChildren: () => import('@angular-monorepo/todo-app/feature/todo-list').then((m) => m.TODO_LIST_ROUTES),
  },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
]
