import { Component, Input, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';

import { BatchFormComponent } from '../../components/batch-form/batch-form.component';

import { AuthService } from '../../tools/services/auth.service';
import { LocalStorageService } from '../../tools/services/local-storage.service';

import { Device } from '../../tools/models/Device';
import { Observable } from 'rxjs';

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
    AuthService,
    LocalStorageService
  ],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})

export class AddBatchComponent implements OnInit {

  @Input() fetchedBatch: any;

  localStorageValue$!: Observable<any>;

  constructor(private router : Router,
              private authService : AuthService,
              private _storage : LocalStorageService) {}

  getTemptDevice = this._storage.getValue();
  parseValue = JSON.parse(this.getTemptDevice);
  devices: Device[] = [this.deviceMapper(this.parseValue)];

  dataSource = new MatTableDataSource<Device>(this.devices);
  selection = new SelectionModel<Device>(true, []);
  displayedColumns: string[] = [ 'select', 'device', 'division', 'section', 'conns', 'settings' ];;
  deviceClass: string[] = [ 'Computer', 'Laptop', 'Tablet', 'Printer', 'Router', 'Scanner', 'AIO' ];

  ngOnInit(): void {}

  deviceMapper(item: any): Device {
    return {
      id: item.id,
      device: item.device,
      division: item.division,
      section: item.section,
      conns: item.conns
    }
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
