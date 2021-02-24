import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  validation_messages = {
    email: [
      { type: 'required', message: 'E-Mail requerido' },
      { type: 'pattern', message: 'E-Mail Invalido' },
    ],
    password: [
      { type: 'required', message: 'Password requerido' },
      { type: 'minLength', message: 'Mínimo 6 Dígitos' },
    ],
  };
  errorMessage: string = '';
  constructor(
    private storage: Storage,
    private router: Router,
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingControler: LoadingController,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    this.credentials = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  login(credentials) {
    this.authService
      .login(credentials)
      .then((res) => {
        this.storage.set('logeado', true);
        this.errorMessage = '';
        this.navCtrl.navigateForward('/home');
      })
      .catch((err) => {
        this.errorMessage = err;
      });
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
