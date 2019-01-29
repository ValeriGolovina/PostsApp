import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from './posts.component';
import {SharedModule} from '../shared/shared.module';
import {PostsRoutingModule} from './posts-routing.module';
import {PostsService} from './posts.service';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import {
  DxButtonModule,
  DxSelectBoxModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxValidationSummaryModule,
  DxValidatorModule
} from 'devextreme-angular';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { CommentsComponent } from './post/comments/comments.component';
import { UserPostComponent } from './user-post/user-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    NewPostComponent,
    EditPostComponent,
    CommentsComponent,
    UserPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule,
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxTextAreaModule,
    DxSelectBoxModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
