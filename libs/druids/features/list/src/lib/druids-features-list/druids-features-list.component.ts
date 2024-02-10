import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { DruidsActions, druidsFeature, spellEntityAdapter } from '@angular-monorepo/druids/data-access'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'angular-monorepo-druids-features-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './druids-features-list.component.html',
  styleUrl: './druids-features-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DruidsFeaturesListComponent implements OnInit {
  allDruids$ = inject(Store).select(druidsFeature.selectAll)
  store = inject(Store)
  druidFormGroup = inject(FormBuilder).group({
    id: '',
    name: '',
  })
  spellFormGroup = inject(FormBuilder).group({
    id: '',
    name: '',
  })

  ngOnInit(): void {
    this.store.dispatch(DruidsActions.loadDruids())
  }

  onAddDruid(druidFormGroup: FormGroup) {
    this.store.dispatch(DruidsActions.addDruid({
      druid: { ...druidFormGroup.value, spells: spellEntityAdapter.getInitialState() },
    }))
  }

  onAddSpell(druidId: string, spellFormGroup: FormGroup) {
    this.store.dispatch(DruidsActions.addSpell({
      id: druidId,
      spell: { ...spellFormGroup.value },
    }))
  }

  onRemoveSpell(druidId: string, spellId: string | undefined) {
    if (!spellId) return
    this.store.dispatch(DruidsActions.removeSpell({
      druidId: druidId,
      spellId: spellId,
    }))
  }

  onRemoveDruid(id: string) {
    this.store.dispatch(DruidsActions.removeDruid({
      id: id
    }))
  }
}
