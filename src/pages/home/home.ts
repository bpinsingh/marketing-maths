import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
toggleFlag=false;
  constructor(public navCtrl: NavController) {
    
  }
toggle(){
  if (this.toggleFlag) {
    this.toggleFlag=false
  } else {
    this.toggleFlag=true;
  }
}
}
