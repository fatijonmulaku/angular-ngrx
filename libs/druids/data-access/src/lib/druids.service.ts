import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { Druid } from '@angular-monorepo/data-access'
import { spellEntityAdapter } from './+state/druids.state'

@Injectable({ providedIn: 'root' })
export class DruidsService {
  private readonly druids: Druid[] = [
    {
      id: '1234',
      name: 'Evan',
      spells: {
        ids: ['123'],
        entities: {
          '123': { id: '123', name: 'test' },
        },
      },
    },
    { id: '1235', name: 'Chau', spells: spellEntityAdapter.getInitialState() },
  ]

  loadDruids(): Observable<Druid[]> {
    return of(this.druids).pipe(delay(500))
  }
}
