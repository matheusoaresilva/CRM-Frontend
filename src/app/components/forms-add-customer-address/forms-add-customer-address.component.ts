import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCepService } from 'src/app/core/services/api-cep.service';

@Component({
  selector: 'app-forms-add-customer-address',
  templateUrl: './forms-add-customer-address.component.html',
  styleUrls: ['./forms-add-customer-address.component.css']
})
export class FormsAddCustomerAddressComponent {

  constructor(
    private router: Router,
    private getCepService: ApiCepService) { }

  getCEP(e: any, f: NgForm) {
    const cep = e.target.value;
    if(cep !== ''){
      this.getCepService.getCep(cep).subscribe(res =>
      {
        console.log(res);
        this.completeAddress(res, f);
      });
    }
  }
  completeAddress(data: any, form: NgForm){
    form.form.patchValue({
      street: data.logradouro,
      number: data.complemento,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf
    })
  }
}


