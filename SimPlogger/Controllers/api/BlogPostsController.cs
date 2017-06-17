using SimPlogger.Core;
using SimPlogger.Persistence;
using SimPlogger.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SimPlogger.Controllers.api
{
    public class BlogPostsController : ApiController
    {
        private readonly UnitOfWork _unitOfWork;

        public BlogPostsController()
        {
            _unitOfWork = new UnitOfWork(new ApplicationDbContext());
        }
        
        // Get all posts
        public IHttpActionResult Get()
        {
            var blogPosts = _unitOfWork.BlogPosts.LoadAllPosts();

            return Ok(blogPosts);
        }

        //Get single post
        public IHttpActionResult Get(int id)
        {
            var blogPost = _unitOfWork.BlogPosts.LoadPostById(id);

            if (blogPost == null)
                return NotFound();

            return Ok(blogPost);
        }

        public IHttpActionResult Post([FromBody]BlogPost blogPost)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            blogPost.PostDate = DateTime.Now;

            _unitOfWork.BlogPosts.AddPost(blogPost);
            _unitOfWork.PersistChanges();

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

            blogPost.PostDate = DateTime.Now;

            //_unitOfWork.BlogPosts.ChangePostStateToModified(blogPost);

            try
            {
                _unitOfWork.PersistChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_unitOfWork.BlogPosts.CheckIfPostExists(id))
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
            var blogPost = _unitOfWork.BlogPosts.LoadPostById(id);

            if (blogPost == null)
                return NotFound();

            _unitOfWork.BlogPosts.DeletePost(blogPost);
            _unitOfWork.PersistChanges();

            return Ok(blogPost);
        }
    }
}
