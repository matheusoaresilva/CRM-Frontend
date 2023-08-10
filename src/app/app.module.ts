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
import { OrdersComponent } from './pages/orders/orders.component';
import { TableOrdersComponent } from './components/table-orders/table-orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { CatalogProductsComponent } from './components/catalog-products/catalog-products.component';
import { ProductCardDetailsComponent } from './components/product-card-details/product-card-details.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { FormsAddProductComponent } from './components/forms-add-product/forms-add-product.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SectionSettingsComponent } from './components/section-settings/section-settings.component';
import { MatMenuModule} from '@angular/material/menu';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    OrdersComponent,
    TableOrdersComponent,
    ProductsComponent,
    CatalogProductsComponent,
    ProductCardDetailsComponent,
    ProductsDetailsComponent,
    AddProductsComponent,
    FormsAddProductComponent,
    SettingsComponent,
    SectionSettingsComponent,
    ProfileDetailsComponent,
    ProfileComponent,
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
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
