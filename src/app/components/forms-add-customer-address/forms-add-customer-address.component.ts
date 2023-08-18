import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCepService } from 'src/app/services/api-cep.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-forms-add-customer-address',
  templateUrl: './forms-add-customer-address.component.html',
  styleUrls: ['./forms-add-customer-address.component.css']
})
export class FormsAddCustomerAddressComponent{


    street: string ='';
    number: number=0;
    neighborhood: string='';
    city: string='';
    state: string='';
    country: string='';
    zipcode: string='';

  constructor(
    private router: Router,
    private getCepService: ApiCepService,
    private customersService: CustomersService
    ) { }

    addAddress(form: NgForm){
      if(form.valid){
        const data = {
          street: this.street,
          number: this.number,
          neighborhood: this.neighborhood,
          city: this.city,
          state: this.state,
          country: this.country,
          zipcode: this.zipcode
        };
        this.customersService.saveDataNewAddress(data).subscribe(
          res => {
            console.log('New Address save with sucess!!!!!!!!!!!', res);
            return form.valid? this.router.navigate(['customers'])
            : alert('Address Invalid');
          },
          error =>{
            console.log('Error saving', error);
          }
        );
      }else{
        alert('Form is invalid');
      }
    }

    // TODO: verificar address

  // getCEP(e: any, f: NgForm) {
  //   const cep = e.target.value;
  //   if(cep !== ''){
  //     this.getCepService.getCep(cep).subscribe((res) => {
  //       console.log(res);
  //       this.completeAddress(res, f);
  //     });
  //   }
  // }
  // completeAddress(data: any, f: NgForm){
  //   f.form.patchValue({
  //     street: data.logradouro,
  //     number: data.complemento,
  //     neighborhood: data.bairro,
  //     city: data.localidade,
  //     state: data.uf
  //   })
  // }
}


