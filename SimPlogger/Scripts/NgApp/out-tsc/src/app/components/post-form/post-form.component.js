"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var posts_service_1 = require("../../services/posts.service");
var categories_service_1 = require("../../services/categories.service");
var post_1 = require("../../shared/post");
var PostFormComponent = (function () {
    function PostFormComponent(_formBuilder, _router, _route, _postsService, _categoriesService) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._route = _route;
        this._postsService = _postsService;
        this._categoriesService = _categoriesService;
        this.post = new post_1.Post();
        this.title = 'New post';
    }
    PostFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoriesService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
        // takes an id from current post's url
        this.postId = this._route.snapshot.params['id'];
        if (this.postId != null) {
            this.title = 'Edit post';
            this._postsService.getSinglePost(this.postId)
                .subscribe(function (post) { return _this.post = post; });
        }
        this.form = this._formBuilder.group({
            title: ['', forms_1.Validators.required],
            header: ['', forms_1.Validators.required],
            body: [],
            author: [],
            categoryId: []
        });
    };
    PostFormComponent.prototype.save = function () {
        var _this = this;
        if (this.postId != null) {
            this._postsService.updatePost(this.form.value, this.postId)
                .subscribe(function (res) { return _this.cleanupForm(); });
        }
        else {
            this._postsService.savePost(this.form.value)
                .subscribe(function (res) { return _this.cleanupForm(); });
        }
    };
    PostFormComponent.prototype.cleanupForm = function () {
        this.form.markAsPristine();
        this._router.navigate(['published']);
    };
    return PostFormComponent;
}());
PostFormComponent = __decorate([
    core_1.Component({
        selector: 'app-post-form',
        templateUrl: './post-form.component.html',
        styleUrls: ['./post-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        posts_service_1.PostsService,
        categories_service_1.CategoriesService])
], PostFormComponent);
exports.PostFormComponent = PostFormComponent;
//# sourceMappingURL=post-form.component.js.map