import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { Druid, Spell } from '@angular-monorepo/data-access'

export const DruidsActions = createActionGroup({
  source: 'Druids',
  events: {
    'Load Druids': emptyProps(),
    'Load Druids Success': props<{ druids: Druid[] }>(),
    'Load Druids Fail': props<{ error: Error }>(),
    'Add Druid': props<{ druid: Druid }>(),
    'Remove Druid': props<{ id: string }>(),
    'Add Spell': props<{ id: string, spell: Spell }>(),
    'Remove Spell': props<{ druidId: string, spellId: string }>(),
  },
})
