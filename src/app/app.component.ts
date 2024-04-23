import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { AccountListsComponent } from './pages/account-lists/account-lists.component';
import { BatchDeliveryComponent } from './pages/batch-delivery/batch-delivery.component';
import { ComputerInventoryComponent } from './pages/computer-inventory/computer-inventory.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';

import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccountComponent,
    CardComponent,
    NavigationComponent,
    AccountListsComponent,
    BatchDeliveryComponent,
    ComputerInventoryComponent,
    DashboardComponent,
    SuppliersComponent,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DIS';
}
