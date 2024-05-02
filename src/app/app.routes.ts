import { Routes } from '@angular/router';

import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BatchDeliveryComponent } from './pages/batch-delivery/batch-delivery.component';
import { ComputerInventoryComponent } from './pages/computer-inventory/computer-inventory.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { AccountListsComponent } from './pages/account-lists/account-lists.component';
import { AddBatchComponent } from './pages/add-batch/add-batch.component';

import { ComputerComponent } from './pages/devices/computer/computer.component';
import { LaptopComponent } from './pages/devices/laptop/laptop.component';
import { TabletComponent } from './pages/devices/tablet/tablet.component';

import { BatchFormComponent } from './components/batch-form/batch-form.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';

export const routes: Routes = [
  { path : 'login' , component : LoginComponent },
  { path : 'register' , component : RegisterComponent },
  { path : 'dashboard' , component : DashboardComponent },
  { path : 'batch-delivery' , component : BatchDeliveryComponent },
  { path : 'add-batch' , component : AddBatchComponent },
  { path : 'computer' , component : ComputerComponent },
  { path : 'laptop' , component : LaptopComponent },
  { path : 'tablet' , component : TabletComponent },
  { path : 'computer-inventory' , component : ComputerInventoryComponent },
  { path : 'suppliers' , component : SuppliersComponent },
  { path : 'accounts' , component : AccountListsComponent },
  { path : 'batch-form' , component : BatchFormComponent },
  { path : 'supplier-form' , component : SupplierFormComponent }
];
