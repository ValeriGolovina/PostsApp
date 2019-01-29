import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { DataGridComponent } from './data-grid/data-grid.component';
import {DxButtonModule, DxDataGridModule, DxTextBoxModule} from 'devextreme-angular';
import {FilterService} from './filter.service';
import {FilterFieldsComponent} from './filter-fields/filter-fields.component';


@NgModule({
  declarations: [
    DataGridComponent,
    FilterFieldsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxButtonModule
  ],
  exports: [DataGridComponent, FilterFieldsComponent],
  providers: [FilterService]
})
export class SharedModule { }
