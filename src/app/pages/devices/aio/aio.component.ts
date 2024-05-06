import { Component } from '@angular/core';

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
export class AioComponent {
  toggler() {
    const toggle = document.getElementById('toggler-peripheral') as HTMLInputElement;
    if (toggle.checked) {
      console.log('toggle');
    } else {
      console.log("not toggled");
    }
  }
}
