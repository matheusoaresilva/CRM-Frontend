import { UserService } from './user.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface AuthResponse {
  Acesso_liberado: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl:string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
  ) { }

  login(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.httpClient.post(`${this.apiUrl}/auth/login`, user);
  }

  create(name: string, username: string, password: string, role: string[]): Observable<HttpResponse<AuthResponse>> {
    const user = { name, username, password, role };
    return this.httpClient.post<AuthResponse>(
      `${this.apiUrl}/auth/create`, 
      user, 
      { observe: 'response' }
    ).pipe(
      tap((response) => {
        const authToken = response.body?.Acesso_liberado || '';
        this.userService.saveToken(authToken);
      })
    );
  }
  
}
