using Microsoft.AspNetCore.Mvc;
using Mission14API.Data;

namespace Mission14API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : Controller
    {
        private MoviesDbContext context;
        public MoviesController(MoviesDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movies> Get()
        {
            return context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}
