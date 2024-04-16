import { signalStore, withComputed } from '@ngrx/signals'
import { withEntities } from '@ngrx/signals/entities'
import { Todo } from './todo.interface'
import { computed } from '@angular/core'

export const TodoStore = signalStore(
  withEntities<Todo>(),
  withComputed(({ entities, ids }) => ({
    allChecked: computed(() => ids().length && entities().every(entity => entity.checked)),
    intermediate: computed(() => ids().length && entities().some(entity => entity.checked)),
  })),
)
