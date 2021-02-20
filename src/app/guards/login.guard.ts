import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate() {
    const logeado = await this.storage.get('logeado');
    if (logeado) {
      return true;
    } else {
      this.router.navigateByUrl('/home')
    }
  }
}
