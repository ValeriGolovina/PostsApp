import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {PostsService} from '../posts.service';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../../shared/guards/can-deactivate.guard';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit, CanComponentDeactivate {
  description: string;
  title: string;
  userId: number;
  data = [];
  saved = false;
  constructor(private postsService: PostsService) { }

  canDeactivate(): boolean | Observable<boolean> {
    console.log(this.saved);
    if (this.saved === false) {
      return confirm('Вы хотите покинуть страницу?');
    } else {
      return true;
    }
  }

  ngOnInit() {
  }
  onFormSubmit = function(e) {
    this.saved = true;
    this.data = [this.userId, this.description, this.title];
    this.postsService.addPost(this.data).subscribe(data => {
      console.log(data);
      notify({
        message: 'You have submitted the form',
        position: {
          my: 'center top',
          at: 'center top'
        }
      }, 'success', 3000);
      }
    );
    e.preventDefault();
  };
}
