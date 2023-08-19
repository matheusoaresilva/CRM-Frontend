import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-forms-add-product',
  templateUrl: './forms-add-product.component.html',
  styleUrls: ['./forms-add-product.component.css']
})
export class FormsAddProductComponent {

    name: string= '';
    description: string= '';
    price: number= 0;
    imgUrl: string= '';
    category: string= '';
    sku: number= 0;
    supplier: string= '';
    stock: number= 0;

    constructor(
      private router: Router,
      private productService: CustomersService
      ){}

      addProduct(form: NgForm){
        if(form.valid){
          const data = {
            name: this.name,
            description: this.description,
            price: this.price,
            imgUrl: this.imgUrl,
            category: this.category,
            sku: this.sku,
            supplier: this.supplier,
            stock: this.stock
          };
          this.productService.saveDataNewProduct(data).subscribe(
            res => {
              console.log('New product save with sucess!', res);
              return form.valid? this.router.navigate(['/products'])
              : alert('invalid');
            },
            error =>{
              console.log('Error saving', error);
              
            }
          );
        }else{
          alert('Form is invalid!');
        }
      }
}
