import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AccountComponent } from './components/account/account.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { PeripheralsComponent } from './components/peripherals/peripherals.component';
import { SoftwaresComponent } from './components/softwares/softwares.component';

import { AccountListsComponent } from './pages/account-lists/account-lists.component';
import { BatchDeliveryComponent } from './pages/batch-delivery/batch-delivery.component';
import { ComputerInventoryComponent } from './pages/computer-inventory/computer-inventory.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';

import { ComputerComponent } from './pages/devices/computer/computer.component';
import { LaptopComponent } from './pages/devices/laptop/laptop.component';
import { TabletComponent } from './pages/devices/tablet/tablet.component';

import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AccountComponent,
    CardComponent,
    NavigationComponent,
    AccountListsComponent,
    BatchDeliveryComponent,
    ComputerInventoryComponent,
    DashboardComponent,
    SuppliersComponent,
    LoginComponent,
    RegisterComponent,
    ComputerComponent,
    LaptopComponent,
    TabletComponent,
    PeripheralsComponent,
    ConnectionsComponent,
    SoftwaresComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DIS';
}
