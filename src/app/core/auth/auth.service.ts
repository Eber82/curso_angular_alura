import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  private API_URL = 'http://localhost:3000';
  
  autenthicate(userName : string, password : string){
    
      return this.http
          .post(this.API_URL + '/user/login', 
                { userName : userName, password : password },
                {observe : 'response'}) //3º parametro para 'liberar' o acesso ao response da requisição
          .pipe(tap(res => {
              const authToken = res.headers.get('x-access-token');
              console.log(`User ${userName} authenticated with token ${authToken}`);
          }))
  }
}
