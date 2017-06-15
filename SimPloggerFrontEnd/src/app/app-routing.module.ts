import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { PublishedPostsComponent } from './components/published-posts-component/published-posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Routes = [
  { path: 'published', component: PublishedPostsComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PublishedPostsComponent },
  { path: '**', component: PublishedPostsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
