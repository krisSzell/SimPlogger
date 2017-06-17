using System.Collections.Generic;
using SimPlogger.Persistence;

namespace SimPlogger.Persistence.Repositories
{
    public interface IBlogPostRepository
    {
        bool CheckIfPostExists(int id);
        void DeletePost(BlogPost post);
        List<BlogPost> LoadAllPosts();
        BlogPost LoadPostById(int id);
        void AddPost(BlogPost post);

        // Not sure if this shouldn't be in UnitOfWork class since it persist changes (sets state to modified)
        void ChangePostStateToModified(BlogPost post);
    }
}