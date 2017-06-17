using SimPlogger.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SimPlogger.Controllers.api
{
    public class CategoriesController : ApiController
    {
        private readonly ApplicationDbContext _context;

        public CategoriesController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult Get()
        {
            var categories = _context.Categories.ToList();

            return Ok(categories);
        }
    }
}
