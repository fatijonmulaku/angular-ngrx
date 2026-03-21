import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Todo } from '@angular-monorepo/todo-app/util'

@Component({
  selector: 'angular-monorepo-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: Todo | undefined
  @Input() isSelected: boolean = false;
  @Output() remove = new EventEmitter<string>()
  @Output() check = new EventEmitter<{ id: string, checked: boolean }>()
  @Output() selectTodo = new EventEmitter<string | null>()

  onRemove(id: string) {
    this.remove.emit(id)
  }

  onCheck(id: string, $event: Event) {
    this.check.emit({ id, checked: (<HTMLInputElement>$event.target).checked })
  }

  onSelect(id: string) {
    this.selectTodo.emit(this.isSelected ? null: id);
  }
}
