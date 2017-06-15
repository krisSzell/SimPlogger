import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { PublishedPostsComponent } from './components/published-posts-component/published-posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const routes: Routes = [
  { path: 'published/edit/:id', component: PostFormComponent },
  { path: 'new', component: PostFormComponent },
  { path: 'published', component: PublishedPostsComponent },
  { path: '', component: PublishedPostsComponent },
  { path: '**', component: PublishedPostsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
