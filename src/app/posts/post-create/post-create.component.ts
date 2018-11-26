import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredTitle: string = '';
  enteredContent: string = '';

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddPost() {
    const post = { title: this.enteredTitle, content: this.enteredContent };

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
