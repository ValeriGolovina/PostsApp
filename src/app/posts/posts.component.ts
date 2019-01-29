import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterService} from '../shared/filter.service';
import {PostModel} from '../core/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService, private router: Router,
              private route: ActivatedRoute, private filterService: FilterService) { }
  public posts: PostModel[] = [];

  ngOnInit() {
    this.getAllPosts();

    this.filterService.subject$.subscribe(data => {
      this.posts =  this.posts.filter(e => Object.values(e).join('').includes(data));
    });
  }
  getAllPosts() {
    this.postsService.getPosts().subscribe(
      (posts: PostModel[]) =>  this.posts = posts);
  }
  addNew() {
    this.router.navigate(['new'], {
      relativeTo: this.route
    });
  }
}
