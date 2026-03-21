import { Route } from '@angular/router'

export const TODO_LIST_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./todo-list.component').then((m) => m.TodoListComponent),
  },
]
