import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { AuthService } from '../../tools/services/auth.service';
import { BatchFormComponent } from '../../components/batch-form/batch-form.component';
import { SupplierFormComponent } from '../../components/supplier-form/supplier-form.component';

import { BatchTest } from '../../tools/models/BatchTest';

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
  providers: [
    AuthService
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent implements OnInit {

  batchFormToggler: boolean = true;
  supplierFormToggler!: boolean;
  count: number = 0;

  fetchedData!: any;
  supplierName!: any;

  displayedColumns: string [] = [ 'select' , 'formattedId' , 'supplier' , 'dateDelivered', 'validUntil' ];

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {
    this.authService.getBatches().subscribe(
      (data) => {
        this.fetchedData = data;
      },
      (error) => { console
        .error('Error fetching data ', error) }
    );
  }

  dataSource = new MatTableDataSource<BatchTest>(this.fetchedData);
  selection = new SelectionModel<BatchTest>(true, []);

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

  checkboxLabel(row? : BatchTest): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  toggleBatchForm(value: boolean) {
    this.batchFormToggler = !value;
    this.supplierFormToggler = value;
  }

  toggleSupplierForm(value: boolean) {
    this.supplierFormToggler = !value;
    this.batchFormToggler = value;
  }

  closeModal(value: boolean) {
    const close = document.querySelector('.btn-close') as HTMLButtonElement;
    if (value) {
      close.click();
      this.router.navigate(['/add-batch']);
    }
  }
}
