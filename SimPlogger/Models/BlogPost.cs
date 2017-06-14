using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimPlogger.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string CtaHeader { get; set; }
        public byte CategoryId { get; set; }

        public Category Category { get; set; }

    }
}