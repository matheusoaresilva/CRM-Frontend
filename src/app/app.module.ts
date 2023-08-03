import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ButtonBackComponent } from './components/button-back/button-back.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardInfoDashboardComponent } from './components/card-info-dashboard/card-info-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { CustomersComponent } from './pages/customers/customers.component';
import { TableCustomersComponent } from './components/table-customers/table-customers.component';
import { FormsAddCustomerComponent } from './components/forms-add-customer/forms-add-customer.component';
import { AddCustomersComponent } from './pages/add-customers/add-customers.component';
import { AddCustomersAddressComponent } from './pages/add-customers-address/add-customers-address.component';
import { FormsAddCustomerAddressComponent } from './components/forms-add-customer-address/forms-add-customer-address.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ButtonBackComponent,
    SidenavComponent,
    DashboardComponent,
    NavbarComponent,
    CardInfoDashboardComponent,
    CustomersComponent,
    TableCustomersComponent,
    FormsAddCustomerComponent,
    AddCustomersComponent,
    AddCustomersAddressComponent,
    FormsAddCustomerAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
