import { Component, Input, OnInit } from '@angular/core';
import { Customers } from 'src/app/core/types/types';

import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.css'],

})
export class TableCustomersComponent implements OnInit {
  @Input() customer!: Customers;
  
  p:number = 1;
  itemsPerPage:number = 8;
  total:any;

  customers!: Customers[];
  filteredCustomers!: Customers[];
  constructor( private serviceCustomers: CustomersService){}
  ngOnInit(): void {
    this.serviceCustomers.list()
    .subscribe(
      res => {
        this.customers = res;
        this.filteredCustomers = res;
        this.total = res.length;
      }
    )
  }

  searchText = '';

  searchCustomers(): void{
    const searchTextLower = this.searchText.toLowerCase().trim();
    this.filteredCustomers = this.customers.filter(customer => {
      return customer.firstName.toLowerCase().includes(searchTextLower) || customer.lastName.toLowerCase().includes(searchTextLower);
    })
  }

}

