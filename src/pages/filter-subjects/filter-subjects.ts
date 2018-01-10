import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the FilterSubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-subjects',
  templateUrl: 'filter-subjects.html',
})
export class FilterSubjectsPage {

  modalidad: string = '';
  cuatrimestre: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterSubjectsPage');
  }

  applyFilters(){
    console.log(this.modalidad + this.cuatrimestre);
    this.viewCtrl.dismiss(this.navParams.data({modalidad:this.modalidad, cuatrimestre:this.cuatrimestre}));
  }
}
