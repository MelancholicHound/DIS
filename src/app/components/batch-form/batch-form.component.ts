import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

import { AddBatchComponent } from '../../pages/add-batch/add-batch.component';

import { AuthService } from '../../tools/services/auth.service';
import { LocalStorageService } from '../../tools/services/local-storage.service';

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
    AuthService,
    LocalStorageService
  ],
  templateUrl: './batch-form.component.html',
  styleUrl: './batch-form.component.css'
})
export class BatchFormComponent implements OnInit{

  @Output() booleanEvent = new EventEmitter<boolean>();
  @Output() closeModal = new EventEmitter<boolean>();

  value: boolean = true;
  count!: any;
  year!: number;
  batchId: any = 0;
  suppliers! : any;
  supplierId!: any;
  employeeId: number = 1;
  batchForm! : FormGroup;

  constructor(private _builder : FormBuilder,
              private authService : AuthService,
              private router : Router,
              private _storage : LocalStorageService) {
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
    let date = new Date();
    this.year = date.getFullYear();
    this.authService.getBatches().subscribe(res => {
      this.batchId = res.length + 1;
      this.count = String(this.batchId).padStart(3, '0');
    });
  }

  batchValid() {
    return this.batchForm.valid;
  }

  sendBatch() {
    this.batchForm.value.supplierId = this.supplierId;
    /* this.authService.postBatch(this.batchForm.value).subscribe(); */
    this._storage.setBatchId(this.batchId);
    this.closeModal.emit(this.value)
  }

  emitValue() {
    this.booleanEvent.emit(this.value);
  }

  getValue() {
    const supplierId = document.getElementById('supplier') as HTMLOptionElement;
    this.supplierId = supplierId.value;
  }
}
