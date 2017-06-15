import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {

  postsUrl = "http://localhost:55150/api/blogposts";

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get(this.postsUrl)
      .map(res => res.json());
  }

  getSinglePost(postId: number) {
    return this._http.get(this.postsUrl + "/" + postId)
      .map(res => res.json());
  }

}
