import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../posts.service';
import {first, take, takeLast} from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) { }
  public id: number;
  public allComments;
  public comments = [];
  public testPost;
  start = 0;
  end = 5;
  ngOnInit() {
    this.testPost = this.postsService.editedPost.getValue();
    this.id = this.testPost.id;
    this.postsService.getComments(this.id).subscribe(data => {
      this.allComments = data;
      for (let i = this.start; i < this.end; i++) {
        this.comments.push(this.allComments[i]);
      }
  });
  }
  loadNextComments() {
    this.start = this.end;
    this.end += 5;
    this.comments = [];
    for (let i = this.start; i < this.end; i++) {
      this.comments.push(this.allComments[i]);
    }
  }
}
