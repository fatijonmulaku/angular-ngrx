import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TodoComponent } from '@angular-monorepo/todo-app/ui/todo'
import { TodoStore } from '@angular-monorepo/todo-app/data-access'

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
    this.store.add(name)
  }

  onRemove(id: string) {
    this.store.remove(id)
  }

  removeAll() {
    this.store.removeAll()
  }

  onCheck({id, checked}: { id: string; checked: boolean }) {
    this.store.check(id, checked)
  }

  checkAll($event: Event) {
    this.store.checkAll((<HTMLInputElement>$event.target).checked)
  }
}
