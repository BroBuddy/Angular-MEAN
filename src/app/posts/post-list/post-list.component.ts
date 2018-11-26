import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  onDeletePost(index: number) {
    this.postService.removePost(index);
  }

}
