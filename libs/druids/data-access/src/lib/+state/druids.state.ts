import { createFeature, createReducer, on } from '@ngrx/store'
import { DruidsActions } from './druids.actions'
import { Druid } from '@angular-monorepo/data-access'
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'

interface State extends EntityState<Druid> {
}

const adapter: EntityAdapter<Druid> = createEntityAdapter<Druid>()
const initialState: State = adapter.getInitialState({})
export const druidsFeature = createFeature({
  name: 'druids',
  reducer: createReducer(
    initialState,
    on(DruidsActions.loadDruidsSuccess, (state, { druids }) => (adapter.addMany(druids, state))),
  ),
  extraSelectors: ({selectDruidsState}) => ({
    ...adapter.getSelectors(selectDruidsState)
  })
})


