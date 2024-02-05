import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { Druid } from '@angular-monorepo/data-access'

@Injectable({ providedIn: 'root' })
export class DruidsService {
  private readonly druids: Druid[] = [
    { id: '1234', name: 'Evan', spells: ['23456'] },
    { id: '1235', name: 'Chau', spells: ['23457'] },
  ];

  loadDruids(): Observable<Druid[]> {
    return of(this.druids).pipe(delay(2000));
  }
}
