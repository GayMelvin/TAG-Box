import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EmpruntsPage } from '../emprunts/emprunts'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public navEmprunts(){
    this.navCtrl.push(EmpruntsPage);
  }


}
