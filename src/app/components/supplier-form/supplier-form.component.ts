import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.css'
})
export class SupplierFormComponent {

  @Output() booleanEvent = new EventEmitter<boolean>();

  value: boolean = true;

  supplierForm! : FormGroup;

  constructor(private authService : AuthService,
              private router : Router,
              private _builder : FormBuilder) {
    this.supplierForm = this._builder.group({
      supplier: ['' , Validators.required],
      location: ['' , Validators.required],
      email: ['', Validators.required, Validators.email],
      phonenum: ['', Validators.required, Validators.pattern('^[0-9]+$')]
    })
  }

  supplierValid() {
    return this.supplierForm.valid;
  }

  emitValue() {
    this.booleanEvent.emit(this.value);
  }
}
