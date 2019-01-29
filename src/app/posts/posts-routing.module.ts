import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts.component';
import {PostComponent} from './post/post.component';
import {NewPostComponent} from './new-post/new-post.component';
import {EditPostComponent} from './post/edit-post/edit-post.component';
import {CanDeactivateGuard} from '../shared/guards/can-deactivate.guard';
import {CommentsComponent} from './post/comments/comments.component';
import {UserPostComponent} from './user-post/user-post.component';


const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post/:id', component: PostComponent, children: [
      {path: 'edit', component: EditPostComponent},
      {path: 'comments', component: CommentsComponent},
    ]},
  {path: 'new', component: NewPostComponent,  canDeactivate: [CanDeactivateGuard]},
  {path: 'user/:userId', component: UserPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})

export class PostsRoutingModule { }
