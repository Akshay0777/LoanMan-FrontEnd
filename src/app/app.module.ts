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
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { FieldofficerlistComponent } from './fieldofficer/fieldofficerlist/fieldofficerlist.component';
import { FieldofficeraddComponent } from './fieldofficer/fieldofficeradd/fieldofficeradd.component';
import {HttpClientModule} from '@angular/common/http';
import { RequestComponent } from './request/request.component';
import { RequestlistComponent } from './request/requestlist/requestlist.component';
import { RequestaddComponent } from './request/requestadd/requestadd.component';
import { PendingadminrequestlistComponent } from './request/pendingadminrequestlist/pendingadminrequestlist.component';
import { PendingofficerrequestlistComponent } from './request/pendingofficerrequestlist/pendingofficerrequestlist.component';
import { AssignofficertorequestComponent } from './request/assignofficertorequest/assignofficertorequest.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FieldofficerComponent,
    CustomerComponent,
    HomeComponent,
    SignupComponent,
    CustomerlistComponent,
    FieldofficerlistComponent,
    FieldofficeraddComponent,
    RequestComponent,
    RequestlistComponent,
    RequestaddComponent,
    PendingadminrequestlistComponent,
    PendingofficerrequestlistComponent,
    AssignofficertorequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
