import {
    signalStoreFeature,
    type,
    withComputed,
    withState,
} from '@ngrx/signals'
import { EntityId, EntityState } from '@ngrx/signals/entities'
import { computed } from '@angular/core'

type SelectedEntityState = { selectedEntityId: EntityId | null }

export function withSelectedEntity<Entity>() {
    return signalStoreFeature(
        { state: type<EntityState<Entity>>() },
        withState<SelectedEntityState>({ selectedEntityId: null }),
        withComputed(({ entityMap, selectedEntityId }) => ({
            selectedEntity: computed(() => {
                const selectedId = selectedEntityId()
                return selectedId ? entityMap()[selectedId] : null
            }),
        }))
    )
}

export function setSelectedEntity(selectedEntityId: EntityId | null) {
  return {selectedEntityId}
}
