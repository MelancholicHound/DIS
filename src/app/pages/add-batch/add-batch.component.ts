import { Component, OnChanges, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';

import { BatchFormComponent } from '../../components/batch-form/batch-form.component';

import { AuthService } from '../../tools/services/auth.service';

import { Device } from '../../tools/models/Device';
import { Batch } from '../../tools/models/Batch';

@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    NgFor,
    BatchFormComponent
  ],
  providers: [
    AuthService
  ],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})

export class AddBatchComponent {

  @Input() fetchedBatch: any;

  constructor(private router : Router, private authService : AuthService) {}

  devices: Device[] = [];

  dataSource = new MatTableDataSource<Device>(this.devices);
  selection= new SelectionModel<Device>(true, []);
  displayedColumns: string [] = [ 'select', 'device', 'division', 'section', 'conns', 'settings' ];
  deviceClass: string[] = [ 'Computer', 'Laptop', 'Tablet', 'Printer', 'Router', 'Scanner', 'AIO' ];

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row? : Device): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
