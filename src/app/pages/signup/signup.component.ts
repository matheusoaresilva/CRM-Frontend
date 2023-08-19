import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/types/types';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string ='';
  username: string = '';
  password: string = '';
  role: string = '';

  

  roles: Role[]= [
    {value: 'ROLE_USER', viewValue: 'User'},
    {value: 'ROLE_ADMIN', viewValue: 'Admin'},
    {value: 'ROLE_USER, ROLE_ADMIN', viewValue: 'User, Admin'},
  ];

  constructor(
    private router: Router, 
    private authService: AuthenticationService, 
    ){}
    
  register(){
    console.log(this.name);
    console.log(this.username);
    console.log(this.password);
    console.log(this.role);
    
    const rolesList = [this.role];



    this.authService.create(this.name, this.username, this.password, rolesList)
    .subscribe({
        next: (value) => {
          console.log('cadastro com sucesso', value);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err);
        }
      });

  }
}
// {
//   console.log(resultData);
//   if(resultData === "Usuário criado com sucesso"){
//     alert("Usuário criado com sucesso")
//     this.router.navigate(['/login'])
//   }else if(resultData === "Nome de usuário ou senha inválidos"){
//     alert("Nome de usuário ou senha inválidos")
    
//   }
// })
