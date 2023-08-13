import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-add-customer',
  templateUrl: './forms-add-customer.component.html',
  styleUrls: ['./forms-add-customer.component.css']
})
export class FormsAddCustomerComponent {


  constructor(private router: Router){}

  addCustomer(form : NgForm){
    return form.valid? this.router.navigate(['customers/addcustomer-address'])
    : alert('Invalid');
  }
}
