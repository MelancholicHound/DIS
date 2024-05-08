import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    NgFor,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  templateUrl: './aio.component.html',
  styleUrl: './aio.component.css'
})

export class AioComponent implements OnInit {

  fetchedDivisions!: any;
  fetchedSections!: any;

  processorBrand!: any;
  processorSeries!: any;
  id!: any;

  aioForm!: FormGroup;

  constructor(private authService : AuthService,
              private router : Router,
              private _builder : FormBuilder) {
    this.aioForm = this._builder.group({
      brand: ['HP'],
      model: ['Victus'],
      division: [''],
      section: [''],
      ram: ['', Validators.required],
      storage: ['', Validators.required],
      screenSize: ['', Validators.required],
      procBrand: ['', Validators. required],
      procSeries: ['', Validators.required],
      procModifier: ['', Validators.required],
      videoCard: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.authService.getAllDivisions().subscribe(res => this.fetchedDivisions = res);
    this.authService.getAllProcessorBrand().subscribe(res => this.processorBrand = res);
  }

  getDivValue() {
    let value = document.getElementById('division') as HTMLOptionElement;
    this.authService.getAllSections(value.value).subscribe(res => this.fetchedSections = res);
  }

  getBrandValue() {
    let value = document.getElementById('proc-brand') as HTMLOptionElement;
    this.authService.getAllProcessorSeries(value.value).subscribe(res => this.processorSeries = res);
  }

  saveAio() {
    console.log(this.aioForm.value);
  }
}
