import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor() {}
  login(credentials) {
    return new Promise((accept, reject) => {
      if (
        credentials.email == 'ariel@gmail.com' &&
        credentials.password == '123456'
      ) {
        accept('Login Correcto');
      } else {
        reject('Login Incorrecto');
      }
    });
  }
}
