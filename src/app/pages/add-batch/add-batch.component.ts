import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})
export class AddBatchComponent implements OnChanges {
  @Input() batch: any;

  batchReceived = [this.batch];

  constructor(private router : Router) {}

  ngOnChanges(changes: SimpleChanges) {

  }

  hasValue() {
    this.router.navigate(['/batch-delivery']);
  }
}
