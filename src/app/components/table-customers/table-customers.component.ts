import { Component, Input, OnInit } from '@angular/core';
import { Customers } from 'src/app/core/types/types';

import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.css']
})
export class TableCustomersComponent implements OnInit {
  @Input() customer!: Customers;
  
  customers!: Customers[];
  constructor( private serviceCustomers: CustomersService){

  }
  ngOnInit(): void {
    this.serviceCustomers.list()
    .subscribe(
      res => {
        this.customers = res;
      }
    )
  }
}

