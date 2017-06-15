import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { SpinnerComponent } from '../spinner.component';

import 'rxjs/add/operator/map';
import { Post } from '../../shared/post';

@Component({
  selector: 'app-published-posts-component',
  templateUrl: './published-posts.component.html',
  styleUrls: ['./published-posts.component.css']
})
export class PublishedPostsComponent implements OnInit {

  posts = [];
  postsLoading = true;

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts() {
    this.postsLoading = true;
    this._postsService.getPosts()
      .subscribe(posts => this.posts = posts);
    this.postsLoading = false;
  }

}
