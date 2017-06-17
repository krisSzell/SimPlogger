using System.Data.Entity;
using SimPlogger.Persistence;

namespace SimPlogger.Persistence
{
    public interface IApplicationDbContext
    {
        DbSet<BlogPost> BlogPosts { get; set; }
        DbSet<Category> Categories { get; set; }
    }
}