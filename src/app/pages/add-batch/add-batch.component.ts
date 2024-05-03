import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';

import { AuthService } from '../../tools/services/auth.service';

import { Device } from '../../tools/models/Device';

@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    NgFor
  ],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})

export class AddBatchComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) {}

  tempBatch: any;

  devices: Device[] = [];

  dataSource = new MatTableDataSource<Device>(this.devices);
  selection= new SelectionModel<Device>(true, []);
  displayedColumns: string [] = [ 'select', 'device', 'division', 'section', 'conns', 'settings' ];
  deviceClass: string[] = [ 'Computer', 'Laptop', 'Tablet', 'Printer', 'Router', 'Scanner', 'AIO' ];

  ngOnInit(): void {
     this.authService.getBatches().subscribe(res => this.tempBatch = res);
  }

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
