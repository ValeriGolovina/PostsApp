import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {User} from '../core/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  public users: User[] = [];

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      (users: User[])  => {this.users = users;}
    );
  }

}
