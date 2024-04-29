import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})

export class AddBatchComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) {}

  tempBatch: any;

  devices: any[] = [
    {id: 1, device: 'COMPUTER', division: 'HOPSS', conns: 3 }
  ];

  dataSource = [...this.devices];
  displayedColumns: string [] = ['Device', 'Division', 'Section', 'No. of Connections'];

  ngOnInit(): void {
     const fetchedBatch = this.authService.getTempBatch();
     this.tempBatch = fetchedBatch[0];
  }

}
