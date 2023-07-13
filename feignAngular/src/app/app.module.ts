import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './singup/singup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { EmpLoginComponent } from './login/emp-login/emp-login.component';
import { SurveyComponent } from './homeSurvey/survey/survey.component';
import { DashboardComponent } from './homeDash/dashboard/dashboard.component';
import { RegisteredDataComponent } from './surveyData/registered-data/registered-data.component';
import { RentComponent } from './Rentcomp/rent/rent.component'; 
import { ToastrModule } from 'ngx-toastr';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoanComponent } from './homeloan/loan/loan.component';
import { InteriorComponent } from './interior/interior.component';
import { BedcomponentComponent } from './bed/bedcomponent/bedcomponent.component';
import { KitchenComponent } from './kitchen/kitchen/kitchen.component';
import { LivingroomComponent } from './livingroom/livingroom/livingroom.component';
import { BathroomComponent } from './bathroom/bathroom/bathroom.component';
import { ValidationComponent } from './validatation/validation/validation.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { UserdashboardComponent } from './homeDash/userdashboard/userdashboard.component';
import { EmployeeDashComponent } from './homeDash/employee-dash/employee-dash.component';
import { AdminDashComponent } from './homeDash/admin-dash/admin-dash.component';

import { HeaderComponent } from './homeDash/userdashboard/header/header.component'; 
import { SidenavComponent } from './homeDash/userdashboard/sidenav/sidenav.component';
import { MaindashComponent } from './homeDash/userdashboard/maindash/maindash.component';
import { RentalComponent } from './Rentcomp/rental/rental.component';
import { BuyorSellComponent } from './Rentcomp/buyor-sell/buyor-sell.component';


@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    EmpLoginComponent,
    SurveyComponent,
    DashboardComponent,
    RegisteredDataComponent,
    RentComponent,
    LoanComponent,
    InteriorComponent,
    BedcomponentComponent,
    KitchenComponent,
    LivingroomComponent,
    BathroomComponent,
    ValidationComponent,
    AdminLoginComponent,
    UserdashboardComponent,
    EmployeeDashComponent,
    AdminDashComponent,
    HeaderComponent,
    SidenavComponent,
    MaindashComponent,
    RentalComponent,
    BuyorSellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatGridListModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
