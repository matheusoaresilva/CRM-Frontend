import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username: string = '';
    password: string = '';

  constructor(private router: Router, private loginService: CustomersService, private http: HttpClient){}

  // #f="ngForm" (ngSubmit)="login(f)"

  signup(){
    console.log(this.username);
    console.log(this.password);
    
    let bodyData = {
      username: this.username,
      password: this.password
    };

    this.http.post("http://localhost:8080/auth/login", bodyData, { responseType: 'text'})
    .subscribe((resultData: string) =>
    {
      console.log(resultData);
      if(resultData === "Acesso liberado:"){
        this.router.navigate(['/dashboard'])
      }else if(resultData === "Nome de usuário ou senha inválidos"){
        alert("Nome de usuário ou senha inválidos")
        
      }
    })
  }


//   ngOnInit() {
//     sessionStorage.setItem('token', '');
// }

//   login(form : NgForm){
//     if(form.valid){
      
//       this.loginService.login(this.username, this.password).subscribe(
       
//         res =>{
//           console.log('passou sim');
          
//           console.log('Login successful', res);
//           return form.valid? this.router.navigate(['/dashboard'])
//           : alert('Invalid login form');
//         },
//         error =>{
//           console.log('nao passou');
          
//           console.log('Error saving', error);
//         }
//       );
//     }else{
//       alert('Form is invalid!');
//     }
    
//   }
}
