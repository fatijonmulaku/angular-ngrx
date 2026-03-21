import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BooksStore } from '@angular-monorepo/book-app/data-access'
import { BookComponent } from '@angular-monorepo/book-app/ui/book'
import { BookFilterComponent } from '@angular-monorepo/book-app/ui/book-filter'

@Component({
  selector: 'angular-monorepo-books-list',
  standalone: true,
  imports: [CommonModule, BookComponent, BookFilterComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent {
  readonly store = inject(BooksStore)
}
