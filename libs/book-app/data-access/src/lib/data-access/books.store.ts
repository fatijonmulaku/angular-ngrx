import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals'
import { computed, inject } from '@angular/core'
import { BooksService } from './books.service'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { debounceTime, pipe, switchMap, tap } from 'rxjs'
import { tapResponse } from '@ngrx/operators'
import { Book } from '@angular-monorepo/book-app/util'

type params = { search: string, order: 'asc' | 'dec' }

interface BooksState {
  books: Book[]
  isLoading: boolean
  params: params;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  params: { search: '', order: 'asc' },
}

export const BooksStore = signalStore(
  withState(initialState),
  withComputed(({ books }) => ({
    booksCount: computed(() => books().length),
  })),
  withMethods((store, booksService = inject(BooksService)) => ({
    updateParams(params: params) {
      patchState(store, { params })
    },
    loadAll: rxMethod<{ search: string, order: 'asc' | 'dec' }>(
      pipe(
        debounceTime(1000),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(({ search, order }) =>
          booksService.getAllBooks(search, order).pipe(
            tapResponse({
              next: (books) => patchState(store, { books }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          ),
        ),
      ),
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadAll(store.params)
    }
  })
)

