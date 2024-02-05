import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { DruidsActions } from './druids.actions'
import { inject } from '@angular/core'
import { DruidsService } from '../druids.service'

export const loadDruids$ = createEffect((actions$ = inject(Actions), druidsService = inject(DruidsService)) => {
  return actions$.pipe(
    ofType(DruidsActions.loadDruids),
    switchMap(() =>
      druidsService.loadDruids().pipe(
        map((druids) => DruidsActions.loadDruidsSuccess({ druids })),
        catchError((error: Error) => of(DruidsActions.loadDruidsFail({ error }))),
      ),
    ),
  )
}, { functional: true })
