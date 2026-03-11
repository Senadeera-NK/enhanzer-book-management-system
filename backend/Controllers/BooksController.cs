using Microsoft.AspNetCore.Mvc;
using BookApi.Models;

[ApiController]
[Route("api/v1/[controller]")]
public class BooksController : ControllerBase
{
    //in-memory store - to store all the books
    private static List<Book> _books = new List<Book>();

    // to get all the books
    [HttpGet]
    public ActionResult<IEnumerable<Book>> GetAll() =>Ok(_books);

    //get book by id
    [HttpGet("{id}")]
    public ActionResult<Book> GetById(int id)
    {
        var book = _books.FirstOrDefault(b=> b.Id ==id);
        return book == null?NotFound() :Ok(book);    
    }

    //create a book
    [HttpPost]
    public IActionResult Create(Book book)
    {
        try
        {
            book.Id = _books.Count>0 ? _books.Max(b=>b.Id)+1:1;
            _books.Add(book);

            return CreatedAtAction(nameof(GetById), new{id=book.Id}, book);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"saving the book, internal server error:{ex.Message}");
        }

    }

    //update the properties of a book
    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody]Book updatedBook)
    {
        try
        {
            var givenBookIndex = _books.FindIndex(b=>b.Id==id);
            if(givenBookIndex==-1) return NotFound();

            updatedBook.Id = id;
            _books[givenBookIndex] = updatedBook;
            return NoContent();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"updating the book internal server error:{ex.Message}");
        }

    }

    //delete a book
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        try
        {
            var book = _books.FirstOrDefault(b=>b.Id==id);
            if(book==null)return NotFound();

            _books.Remove(book);
            return NoContent();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error deleting book: {ex.Message}");
        }

    }

}