import { Component, isStandalone, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { NgFor } from '@angular/common';

import { PeripheralsComponent } from '../../../components/peripherals/peripherals.component';
import { ConnectionsComponent } from '../../../components/connections/connections.component';
import { SoftwaresComponent } from '../../../components/softwares/softwares.component';

import { AuthService } from '../../../tools/services/auth.service';

@Component({
  selector: 'app-aio',
  standalone: true,
  imports: [
    PeripheralsComponent,
    ConnectionsComponent,
    SoftwaresComponent,
    NgFor
  ],
  providers: [
    AuthService
  ],
  templateUrl: './aio.component.html',
  styleUrl: './aio.component.css'
})

export class AioComponent implements OnInit {

  toggler = document.getElementById('toggler-peripheral') as HTMLInputElement;

  fethedDivisions!: any;
  fetchedSections!: any;
  id!: number;

  toggled() {
    if (this.toggler?.checked) {
      console.log('on');
    } else {
      console.log('off');
    }
  }

  constructor( private authService : AuthService ) {}

  ngOnInit(): void {
    this.authService.getAllDivisions().subscribe(res => this.fethedDivisions = res);
    this.toggler?.addEventListener('keyup', this.toggled);
  }

  showSections(divisions: any) {
    this.authService.getAllSections(divisions.id).subscribe(res => {console.log(res)});
  }
}
