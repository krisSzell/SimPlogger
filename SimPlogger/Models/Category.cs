using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimPlogger.Models
{
    public class Category
    {
        public Category()
        {
            BlogPosts = new HashSet<BlogPost>();
        }

        public byte Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BlogPost> BlogPosts { get; set; }
    }
}