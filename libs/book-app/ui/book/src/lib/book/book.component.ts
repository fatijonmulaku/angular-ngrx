import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Book } from '@angular-monorepo/book-app/util'
import { EntityId } from '@ngrx/signals/entities'

@Component({
  selector: 'angular-monorepo-book',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book: Book | undefined
  @Input() isSelected: boolean = false;
  @Output() selectBook = new EventEmitter<EntityId | null>()

  onSelect(id: EntityId | null) {
    this.selectBook.emit(this.isSelected ? null : id)
  }
}
