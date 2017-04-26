import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController} from 'ionic-angular';
import {FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password/reset-password';
import {EmailValidator} from "../../validators/email";
import { AngularFire } from 'angularfire2';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm;
  loading:any;

  constructor(public nav: NavController, public authService: AuthService,
                    public formBuilder: FormBuilder, public alertCtrl:AlertController,
                    public loadingCtrl:LoadingController, public af : AngularFire ) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
        EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }


  loginUser():void {
    if(!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authService.loginUser(this.loginForm.value.email,
      this.loginForm.value.password).then( authService => {
        this.loading.dismiss().then(()=> {
          console.log("loginUser authService loading.dismiss go to HomePage");
          this.nav.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then(()=> {
          let alert = this.alertCtrl.create({
            message:error.message,
            buttons: [
              {
                text:"Ok",
                role:"cancel"
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  goToSignup(): void {
    this.nav.push(SignupPage);
  }


  goToResetPassword():void {
    this.nav.push(ResetPasswordPage);
  }

  logout(){
    this.af.auth.logout();
  }

}
