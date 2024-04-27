import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgClass } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

import { AuthService } from '../../tools/services/auth.service';

import { AddBatchComponent } from '../add-batch/add-batch.component';

@Component({
  selector: 'app-batch-delivery',
  standalone: true,
  imports: [
    MatTableModule,
    NgFor,
    ReactiveFormsModule,
    FormsModule,
    AddBatchComponent,
    RouterOutlet
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent implements OnInit {
  @Output() valueEmitter: EventEmitter<any[]> = new EventEmitter<any[]>;

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


  ngOnInit(): void {

  }

  sampleOutput(): void {
    this.router.navigate(['/batch-delivery/add-batch']);
    this.valueEmitter.emit(this.batchForm.value);
  }

  batchValid() {
    return this.batchForm.valid;
  }
}
