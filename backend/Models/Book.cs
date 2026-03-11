using System.ComponentModel.DataAnnotations;

namespace BookApi.Models;

//mentioned properties included
public class Book
{
    public int Id{get;set;}

    [Required(ErrorMessage ="Title is required")]
    public string Title{get;set;}=string.Empty;

    [Required]
    public string Author{get;set;}=string.Empty;

    [Required(ErrorMessage ="Isbn required")]
    public string Isbn{get;set;}=string.Empty;
    
    [Required]
    public DateOnly PublicationDate{get;set;}
}