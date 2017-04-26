import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from "angularfire2";

/**
 * Generated class for the AddObject page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-object',
  templateUrl: 'add-object.html',
})
export class AddObjectPage {

  objectList: FirebaseListObservable<any>;



  constructor(public navCtrl: NavController, public navParams: NavParams,
                public af: AngularFire) {
      this.objectList = af.database.list('/object');
  }

  addObject(name: string, descr: string, photo){


    this.objectList.push({
      name:name,
      description:descr,
      etat: "Disponible"
    }).then(newObject => {
      this.navCtrl.pop();
    }, error =>{
      console.log(error);
    });
  }


}
