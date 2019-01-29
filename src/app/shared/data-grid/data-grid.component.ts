import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() public arr = [];
  @Input() public fields = [];
  @Input() public type: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}
  openDetails(e) {
    this.router.navigate([`${this.type}`, `${e.data.id}`], {
      relativeTo: this.route
    });
  }
}
