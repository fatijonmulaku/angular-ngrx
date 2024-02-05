import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { Druid } from '@angular-monorepo/data-access'

export const DruidsActions = createActionGroup({
  source: 'Druids',
  events: {
    'Load Druids': emptyProps(),
    'Load Druids Success': props<{ druids: Druid[] }>(),
    'Load Druids Fail': props<{ error: Error }>(),
  },
})
