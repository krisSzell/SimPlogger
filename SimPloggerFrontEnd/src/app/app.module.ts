import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublishedPostsComponent } from './components/published-posts-component/published-posts.component';
import { SpinnerComponent } from './components/spinner.component';

import { PostsService } from './services/posts.service';
import { CategoriesService } from './services/categories.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PublishedPostsComponent,
    SpinnerComponent,
    PostFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostsService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
