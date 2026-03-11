import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Add ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/bookService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books: Book[] = [];

  //for the save book modal
  showModal = false;

  //new book object - save book
  newBook:Book ={
    title:'',
    author:'',
    isbn:'',
    publicationDate:''
  };

  constructor(private bookService: BookService, private cdr: ChangeDetectorRef) {}

  toggleModal(){
    this.showModal = !this.showModal;
  }

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

  //to save books
  saveBook(){
    this.bookService.addBook(this.newBook).subscribe({
      next:(result)=>{
        this.loadBooks();
        this.toggleModal();
        this.newBook = {title:'',author:'',isbn:'',publicationDate:''};
      },
      error:(err)=>alert("failed to add book")
    })
  }

}