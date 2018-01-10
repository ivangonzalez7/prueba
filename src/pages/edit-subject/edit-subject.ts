import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { SubjectsProvider} from "../../providers/subjects/subjects";
/**
 * Generated class for the EditSubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-subject',
  templateUrl: 'edit-subject.html',
})
export class EditSubjectPage {

  id: any;
  nombre: string;
  estudios: string;
  cuatrimestre: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: SubjectsProvider,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSubjectPage');
    this.id = this.navParams.get('id');
    this.getSubject(this.id);
  }

  getSubject(id){
    this.rest.showSubject(id).then(
      (subject) => {
        this.nombre = subject['nombre'];
        this.estudios = subject['estudios'];
        this.cuatrimestre = subject['cuatrimestre'];
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al cargar detalles`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1200);
      }
    )
  }

  editSubject(){
    this.rest.updateSubject(this.id, {nombre: this.nombre, estudios:this.estudios, cuatrimestre:this.cuatrimestre}).then(
      (subject) => {
        let toast = this.toastCtrl.create({
          message: `Asignatura actualizada`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.viewCtrl.dismiss();
        }, 1200);
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al actualizar asignatura`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1200);
      }
    )
  }

}
