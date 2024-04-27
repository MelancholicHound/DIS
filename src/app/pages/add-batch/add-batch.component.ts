import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})
export class AddBatchComponent {
  @Input() batch: any;

  constructor(private router : Router) {}

  hasValue() {
    this.router.navigate(['/batch-delivery']);
  }
}
