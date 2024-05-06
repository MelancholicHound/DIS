import { Component, OnInit } from '@angular/core';

import { PeripheralsComponent } from '../../../components/peripherals/peripherals.component';
import { ConnectionsComponent } from '../../../components/connections/connections.component';
import { SoftwaresComponent } from '../../../components/softwares/softwares.component';

@Component({
  selector: 'app-aio',
  standalone: true,
  imports: [
    PeripheralsComponent,
    ConnectionsComponent,
    SoftwaresComponent
  ],
  templateUrl: './aio.component.html',
  styleUrl: './aio.component.css'
})
export class AioComponent implements OnInit {
  toggler = document.getElementById('toggler-peripheral') as HTMLInputElement;

  toggled() {
    if (this.toggler?.checked) {
      console.log('on');
    } else {
      console.log('off');
    }
  }

  ngOnInit(): void {
    this.toggler?.addEventListener('keyup', this.toggled);
  }
}
