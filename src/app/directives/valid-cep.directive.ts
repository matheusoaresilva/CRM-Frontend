import { ApiCepService } from '../services/api-cep.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Directive({
  selector: '[validCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidCepDirective,
    multi: true
  }]
})
export class ValidCepDirective implements AsyncValidator {

  constructor(private apiCepService: ApiCepService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.apiCepService.getCep(cep).pipe(map(
      
      (res: any) => res.erro? { 'validCep': true } : null
      //TODO: se aprofundar em descorbrir o por que não estar exibindo a mensagem 
    ))
  }

}
