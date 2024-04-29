import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})

export class AddBatchComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) {}

  tempBatch: any;

  ngOnInit(): void {
     this.tempBatch = this.authService.getTempBatch();
     console.log(this.tempBatch);
  }

  hasValue() {
    /* this.router.navigate(['/batch-delivery']); */
  }
}
