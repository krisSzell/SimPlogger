﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SimPlogger.Models;

namespace SimPlogger.Controllers.api
{
    public class testController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/test
        public IQueryable<BlogPost> GetBlogPosts()
        {
            return db.BlogPosts;
        }

        // GET: api/test/5
        [ResponseType(typeof(BlogPost))]
        public IHttpActionResult GetBlogPost(int id)
        {
            BlogPost blogPost = db.BlogPosts.Find(id);
            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        // PUT: api/test/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBlogPost(int id, BlogPost blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != blogPost.Id)
            {
                return BadRequest();
            }

            db.Entry(blogPost).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
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

        // POST: api/test
        [ResponseType(typeof(BlogPost))]
        public IHttpActionResult PostBlogPost(BlogPost blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BlogPosts.Add(blogPost);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = blogPost.Id }, blogPost);
        }

        // DELETE: api/test/5
        [ResponseType(typeof(BlogPost))]
        public IHttpActionResult DeleteBlogPost(int id)
        {
            BlogPost blogPost = db.BlogPosts.Find(id);
            if (blogPost == null)
            {
                return NotFound();
            }

            db.BlogPosts.Remove(blogPost);
            db.SaveChanges();

            return Ok(blogPost);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BlogPostExists(int id)
        {
            return db.BlogPosts.Count(e => e.Id == id) > 0;
        }
    }
}