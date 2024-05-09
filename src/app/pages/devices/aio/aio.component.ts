import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { PeripheralsComponent } from '../../../components/peripherals/peripherals.component';
import { ConnectionsComponent } from '../../../components/connections/connections.component';
import { SoftwaresComponent } from '../../../components/softwares/softwares.component';

import { AuthService } from '../../../tools/services/auth.service';
import { LocalStorageService } from '../../../tools/services/local-storage.service';

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
    AuthService,
    LocalStorageService
  ],
  templateUrl: './aio.component.html',
  styleUrl: './aio.component.css'
})

export class AioComponent implements OnInit {

  fetchedDivisions!: any;
  fetchedSections!: any;
  divisionId!: any;
  sectionId!: any;

  aioBrand!: any;
  processorBrand!: any;
  processorSeries!: any;
  storage!: any;
  ram!: any;
  videoCard!: any;

  aioBrandId!: any;
  processorBrandId!: any;
  processorSeriesId!: any;
  storageId!: any;
  ramId!: any;
  videoCardId!: any;

  aioForm: FormGroup;

  constructor(private authService : AuthService,
              private router : Router,
              private _builder : FormBuilder,
              private _storage : LocalStorageService) {
    this.aioForm = this._builder.group({
      batchId: [this._storage.getBatchId()],
      sectionId: [`${this.sectionId}`],
      storageId: [`${this.storageId}`], /* simula dito checking */
      ramId: [`${this.ramId}`],
      videoCard: [`${this.videoCardId}`],
      peripheralIds: [[]],
      connectionIds: [[]],
      allInOneBrandId: [`${this.aioBrandId}`],
      model: [''],
      upsRequest: [],
      cpuBrandId: [`${this.processorBrandId}`],
      cpuBrandSeriesId: [`${this.processorSeriesId}`],
      cpuModifier: [''],
      operatingSystemId: [1],
      productivityToolId: [1],
      securityId: [1]
    });
  }

  ngOnInit(): void {
    this.authService.getAllDivisions().subscribe(res => this.fetchedDivisions = res);
    this.authService.getAllProcessorBrand().subscribe(res => this.processorBrand = res);
    this.authService.getAIOBrand().subscribe(res => this.aioBrand = res);
    this.authService.getAllStorageValues().subscribe(res => this.storage = res);
    this.authService.getAllRamValues().subscribe(res => this.ram = res);
    this.authService.getAllVideoCard().subscribe(res => this.videoCard = res);
  }


  getDivValue() {
    let value = document.getElementById('division') as HTMLOptionElement;
    this.authService.getAllSections(value.value).subscribe(res => this.fetchedSections = res);
    this.divisionId = value.value;
  }

  getSectionValue() {
    let value = document.getElementById('section') as HTMLOptionElement;
    this.sectionId = value.value;
  }

  getProcBrandValue() {
    let value = document.getElementById('proc-brand') as HTMLOptionElement;
    this.authService.getAllProcessorSeries(value.value).subscribe(res => this.processorSeries = res);
    this.processorBrandId = value.value;
  }

  getProcSeriesValue() {
    let value = document.getElementById('proc-series') as HTMLOptionElement;
    this.processorSeriesId = value.value;
  }

  getStorageValue() {
    let value = document.getElementById('storage') as HTMLOptionElement;
    this.storageId = value.value;
  }

  getRam() {
    let value = document.getElementById('ram') as HTMLOptionElement;
    this.ramId = value.value;
  }

  getVideoCard() {
    let value = document.getElementById('video-card') as HTMLOptionElement;
    this.videoCardId = value.value;
  }

  getAio() {
    let value = document.getElementById('aio-brand') as HTMLOptionElement;
    this.aioBrandId = value.value;
  }

  saveAio(): any {
    this.aioForm.value.divisionId = this.divisionId;
    this.aioForm.value.sectionId = this.sectionId;
    this.aioForm.value.storageId = this.storageId;
    this.aioForm.value.ramId = this.ramId;
    this.aioForm.value.videoCardId = this.videoCardId;
    this.aioForm.value.allInOneBrandId = this.aioBrandId;
    this.aioForm.value.cpuBrandId = this.processorBrandId;
    this.aioForm.value.cpuBrandSeriesId = this.processorSeriesId;
    this.authService.postAIO(this.aioForm.value);
    this.router.navigate(['add-batch']);
  }
}
