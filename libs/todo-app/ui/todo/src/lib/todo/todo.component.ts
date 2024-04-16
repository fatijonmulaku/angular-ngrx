import { Component, inject, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Todo, TodoStore } from '@angular-monorepo/todo-app/data-access'
import { patchState } from '@ngrx/signals'
import { removeEntity, updateEntity } from '@ngrx/signals/entities'

@Component({
  selector: 'angular-monorepo-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: Todo | undefined
  private readonly store = inject(TodoStore)

  onRemove(id: string) {
    patchState(this.store, removeEntity(id))
  }

  check(id: string, $event: Event) {
    patchState(this.store, updateEntity({ id, changes: { checked: (<HTMLInputElement>$event.target).checked } }))
  }
}
