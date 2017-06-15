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
var core_1 = require("@angular/core");
var posts_service_1 = require("../../services/posts.service");
require("rxjs/add/operator/map");
var PublishedPostsComponent = (function () {
    function PublishedPostsComponent(_postsService) {
        this._postsService = _postsService;
        this.posts = [];
        this.postsLoading = true;
    }
    PublishedPostsComponent.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    PublishedPostsComponent.prototype.loadPosts = function () {
        var _this = this;
        this.postsLoading = true;
        this._postsService.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    return PublishedPostsComponent;
}());
PublishedPostsComponent = __decorate([
    core_1.Component({
        selector: 'app-published-posts-component',
        templateUrl: './published-posts.component.html',
        styleUrls: ['./published-posts.component.css']
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PublishedPostsComponent);
exports.PublishedPostsComponent = PublishedPostsComponent;
//# sourceMappingURL=published-posts.component.js.map