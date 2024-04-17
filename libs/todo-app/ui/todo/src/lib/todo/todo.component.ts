import { Component, inject, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Todo, TodoStore } from '@angular-monorepo/todo-app/data-access'

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
    this.store.remove(id)
  }

  check(id: string, $event: Event) {
    this.store.check(id, (<HTMLInputElement>$event.target).checked)
  }
}
