import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-forms-add-customer',
  templateUrl: './forms-add-customer.component.html',
  styleUrls: ['./forms-add-customer.component.css']
})
export class FormsAddCustomerComponent {

  firstName: string = '';
    lastName: string = '';
    cpf: string= '';
    gender: string= '';
    phone: string= '';
    email: string= '';

  constructor(
    private router: Router,
    private customersService: CustomersService
    ){}

  addCustomer(form : NgForm){

    if(form.valid ){

    

    const data = {firstName: this.firstName, lastName: this.lastName, cpf: this.cpf, gender: this.gender, phone: this.phone, email: this.email};
    this.customersService.saveDataNewCustomer(data).subscribe(
      res => {
        console.log('New Customer save with sucess!', res);
        return form.valid? this.router.navigate(['customers/addcustomer-address'])
        : alert('Invalid');
      },
      error =>{
        console.log('Error saving', error);
      }
    );
  }else{
    alert('Form is invalid');
  }
  }
}
