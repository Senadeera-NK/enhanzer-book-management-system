import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Add ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/bookService';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  //loading all the books
  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        console.log('Data arriving in Component:', data);
        this.books = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Error fetching books', err)
    });
  }

  onAddClick() {
    alert("Time to add a new book! (We'll build the form when you wake up!)");
  }
}