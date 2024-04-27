import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgClass } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../tools/services/auth.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-batch-delivery',
  standalone: true,
  imports: [
    MatTableModule,
    NgFor,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent implements OnInit {
  displayedColumns: string [] = [ 'batchId' , 'supplier' , 'dateDelivered' , 'validUntil'];

  batchForm!: FormGroup;

  constructor(private authService : AuthService, private _builder : FormBuilder) {
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


  ngOnInit(): void {

  }

  sampleOutput(): void {

  }
}
