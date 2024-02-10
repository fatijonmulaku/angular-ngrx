import { createFeature, createReducer, on } from '@ngrx/store'
import { DruidsActions } from './druids.actions'
import { Druid, Spell } from '@angular-monorepo/data-access'
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity'

const druidEntityAdapter: EntityAdapter<Druid> = createEntityAdapter<Druid>()
export const spellEntityAdapter: EntityAdapter<Spell> = createEntityAdapter<Spell>()
export const druidsFeature = createFeature({
  name: 'druids',
  reducer: createReducer(
    druidEntityAdapter.getInitialState(),
    on(DruidsActions.loadDruidsSuccess,
      (state, { druids }) =>
        druidEntityAdapter.setAll(druids, state)),
    on(DruidsActions.addDruid, (state, action) =>
      druidEntityAdapter.addOne(action.druid, state)),
    on(DruidsActions.removeDruid, (state, action) =>
      druidEntityAdapter.removeOne(action.id, state)),
    on(DruidsActions.addSpell, (state, action) =>
      druidEntityAdapter.updateOne(
        {
          id: action.id,
          changes: {
            spells: spellEntityAdapter.addOne(
              action.spell,
              (state.entities[action.id] as Druid).spells,
            ),
          },
        },
        state,
      ),
    ),
    on(DruidsActions.removeSpell, (state, action) =>
      druidEntityAdapter.updateOne(
        {
          id: action.druidId,
          changes: {
            spells: spellEntityAdapter.removeOne(
              action.spellId,
              (state.entities[action.druidId] as Druid).spells,
            ),
          },
        },
        state,
      ),
    ),
  ),
  extraSelectors: ({ selectDruidsState }) => ({
    ...druidEntityAdapter.getSelectors(selectDruidsState),
  }),
})


