using SimPlogger.Persistence;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SimPlogger.Persistence.Repositories
{
    public class BlogPostRepository : IBlogPostRepository
    {
        private readonly ApplicationDbContext _context;

        public BlogPostRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<BlogPost> LoadAllPosts()
        {
            return _context.BlogPosts.Include(p => p.Category).ToList();
        }

        public BlogPost LoadPostById(int id)
        {
            return _context.BlogPosts.SingleOrDefault(p => p.Id == id);
        }

        public void DeletePost(BlogPost post)
        {
            _context.BlogPosts.Remove(post);
        }

        public bool CheckIfPostExists(int id)
        {
            return _context.BlogPosts.Count(e => e.Id == id) > 0;
        }

        public void AddPost(BlogPost post)
        {
            _context.BlogPosts.Add(post);
        }

        public void ChangePostStateToModified(BlogPost post)
        {
            _context.Entry(post).State = EntityState.Modified;
        }
    }
}