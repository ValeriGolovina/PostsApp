import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) { }
  public  userId;
  public posts = [];

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.postsService.getUserPosts(this.userId).subscribe(data => {
      // @ts-ignore
      this.posts = data;
    });
  }

}
