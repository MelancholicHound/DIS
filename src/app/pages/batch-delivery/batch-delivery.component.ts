import { Component, ApplicationConfig } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { AuthService } from '../../tools/services/auth.service';
import { BatchFormComponent } from '../../components/batch-form/batch-form.component';
import { SupplierFormComponent } from '../../components/supplier-form/supplier-form.component';

import { Batch } from '../../tools/models/Batch';

@Component({
  selector: 'app-batch-delivery',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    BatchFormComponent,
    SupplierFormComponent,
    NgIf
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent {

  toggler: boolean = true;

  displayedColumns: string [] = [ 'select' , 'batchId' , 'supplier' , 'dateDelivered', 'validUntil' ];

  constructor(private authService : AuthService, private router : Router) { }

  batchData: any = this.authService.getSampleData();
  dataSource = new MatTableDataSource<Batch>(this.batchData);
  selection = new SelectionModel<Batch>(true, []);

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

  checkboxLabel(row? : Batch): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  toggle() {
    this.toggler = !this.toggler;
  }
}
