using Microsoft.EntityFrameworkCore;

namespace Mission14API.Data
{
    public class MoviesDbContext: DbContext
    {
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options) { }

        public DbSet<Movies> Movies { get; set; }
    }
}
