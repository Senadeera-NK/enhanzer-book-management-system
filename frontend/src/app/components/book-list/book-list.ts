import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book';
import { BookService } from '../../services/bookService';
@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit{
  books:Book[]=[];

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks():void{
    this.bookService.getBooks().subscribe({
      next:(data)=>this.books=data,
      error:(err)=>console.error('Error fetching books',err)
    });
  }
}
