"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var published_posts_component_1 = require("../components/published-posts-component/published-posts.component");
exports.globalRoutes = [
    { path: 'published', component: published_posts_component_1.PublishedPostsComponent },
    { path: '', component: published_posts_component_1.PublishedPostsComponent },
    { path: '**', component: published_posts_component_1.PublishedPostsComponent }
];
//# sourceMappingURL=global-routes.js.map