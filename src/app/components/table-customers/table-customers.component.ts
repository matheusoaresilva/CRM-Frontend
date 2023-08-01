import { Component } from '@angular/core';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.css']
})
export class TableCustomersComponent {
  tableContext = [
    {
      imgUrl: '../../../assets/icon-perfil-teste (1).png',
      clientName: 'John Doe',
      email: 'john.doe@example.com',
      dateCreated: '2022-05-15',
      dateOrder: '2022-05-20',
    },
    {
      imgUrl: '../../../assets/icon-perfil-teste (2).png',
      clientName: 'Jane Smith',
      email: 'jane.smith@example.com',
      dateCreated: '2021-11-30',
      dateOrder: '2022-01-10',
    },
    {
      imgUrl: '../../../assets/icon-perfil-teste (3).png',
      clientName: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      dateCreated: '2023-02-10',
      dateOrder: '2023-02-15',
    },
    {
      imgUrl: '../../../assets/icon-perfil-teste (4).png',
      clientName: 'Emily Williams',
      email: 'emily.williams@example.com',
      dateCreated: '2023-07-01',
      dateOrder: '2023-07-10',
    },
  ];
}

