import { Component, Input } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Book } from '@angular-monorepo/shared/data-access'

@Component({
  selector: 'angular-monorepo-book',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book: Book | undefined;
}
