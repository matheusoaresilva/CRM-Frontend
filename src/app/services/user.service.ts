import { Login } from './../core/types/types';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { TokenServiceService } from './token-service.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userSubject = new BehaviorSubject<Login | null>(null); 

  constructor(private tokenService: TokenServiceService) { 
    if(this.tokenService.hasToken()){
      this.decodeJWT();
    }
  }

  private decodeJWT(){
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as Login;
    this.userSubject.next(user);
  }

  returnUser(){
    return this.userSubject.asObservable();
  }

  saveToken(token: string){
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout(){
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }

  loggedIn(){
    return this.tokenService.hasToken();
  }
}
