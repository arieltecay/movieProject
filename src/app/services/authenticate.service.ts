import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private storage: Storage) {}

  async login(credentials) {
    const user = await this.storage.get('user');
    return new Promise((accept, reject) => {
      if (
        user.email == credentials.email &&
        user.password == btoa(credentials.password)
      ) {
        accept('Login Correcto');
      } else {
        reject('Login Incorrecto');
      }
    });
  }

  registerUser(userData) {
    return this.storage.set('user', userData);
  }
}
