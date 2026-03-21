import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals'
import { computed, inject } from '@angular/core'
import { BooksService } from './books.service'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { debounceTime, pipe, switchMap, tap } from 'rxjs'
import { tapResponse } from '@ngrx/operators'
import { Book } from '@angular-monorepo/book-app/util'
import { EntityId, setAllEntities, withEntities } from '@ngrx/signals/entities'
import {
  setSelectedEntity,
  withSelectedEntity,
} from '@angular-monorepo/shared/data-access'

export interface Params {
  search: string
  order: 'asc' | 'dec'
}

interface BooksState {
  isLoading: boolean
  params: Params
}

const initialState: BooksState = {
  isLoading: false,
  params: { search: '', order: 'asc' },
}

export const BooksStore = signalStore(
  withState(initialState),
  withEntities<Book>(),
  withSelectedEntity<Book>(),
  withComputed(({ ids }) => ({
    booksCount: computed(() => ids().length),
  })),
  withMethods((store, booksService = inject(BooksService)) => ({
    updateParams(params: Params) {
      patchState(store, { params })
    },
    loadAll: rxMethod<Params>(
      pipe(
        debounceTime(1000),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(({ search, order }) =>
          booksService.getAllBooks(search, order).pipe(
            tapResponse({
              next: (books) => patchState(store, setAllEntities(books)),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          )
        )
      )
    ),
    selectEntity(id: EntityId | null) {
      patchState(store, setSelectedEntity(id))
    },
  })),
  withHooks({
    onInit(store) {
      store.loadAll(store.params)
    },
  })
)
