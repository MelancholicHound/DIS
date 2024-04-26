import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgClass } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Batch {
  id : number;
  batchId : string;
  supplier : string;
  dateTested : string;
  dateDelivered : string;
  validUntil : string;
}

const SampleData: Batch[] = [
  { id : 1 , batchId : '2024-001' , supplier : 'Vera Equinox' , dateTested : '2024-01-01' , dateDelivered : '2024-01-01', validUntil : '2024-01-01' },
  { id : 2 , batchId : '2024-002' , supplier : 'Denielle B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' },
  { id : 3 , batchId : '2024-003' , supplier : 'Francis B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' },
];

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
  dataSource = [...SampleData];
  public devices: string [] = [ 'Computer' , 'Laptop' , 'Tablet' , 'Printer' , 'Router' , 'Scanner' , 'All-In-One' ];
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
