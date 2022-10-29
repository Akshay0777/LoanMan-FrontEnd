import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FieldofficerComponent } from './fieldofficer/fieldofficer.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

//   MatTabsModule,
//   MatFormsModule,
//   MatInputModule,
//   MatButtonModule,
//   MatCheckBoxModule,
//   MatIconModule
// } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FieldofficerComponent,
    CustomerComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
