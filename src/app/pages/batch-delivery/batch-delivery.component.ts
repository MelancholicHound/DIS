import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

import { AuthService } from '../../tools/services/auth.service';

import { Batch } from '../../tools/models/Batch';

@Component({
  selector: 'app-batch-delivery',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    NgFor,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent {

  displayedColumns: string [] = [ 'select' , 'batchId' , 'supplier' , 'dateDelivered', 'validUntil' ];
  date = new Date();
  public yearTracker = this.date.getFullYear();

  batchForm!: FormGroup;

  constructor(private authService : AuthService, private _builder : FormBuilder, private router : Router) {
    this.batchForm = this._builder.group({
      batchId: [`${this.yearTracker}-${this.paddedNumber}`],
      supplier: ['', Validators.required],
      serviceCenter: ['', Validators.required],
      dateDelivered: ['', Validators.required],
      validUntil: ['', Validators.required],
      dateTested: ['']
    })
  }

  batchData: any = this.authService.getSampleData();
  dataSource = new MatTableDataSource<Batch>(this.batchData);
  selection = new SelectionModel<Batch>(true, []);
  count: number = this.batchData.length + 1;
  public paddedNumber = String(this.count).padStart(3, '0');

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

  sendBatch() {
    this.router.navigate(['/add-batch']);
    this.authService.postTempBatch(this.batchForm.value);
  }

  batchValid() {
    return this.batchForm.valid;
  }
}
