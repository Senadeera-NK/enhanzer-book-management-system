# enhanzer-book-management-system
A Full-stack Book Management System built with Angular 17+ and ASP.NET Core. Features a RESTful API with in-memory data storage and a responsive CRUD interface.

## 🚀 Tech Stack
- **Frontend:** Angular (TypeScript, HTML, CSS)
- **Backend:** ASP.NET Core (C#)
- **Data Storage:** In-Memory List (Thread-safe)
- **API Style:** RESTful

## 🛠️ Features
- **Create:** Add new books with Title, Author, ISBN, and Publication Date.
- **Read:** View a dynamically updated list of all books.
- **Update:** Edit existing book details.
- **Delete:** Remove books from the system.

## How to Run

### Prerequisites
- .NET 8.0 SDK
- Node.js & npm
- Angular CLI (`npm install -g @angular/cli`)

### 1. Start the Backend
```bash
cd backend/BookApi
dotnet restore
dotnet run
```

### 2. Start the Frontend
```bash
cd frontend
npm install
ng serve
```

### Future Improvements
- Unit Testing: xUnit project initialized, test coverage for CRUD operations.

## Technical Notes
- **In-Memory Storage:** Used for demonstration purposes to ensure rapid setup without external database dependencies, as mentioned in the assigment.
- **State Management:** Utilized Angular's `@Input` and `@Output` decorators for efficient data flow.