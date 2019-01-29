import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';

import {User} from '../../core/models/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public id: string;
  // @ts-ignore
  public user$: Observable;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.usersService.getUser(this.id);
  }
}
