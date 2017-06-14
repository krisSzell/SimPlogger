namespace SimPlogger.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedRelationsBetweenBlogAndCategoryTables : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.BlogPosts", "CategoryId", "dbo.Categories");
            DropIndex("dbo.BlogPosts", new[] { "CategoryId" });
            CreateTable(
                "dbo.CategoryBlogPosts",
                c => new
                    {
                        Category_Id = c.Byte(nullable: false),
                        BlogPost_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Category_Id, t.BlogPost_Id })
                .ForeignKey("dbo.Categories", t => t.Category_Id, cascadeDelete: true)
                .ForeignKey("dbo.BlogPosts", t => t.BlogPost_Id, cascadeDelete: true)
                .Index(t => t.Category_Id)
                .Index(t => t.BlogPost_Id);
            
            DropColumn("dbo.BlogPosts", "CategoryId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.BlogPosts", "CategoryId", c => c.Byte(nullable: false));
            DropForeignKey("dbo.CategoryBlogPosts", "BlogPost_Id", "dbo.BlogPosts");
            DropForeignKey("dbo.CategoryBlogPosts", "Category_Id", "dbo.Categories");
            DropIndex("dbo.CategoryBlogPosts", new[] { "BlogPost_Id" });
            DropIndex("dbo.CategoryBlogPosts", new[] { "Category_Id" });
            DropTable("dbo.CategoryBlogPosts");
            CreateIndex("dbo.BlogPosts", "CategoryId");
            AddForeignKey("dbo.BlogPosts", "CategoryId", "dbo.Categories", "Id", cascadeDelete: true);
        }
    }
}
