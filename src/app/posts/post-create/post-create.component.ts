import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  enteredTitle: string = '';
  enteredContent: string = '';

  constructor(private postService: PostService) { }

  onAddPost() {
    const post: Post = { title: this.enteredTitle, content: this.enteredContent };

    this.postService.addPost(post);

    this.clearForm();
  }

  onClearForm() {
    this.clearForm();
  }

  clearForm() {
    this.enteredTitle = '';
    this.enteredContent = '';
  }

}
