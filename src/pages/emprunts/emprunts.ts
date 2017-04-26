import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddObjectPage} from "../add-object/add-object";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

/**
 * Generated class for the Emprunts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-emprunts',
  templateUrl: 'emprunts.html',
})
export class EmpruntsPage {

  objectList: FirebaseListObservable<any>;
  item: FirebaseObjectObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire) {
    this.objectList = af.database.list('/object');
    this.item = af.database.object('/object');
  }


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function lors du click sur le petit bouton + ~~~~~~~~~~~~~~~~~~~~~~
  addObject(){
    this.navCtrl.push(AddObjectPage);
    console.log("addObject run");
  }


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function lors du click sur le bouton emprunter ~~~~~~~~~~~~~~~~~~~~
  emprunter(keyItem: string, etat : string){
    console.log("function 'emprunter' executed with keyItem = "+ keyItem + "dont l'etat est "+etat);
    const itemObservable = this.af.database.object('/object/'+keyItem);
    if (etat == "Disponible"){
      itemObservable.update({etat: 'Deja Emprunté'}).then;
      console.log("état passer de disponible à Deja emprunté");
    }
    else{
      itemObservable.update({etat: 'Disponible'});
      console.log("état passer de Deja emprunté à disponible");
    }
  }


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function lors du click sur le bouton Infos ~~~~~~~~~~~~~~~~~~~~

 /* displayInfos(keyItem: string){
    console.log("function 'displayInfos' executed with keyItem = "+ keyItem);
  }
*/
}
