import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient){}

  //getting all books
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);
  }

  //get a book given an id
  getBookById(id:number):Observable<Book>{
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  //adding a book
  addBook(book:Book):Observable<Book>{
    return this.http.post<Book>(this.apiUrl, book);
  }

  //update the book
  updateBook(id:number, book:Book):Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/${id}`,book);
  }

  //delete a book
  deleteBook(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
