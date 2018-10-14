import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent {
  @Input()
  post: Post;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private postService: PostService) {}

  createPost(post: Post) {
    this.postService.createPost(post).then((newPost: Post) => {
      this.createHandler(newPost);
    });
  }

  updatePost(post: Post): void {
    this.postService.updatePost(post).then((updatedPost: Post) => {
      this.updateHandler(updatedPost);
    });
  }

  deletePost(postId: String): void {
    this.postService.deletePost(postId).then((deletedPostId: String) => {
      this.deleteHandler(deletedPostId);
    });
  }
}