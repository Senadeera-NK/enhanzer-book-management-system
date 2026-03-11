var Builder = WebApplication.CreateBuilder(args);

// services
Builder.Services.AddControllers();

//setting up the cors
Builder.Services.AddCors(options=>
{
    options.AddPolicy("AllowAngular",
    policy=>policy.WithOrigins("http:/localhost:4200")
    .AllowAnyMethod()
    .AllowAnyHeader());
});

var app = Builder.Build();

//middlewares
app.UseHttpsRedirection();
app.UseCors("AllowAngular");
app.UseAuthorization();

app.MapControllers();

app.Run();