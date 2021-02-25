import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile = '';
  private file: File;
  constructor(
    private dataUser: ProfileService,
    private navCtrl: NavController,
    private http: HttpClient,
    private storge: Storage
  ) {}

  ngOnInit() {
    // console.log(this.dataUser.getDetails().then());
    this.dataUser.getDetails().then((res) => {
      this.userProfile = res;
      console.log('Datos Completos', this.userProfile);
    });
  }
  home() {
    this.navCtrl.navigateBack('/home');
  }
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
}
