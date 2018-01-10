import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { StudentsProvider} from "../../providers/students/students";

/**
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html',
})
export class AddstudentPage {

  public student: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public rest: StudentsProvider, 
    public toastCtrl: ToastController
  ) {
    console.log("AddStudentPage");
    this.student = {
      nombre: '',
      apellido: '',
      edad: '',
      genero: ''
    };
  }

  saveStudent() {
    // this.rest.saveStudent({nombre:this.nombre, apellido:this.apellido, edad:this.edad, genero:this.genero})
    this.rest.saveStudent(this.student)
      .then((result) => {
        let toast = this.toastCtrl.create({
          message: `Estudiante añadido`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          // this.navCtrl.popToRoot();
          // might try this instead
          this.navCtrl.pop();
        }, 1200);
      //this.router.navigate(['/student-details', id]);
    }, (err) => {
      console.log(err);
        let toast = this.toastCtrl.create({
          message: `Error al añadir estudiante`,
          duration: 1000
        });
        toast.present();
    });
  }
}
