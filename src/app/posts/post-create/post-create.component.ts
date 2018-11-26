import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  constructor(private postService: PostService) { }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };

    this.postService.addPost(post);

    form.resetForm();
  }

  clearForm(form: NgForm) {
    form.resetForm();
  }

}
