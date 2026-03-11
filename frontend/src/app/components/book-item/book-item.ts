import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: '[app-book-item]',
  standalone: true,
  templateUrl: './book-item.html'
})
export class BookItem {
  @Input() book!: Book; 
  @Output() edit = new EventEmitter<Book>(); 
  @Output() delete = new EventEmitter<number>(); 

  onEdit() { this.edit.emit(this.book); }
  onDelete() { this.delete.emit(this.book.id); }
}