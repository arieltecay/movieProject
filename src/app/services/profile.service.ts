import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private userData: String = '';
  constructor(private storage: Storage) {}

  getDetails() {
    return this.storage.get('user')
  }
}
