import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl:string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.httpClient.post(`${this.apiUrl}/auth/login`, user, { responseType: 'text' });
  }

  create(name: string, username: string, password: string, role: string[]): Observable<any> {
    const user = { name, username, password, role };
    return this.httpClient.post(`${this.apiUrl}/auth/create`, user, { responseType: 'text' });
  }
}
