import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/core/types/types';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.css']
})
export class CatalogProductsComponent implements OnInit {
  @Input() product!: Products;
  
  p:number = 1;
  itemsPerPage:number = 10;
  total:any;

  products!: Products[];
  filteredProducts!: Products[];
  constructor( private serviceProducts: CustomersService){}
  ngOnInit(): void {
    this.serviceProducts.listProducts()
    .subscribe(
      res => {
        this.products = res;
        this.filteredProducts = res;
        this.total = res.length;
      }
    )
  }

  searchText = '';

  searchProducts(): void{
    const searchTextLower = this.searchText.toLowerCase().trim();
    this.filteredProducts = this.products.filter(product => {
      return product.description.toLowerCase().includes(searchTextLower) || product.category.toLowerCase().includes(searchTextLower);
    })
  }

 
  
}
