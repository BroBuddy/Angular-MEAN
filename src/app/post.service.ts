import { Injectable } from '@angular/core';

import { Post } from './posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
      { title: 'First Post', content: 'This is the first post content.' },
      { title: 'Second Post', content: 'This is the second post content.' },
      { title: 'Third Post', content: 'This is the third post content.' },
  ];

  constructor() { }

  getPosts() {
    return this.posts;
  }

  addPost(newPost) {
    this.posts.push(newPost);
    this.getPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.getPosts();
  }
}
