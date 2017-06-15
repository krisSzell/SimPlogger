import { Routes } from '@angular/router';
import { PublishedPostsComponent } from '../components/published-posts-component/published-posts.component';

export const globalRoutes: Routes = [
    { path: 'published', component: PublishedPostsComponent },
    { path: '', component: PublishedPostsComponent },
    { path: '**', component: PublishedPostsComponent }
];