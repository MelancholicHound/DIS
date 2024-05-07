import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-batch-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  templateUrl: './batch-form.component.html',
  styleUrl: './batch-form.component.css'
})
export class BatchFormComponent {

  @Output() booleanEvent = new EventEmitter<boolean>();

  value: boolean = true;

  batchForm! : FormGroup;

  constructor(private _builder : FormBuilder,
              private authService : AuthService,
              private router : Router) {
    this.batchForm = this._builder.group({
      supplier: ['', Validators.required],
      serviceCenter: ['', Validators.required,],
      dateDelivered: ['', Validators.required],
      validUntil: ['', Validators.required],
      dateTested: ['']
    });
  }

  batchValid() {
    return this.batchForm.valid;
  }

  sendBatch() {
    this.router.navigate(['/add-batch']);
    this.authService.postBatch(this.batchForm.value).subscribe();
  }

  emitValue() {
    this.booleanEvent.emit(this.value);
  }
}
