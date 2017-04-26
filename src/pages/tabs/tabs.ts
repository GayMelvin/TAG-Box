import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import {LoginPage} from "../login/login";

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = LoginPage;

  constructor() {

  }
}
