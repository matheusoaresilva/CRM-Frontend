import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-add-customer',
  templateUrl: './forms-add-customer.component.html',
  styleUrls: ['./forms-add-customer.component.css']
})
export class FormsAddCustomerComponent {

  show: boolean = false;

  toggle (){
    this.show = !this.show;
  }
}
