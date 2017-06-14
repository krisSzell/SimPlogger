namespace SimPlogger.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatedBlogPostModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.BlogPosts", "PostDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.BlogPosts", "Author", c => c.String(nullable: false));
            AlterColumn("dbo.BlogPosts", "Title", c => c.String(nullable: false));
            AlterColumn("dbo.BlogPosts", "CtaHeader", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.BlogPosts", "CtaHeader", c => c.String());
            AlterColumn("dbo.BlogPosts", "Title", c => c.String());
            DropColumn("dbo.BlogPosts", "Author");
            DropColumn("dbo.BlogPosts", "PostDate");
        }
    }
}
