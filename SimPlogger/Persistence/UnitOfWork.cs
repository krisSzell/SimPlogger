using SimPlogger.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimPlogger.Persistence
{
    public class UnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public IBlogPostRepository BlogPosts { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            BlogPosts = new BlogPostRepository(context);
        }

        public void PersistChanges()
        {
            _context.SaveChanges();
        }
    }
}