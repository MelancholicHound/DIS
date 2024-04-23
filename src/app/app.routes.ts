import { Routes } from '@angular/router';

import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BatchDeliveryComponent } from './pages/batch-delivery/batch-delivery.component';
import { ComputerInventoryComponent } from './pages/computer-inventory/computer-inventory.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { AccountListsComponent } from './pages/account-lists/account-lists.component';

export const routes: Routes = [
  { path : '' , redirectTo : '/login' , pathMatch : 'full' },
  { path : 'login' , component : LoginComponent },
  { path : 'register' , component : RegisterComponent },
  { path : 'dashboard' , component : DashboardComponent },
  { path : 'batch-delivery' , component : BatchDeliveryComponent },
  { path : 'computer-inventory' , component : ComputerInventoryComponent },
  { path : 'suppliers' , component : SuppliersComponent },
  { path : 'accounts', component : AccountListsComponent }
];
