import { Injectable } from '@angular/core';


const KEY = 'key';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  saveToken(token: string){
    return localStorage.setItem(KEY, token);
  }

  deleteToken(){
    localStorage.removeItem(KEY);
  }

  returnToken(){
    return localStorage.getItem(KEY) ?? "";
  }

  hasToken(){
    return !!this.returnToken();
  }
}
