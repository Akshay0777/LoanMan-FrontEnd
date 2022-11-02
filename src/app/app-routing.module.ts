import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { FieldofficerComponent } from './fieldofficer/fieldofficer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full'},
  { path : 'home', component: HomeComponent},
  { path : 'login', component: LoginComponent},
  { path : 'admin', component: AdminComponent},
  { path: 'customer',component:CustomerComponent},
  { path: 'officer',component:FieldofficerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
