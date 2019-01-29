import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from '../../../core/models/Post';
import {Observable} from 'rxjs';
import {PostsService} from '../../posts.service';
import notify from 'devextreme/ui/notify';
import {UsersService} from '../../../users/users.service';
import {CanComponentDeactivate} from '../../../shared/guards/can-deactivate.guard';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
  providers: [UsersService]
})
export class EditPostComponent implements OnInit {


  constructor(private postsService: PostsService, private usersService: UsersService, private router: Router) {
  }
  public editedPost: PostModel;
  public arr = [];
  public selectedCustomer;
  public saved;
  dataForEdited;

  ngOnInit() {
    this.dataForEdited = this.postsService.editedPost.getValue();
    this.editedPost = new PostModel(this.dataForEdited);
    console.log(this.postsService.editedPost.getValue());

    this.usersService.getUsers().subscribe((data: any[]) => {
      data.map(e => {
        this.arr.push(e.id);
      });
    });
  }

  saveData (e) {
    e.preventDefault();
    this.editedPost.userId = this.selectedCustomer || this.editedPost.userId;
    this.postsService.updatePost(this.editedPost.id, this.editedPost).subscribe(data => {
      notify({
        message: 'You have updated the post',
        position: {
          my: 'center top',
          at: 'center top'
        }
      }, 'success', 3000);
    });
  }
  cancel() {
    if (confirm('Хотите выйти?') === true){
      this.router.navigate(['/posts']); }
  }
}

