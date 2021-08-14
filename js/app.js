
  //blog
  (function () {
    var app = angular.module('personalBlog', []);

    app.controller('BlogHienThu', ['$http', function ($http) {

      var blog = this;
      blog.title = "Danh mục bài viết";

      blog.posts = {};
      $http.get('js/data.json').success(function (data) {
        blog.posts = data;
      });

      blog.tab = 'blog';

      blog.selectTab = function (setTab) {
        blog.tab = setTab;
        console.log(blog.tab)
      };

      blog.isSelected = function (checkTab) {
        return blog.tab === checkTab;
      };

      blog.post = {};
      blog.addPost = function () {
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post = {};
      };

    }]);

    app.controller('CommentBlog', function () {
      this.comment = {};
      this.addComment = function (post) {
        this.comment.createdOn = Date.now();
        post.comments.push(this.comment);
        this.comment = {};
      };
    });

  })();
