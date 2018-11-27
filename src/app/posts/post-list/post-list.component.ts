import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';

import { Subscription } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  private posts: Post[] = [];
  private postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSubscription = this.postService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  onDeletePost(index: number) {
    this.postService.removePost(index);
  }

}
