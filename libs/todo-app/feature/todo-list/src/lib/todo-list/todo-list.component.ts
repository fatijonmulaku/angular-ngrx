import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TodoComponent } from '@angular-monorepo/todo-app/ui/todo'
import { TodoStore } from '@angular-monorepo/todo-app/data-access'
import { patchState } from '@ngrx/signals'
import { addEntity, removeAllEntities, updateAllEntities } from '@ngrx/signals/entities'

@Component({
  selector: 'angular-monorepo-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  providers: [TodoStore],
})
export class TodoListComponent {
  readonly store = inject(TodoStore)
  name: string = ''

  onAdd(name: string) {
    patchState(this.store, addEntity({ id: this.generateId(), name, checked: false }))
  }

  removeAll() {
    patchState(this.store, removeAllEntities())
  }

  checkAll($event: Event) {
    patchState(this.store, updateAllEntities({ checked: (<HTMLInputElement>$event.target).checked }))
  }

  private generateId(): string {
    return crypto.randomUUID()
  }
}
