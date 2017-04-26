import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EmpruntsPage } from './emprunts';

@NgModule({
  declarations: [
    EmpruntsPage,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    EmpruntsPage
  ]
})
export class EmpruntsModule {}
