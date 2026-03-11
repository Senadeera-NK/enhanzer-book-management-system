import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from './components/book-list/book-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookList], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}