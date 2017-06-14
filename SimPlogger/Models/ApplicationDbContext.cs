using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SimPlogger.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Category> Categories { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }
    }
}