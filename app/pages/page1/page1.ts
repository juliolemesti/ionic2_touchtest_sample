import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { MaskDirective } from "./form-directive";

@Component({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [ MaskDirective ]
})
export class Page1 {

  @ViewChild('cpf') cpf:any;
  user:any = {};

  constructor(public navCtrl:NavController) {
  }

  ionViewLoaded() {
    console.log('view loaded', this.cpf);
  }

  ionViewDidEnter() {
    console.log('view did enter', this.cpf);
  }

  click() {
    console.log('click', this.cpf);
  }
}
