import { Component } from '@angular/core';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent {


  /* REALIZED,
    CANCELLED,
    PAID,
    NOT_AUTHORIZED,
    CONFIRMED,
    READY,
    OUT_FOR_DELIVERY,
    DELIVERED; */

  ordersContext = [
    {
      id: 2022011001,
      clientName: 'Smeyow',
      status: 'CANCELLED',
      total: 400,
      date: 'Mar 27, 2014'
    },
    {
      id: 2022011002,
      clientName: 'ABC Electronics',
      status: 'REALIZED',
      total: 1500,
      date: 'Jan 15, 2023'
    },
    {
      id: 2022011003,
      clientName: 'GadgetCo',
      status: 'PAID',
      total: 700,
      date: 'Jun 10, 2023'
    },
    {
      id: 2022011004,
      clientName: 'FashionHub',
      status: 'NOT_AUTHORIZED',
      total: 250,
      date: 'Mar 2, 2023'
    },
    {
      id: 2022011005,
      clientName: 'FoodFiesta',
      status: 'CONFIRMED',
      total: 3200,
      date: 'Aug 19, 2023'
    },
    {
      id: 2022011006,
      clientName: 'GreenGardens',
      status: 'READY',
      total: 890,
      date: 'Apr 5, 2023'
    },
    {
      id: 2022011007,
      clientName: 'TechZone',
      status: 'OUT_FOR_DELIVERY',
      total: 950,
      date: 'Sep 2, 2023'
    },
    {
      id: 2022011008,
      clientName: 'CosmicBakery',
      status: 'DELIVERED',
      total: 120,
      date: 'May 12, 2023'
    }
  ]
}
