import { Component, Input, OnInit } from '@angular/core';
import { Orders } from 'src/app/core/types/types';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent implements OnInit {
  @Input() order!: Orders;
  
  p:number = 1;
  itemsPerPage:number = 10;
  total:any;

  orders!: Orders[];
  filteredOrders!:Orders[];
  constructor(
    private serviceOrders: CustomersService ){}
  ngOnInit(): void {
    this.serviceOrders.listOrders()
    .subscribe(
      res => {
        this.orders = res;
        this.filteredOrders = res;
        this.total = res.length;
      }
    )
  }
  searchText = '';

  searchOrders(): void{
    const searchTextLower = this.searchText.toLowerCase().trim();
    this.filteredOrders = this.orders.filter(order => {
      return order.status.toLowerCase().includes(searchTextLower);
    })
  }

  /* REALIZED,
    CANCELLED,
    PAID,
    NOT_AUTHORIZED,
    CONFIRMED,
    READY,
    OUT_FOR_DELIVERY,
    DELIVERED; */

  
}
