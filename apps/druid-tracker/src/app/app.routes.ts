import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'druids',
    loadChildren: () => import('@angular-monorepo/druids/features/list').then((m) => m.DRUIDS_FEATURE_LIST_ROUTES),
  },
  { path: '', redirectTo: 'druids', pathMatch: 'full' },
]
