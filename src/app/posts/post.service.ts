import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { title: 'First Post', content: 'This is the first post content.' },
    { title: 'Second Post', content: 'This is the second post content.' },
    { title: 'Third Post', content: 'This is the third post content.' },
  ];

  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.postsUpdated.next([...this.posts]);
  }
}
