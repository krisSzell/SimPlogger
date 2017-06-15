import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { PostsService } from '../../services/posts.service';
import { CategoriesService } from '../../services/categories.service';
import { Post } from '../../shared/post';
import { Category } from '../../shared/category';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  form: FormGroup;
  post = new Post();
  categories;
  postId;
  title = 'New post';

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _postsService: PostsService,
    private _categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);

    // takes an id from current post's url
    this.postId = this._route.snapshot.params['id'];
    if (this.postId != null) {
      this.title = 'Edit post';
      this._postsService.getSinglePost(this.postId)
        .subscribe(post => this.post = post);
    }

    this.form = this._formBuilder.group({
      title: ['', Validators.required],
      header: ['', Validators.required],
      body: [],
      author: [],
      categoryId: []
    });

  }

  save() {
    this._postsService.savePost(this.form.value)
      .subscribe(res => this.cleanupForm());
  }

  cleanupForm() {
    this.form.markAsPristine();
    this._router.navigate(['published']);
  }
}
