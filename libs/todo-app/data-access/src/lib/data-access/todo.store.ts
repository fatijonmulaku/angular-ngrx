import { patchState, signalStore, withComputed, withMethods } from '@ngrx/signals'
import {
  addEntity,
  removeAllEntities,
  removeEntity,
  updateAllEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities'
import { Todo } from './todo.interface'
import { computed } from '@angular/core'

export const TodoStore = signalStore(
  withEntities<Todo>(),
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
  })),
)
