using SimPlogger.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SimPlogger.Controllers.api
{
    public class BlogPostsController : ApiController
    {
        private readonly ApplicationDbContext _context;

        public BlogPostsController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult Get()
        {
            var blogPosts = _context.BlogPosts.Include(p => p.Category).ToList();

            return Ok(blogPosts);
        }

        public IHttpActionResult Post([FromBody]BlogPost blogPost)
        {
            if (!ModelState.IsValid)
                return BadRequest("Couldn't process the request.");

    

            _context.BlogPosts.Add(blogPost);
            _context.SaveChanges();

            return Created("api/blogposts", blogPost);
        }

        public IHttpActionResult Put(int id, BlogPost blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != blogPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogPost).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        public IHttpActionResult Delete(int id)
        {
            var blogPost = _context.BlogPosts.SingleOrDefault(p => p.Id == id);

            if (blogPost == null)
                return NotFound();

            _context.BlogPosts.Remove(blogPost);
            _context.SaveChanges();

            return Ok(blogPost);
        }

        private bool BlogPostExists(int id)
        {
            return _context.BlogPosts.Count(e => e.Id == id) > 0;
        }
    }
}
