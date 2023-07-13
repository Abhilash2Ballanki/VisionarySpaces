import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { EmpLoginComponent } from './login/emp-login/emp-login.component';
import { SurveyComponent } from './homeSurvey/survey/survey.component';
import { DashboardComponent } from './homeDash/dashboard/dashboard.component';
import { RegisteredDataComponent } from './surveyData/registered-data/registered-data.component';
import { logingrd } from './logingrd.guard';
import { RentComponent } from './Rentcomp/rent/rent.component';
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
import { RentalComponent } from './Rentcomp/rental/rental.component';
import { buffer } from 'rxjs';
import { BuyorSellComponent } from './Rentcomp/buyor-sell/buyor-sell.component';

const routes: Routes = [
  {path:'singup', component:SingupComponent},
  {path:'login',component:EmpLoginComponent},
  {path:'homeRegistration', component:SurveyComponent},
  {path:'', component:DashboardComponent},
  {path:'registeredData', component:RegisteredDataComponent},
  {path:'rent', component:RentComponent},
  {path:'loan', component:LoanComponent},
  {path:'interior', component:InteriorComponent},
  {path:'bed', component:BedcomponentComponent},
  {path:'kitchen', component:KitchenComponent},
  {path:'livingroom', component:LivingroomComponent},
  {path:'bathroom', component:BathroomComponent},
  {path:'validate', component:ValidationComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'user',component:UserdashboardComponent},
  {path:'employee',component:EmployeeDashComponent},
  {path:'admindash',component:AdminDashComponent},
  {path:'rental',component:RentalComponent},
  {path:'buyorsell',component:BuyorSellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
