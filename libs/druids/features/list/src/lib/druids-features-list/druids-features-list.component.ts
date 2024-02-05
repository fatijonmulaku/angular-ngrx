import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { DruidsActions, druidsFeature } from '@angular-monorepo/druids/data-access'
import { Druid } from '@angular-monorepo/data-access'
import { of } from 'rxjs'

@Component({
  selector: 'angular-monorepo-druids-features-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './druids-features-list.component.html',
  styleUrl: './druids-features-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DruidsFeaturesListComponent implements OnInit {
  allDruids$ = inject(Store).select(druidsFeature.selectAll);
  store = inject(Store);
  ngOnInit(): void {
      this.store.dispatch(DruidsActions.loadDruids());
  }

  trackBy(_: number, druid: Druid): string {
    return druid.id
  }
}
