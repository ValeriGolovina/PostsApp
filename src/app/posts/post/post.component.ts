import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../posts.service';
import {PostModel} from '../../core/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) { }
  public id;
  public currDate = Date.now();
  public post: PostModel = new PostModel();
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postsService.getPost(this.id).subscribe((data: PostModel) => {
      this.post = data;
      this.postsService.editedPost.next(data);
    });
  }
  editPost() {
    //this.postsService.editedPost.next(this.post);
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }
  showComments() {
    this.router.navigate(['comments'], {
      relativeTo: this.route
    });
  }
}
