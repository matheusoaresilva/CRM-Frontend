import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCepService } from 'src/app/services/api-cep.service';

@Component({
  selector: 'app-forms-add-customer-address',
  templateUrl: './forms-add-customer-address.component.html',
  styleUrls: ['./forms-add-customer-address.component.css']
})
export class FormsAddCustomerAddressComponent implements OnInit {

  constructor(
    private router: Router,
    private getCepService: ApiCepService) { }


    ngOnInit(): void {}

  getCEP(e: any, f: NgForm) {
    const cep = e.target.value;
    if(cep !== ''){
      this.getCepService.getCep(cep).subscribe((res) => {
        console.log(res);
        this.completeAddress(res, f);
      });
    }
  }
  completeAddress(data: any, f: NgForm){
    f.form.patchValue({
      street: data.logradouro,
      number: data.complemento,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf
    })
  }
}


