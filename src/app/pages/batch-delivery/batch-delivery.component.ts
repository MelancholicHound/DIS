import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-batch-delivery',
  standalone: true,
  imports: [
    MatTableModule,
    NgFor,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent {

  displayedColumns: string [] = [ 'batchId' , 'supplier' , 'dateDelivered' , 'validUntil'];

  batchForm!: FormGroup;

  constructor(private authService : AuthService, private _builder : FormBuilder, private router : Router) {
    this.batchForm = this._builder.group({
      supplier: ['', Validators.required],
      serviceCenter: ['', Validators.required],
      dateDelivered: ['', Validators.required],
      validUntil: ['', Validators.required],
      dateTested: ['']
    })
  }

  dataSource = [...this.authService.getSampleData()];

  date = new Date();
  public yearTracker = this.date.getFullYear();
  count: number = this.dataSource.length + 1;
  public paddedNumber = String(this.count).padStart(3, '0');

  sendBatch() {
    this.router.navigate(['/batch-delivery/add-batch']);
    this.authService.postTempBatch(this.batchForm.value);
  }

  batchValid() {
    return this.batchForm.valid;
  }
}
