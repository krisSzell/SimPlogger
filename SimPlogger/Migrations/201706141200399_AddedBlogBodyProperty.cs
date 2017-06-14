namespace SimPlogger.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedBlogBodyProperty : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.BlogPosts", "Header", c => c.String(nullable: false));
            AddColumn("dbo.BlogPosts", "Body", c => c.String(nullable: false));
            DropColumn("dbo.BlogPosts", "CtaHeader");
        }
        
        public override void Down()
        {
            AddColumn("dbo.BlogPosts", "CtaHeader", c => c.String(nullable: false));
            DropColumn("dbo.BlogPosts", "Body");
            DropColumn("dbo.BlogPosts", "Header");
        }
    }
}
