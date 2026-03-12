import { Component } from '@angular/core';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookList],
  template: `
    <h1>Enahnzer Book Management</h1>
    <p>Software Engineer Assignment - March 2026</p>
    <hr>
    <app-book-list></app-book-list> 
  `
})
export class App { }