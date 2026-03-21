import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'angular-monorepo-book-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-filter.component.html',
  styleUrl: './book-filter.component.scss',
})
export class BookFilterComponent {
  @Output() paramsChanged = new EventEmitter()
  @Input() booksCount = 0;

  search: string = ''
  order: 'asc' | 'dec' = 'asc'
}
