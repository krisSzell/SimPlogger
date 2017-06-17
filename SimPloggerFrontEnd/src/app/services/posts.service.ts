import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {

  postsUrl = "http://localhost:55150/api/blogposts/";

  headers = new Headers({
    'Content-Type': 'application/json'
  });
  options = new RequestOptions({
    headers: this.headers
  });

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get(this.postsUrl)
      .map(res => res.json());
  }

  getSinglePost(postId: number) {
    return this._http.get(this.postsUrl + postId)
      .map(res => res.json());
  }

  savePost(post) {
    return this._http.post(this.postsUrl, JSON.stringify(post), this.options)
      .map(res => res.json());
  }

  updatePost(post, postId) {
    return this._http.put(this.postsUrl + postId, JSON.stringify(post), this.options)
      .map(res => res.json());
  }

  deletePost(postId) {
    return this._http.delete(this.postsUrl + postId)
      .map(res => res.json());
  }

}
