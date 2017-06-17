using SimPlogger.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimPlogger.Core
{
    public interface IUnitOfWork
    {
        IBlogPostRepository BlogPosts { get;}

        void PersistChanges();
    }
}