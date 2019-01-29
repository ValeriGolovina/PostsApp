import {Component, OnInit, ViewChild} from '@angular/core';
import {FilterService} from '../filter.service';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-filter-fields',
  templateUrl: './filter-fields.component.html',
  styleUrls: ['./filter-fields.component.scss']
})
export class FilterFieldsComponent implements OnInit {
  constructor(private filterService: FilterService) { }
  @ViewChild ('param') param;


  ngOnInit() {

  }
  onApply() {
    this.filterService.subject$.next(this.param.value);
    this.param.value = '';
  }
}
