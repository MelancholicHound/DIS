import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-softwares',
  standalone: true,
  imports: [],
  templateUrl: './softwares.component.html',
  styleUrl: './softwares.component.css'
})
export class SoftwaresComponent implements OnInit {
  constructor(private authService : AuthService) {}
  ngOnInit(): void {
    this.authService.getAllProdTool().subscribe(res => console.log(res));
    this.authService.getAllOs().subscribe(res => console.log(res));
    this.authService.getAllSec().subscribe(res => console.log(res));
  }
}
