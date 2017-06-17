using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SimPlogger.Persistence
{
    public class BlogPost
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Header { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public DateTime PostDate { get; set; }
        [Required]
        public string Author { get; set; }
        public byte CategoryId { get; set; }
        public Category Category { get; set; }

    }
}