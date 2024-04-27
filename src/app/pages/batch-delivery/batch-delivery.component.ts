import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgClass } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-batch-delivery',
  standalone: true,
  imports: [
    MatTableModule,
    NgFor
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent implements OnInit {
  displayedColumns: string [] = [ 'batchId' , 'supplier' , 'dateDelivered' , 'validUntil'];

  constructor(private authService : AuthService) { }

  dataSource = [...this.authService.getSampleData()];

  date = new Date();
  public yearTracker = this.date.getFullYear();
  count: number = this.dataSource.length + 1;
  public paddedNumber = String(this.count).padStart(3, '0');

  batchForm!: FormGroup;

  ngOnInit(): void {
    this.batchForm = this.createBatchForm();
  }

  createBatchForm(): FormGroup {
    return new FormGroup({
      supplier: new FormControl("", [Validators.required]),
      dateDelivered: new FormControl("", [Validators.required]),
      validUntil: new FormControl("", [Validators.required]),
      dateTested: new FormControl("")
    });
  }

}
