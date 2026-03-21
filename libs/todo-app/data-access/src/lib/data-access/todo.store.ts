import { patchState, signalStore, withComputed, withMethods } from '@ngrx/signals'
import {
  addEntity, EntityId,
  removeAllEntities,
  removeEntity,
  updateAllEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities'
import { computed } from '@angular/core'
import { Todo } from '@angular-monorepo/todo-app/util'
import { setSelectedEntity, withSelectedEntity } from '@angular-monorepo/shared/data-access'

export const TodoStore = signalStore(
  withEntities<Todo>(),
  withSelectedEntity<Todo>(),
  withComputed(({ entities, ids }) => ({
    allChecked: computed(() => ids().length && entities().every(entity => entity.checked)),
  })),
  withComputed(({ entities, allChecked }) => ({
    indeterminate: computed(() => !allChecked() && entities().some(entity => entity.checked)),
  })),
  withMethods((store) => ({
    add(name: string) {
      patchState(store, addEntity({ id: <string>crypto.randomUUID(), name, checked: false }))
    },
    remove(id: string) {
      patchState(store, removeEntity(id))
    },
    removeAll() {
      patchState(store, removeAllEntities())
    },
    check(id: string, checked: boolean) {
      patchState(store, updateEntity({ id, changes: { checked } }))
    },
    checkAll(checked: boolean) {
      patchState(store, updateAllEntities({ checked }))
    },
    selectEntity(id: EntityId | null) {
      patchState(store, setSelectedEntity(id))
    }
  })),
)
