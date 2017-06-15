import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post;

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
  }

}
