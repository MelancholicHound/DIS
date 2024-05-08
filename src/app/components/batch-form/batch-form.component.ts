import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

import { AddBatchComponent } from '../../pages/add-batch/add-batch.component';

import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-batch-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AddBatchComponent,
    NgFor
  ],
  providers: [
    AuthService
  ],
  templateUrl: './batch-form.component.html',
  styleUrl: './batch-form.component.css'
})
export class BatchFormComponent implements OnInit{

  @Output() booleanEvent = new EventEmitter<boolean>();
  @Output() closeModal = new EventEmitter<boolean>();

  value: boolean = true;

  suppliers! : any;

  supplierId!: any;

  employeeId: number = 1;

  batchForm! : FormGroup;

  constructor(private _builder : FormBuilder,
              private authService : AuthService,
              private router : Router) {
    this.batchForm = this._builder.group({
      supplierId: [`${this.supplierId}`],
      employeeId: [`${this.employeeId}`],
      serviceCenter: ['', Validators.required,],
      dateDelivered: ['', Validators.required],
      validUntil: ['', Validators.required],
      dateTested: ['']
    });
  }

  ngOnInit(): void {
    this.authService.getAllSuppliers().subscribe(res => this.suppliers = res);
  }

  batchValid() {
    return this.batchForm.valid;
  }

  sendBatch() {
    this.batchForm.value.supplierId = this.supplierId;
    console.log(this.batchForm.value);
    this.authService.postBatch(this.batchForm.value).subscribe();
    this.closeModal.emit(this.value)
  }

  emitValue() {
    this.booleanEvent.emit(this.value);
  }

  getValue() {
    const supplierId = document.getElementById('supplier') as HTMLOptionElement;
    this.supplierId = supplierId.value;
    console.log(this.supplierId);
  }
}
