import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from 'src/app/services/authenticate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerCredentials: FormGroup;

  validation_messages = {
    email: [
      { type: 'required', message: 'E-Mail Required' },
      { type: 'pattern', message: 'Invalid E-Mail' },
    ],
    password: [
      { type: 'required', message: 'Password Required' },
      { type: 'minLength', message: 'Less 6 Digits' },
    ],
    name: [
      { type: 'required', message: 'Name Required' },
      { type: 'minLength', message: 'Less 2 Digits' },
    ],
    lastName: [
      { type: 'required', message: 'Lastname Required' },
      { type: 'minLength', message: 'Less 2 Digits' },
    ],
  };
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {
    this.registerCredentials = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      LastName: ['', [Validators.required, Validators.minLength(2)]],
      image: ['', [Validators.required, Validators.minLength(0)]],
    });
  }

  ngOnInit() {}
  url = '../../../assets/profile.jpg';

  onFileChange(file) {
    if (file.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
  register(credentials) {
    this.authService.registerUser(credentials);
    this.navCtrl.navigateBack('/login');
  }
}
