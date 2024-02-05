import { Route } from '@angular/router'
import { druidsFeature, loadDruids$ } from '@angular-monorepo/druids/data-access'
import { provideEffects } from '@ngrx/effects'
import { provideState } from '@ngrx/store'

export const DRUIDS_FEATURE_LIST_ROUTES: Route[] = [
  {
    path: '',
    providers: [
      provideState(druidsFeature),
      provideEffects({loadDruids$}),
    ],
    loadComponent: () => import('./druids-features-list.component').then((m) => m.DruidsFeaturesListComponent),
  },
]
