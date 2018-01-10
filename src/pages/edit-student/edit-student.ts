import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { StudentsProvider } from "../../providers/students/students";

/**
 * Generated class for the EditStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  public id: any;
  public student;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private rest: StudentsProvider,
    private toastCtrl: ToastController,)
  {
    this.student = {
      nombre: '',
      apellido: '',
      edad: '',
      genero: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditStudentPage');
    this.id = this.navParams.get('id');
    this.getStudent(this.id);
  }

  getStudent(id){
    this.rest.showStudent(id).then(
      (student) => {
        this.student.nombre = student['nombre'];
        this.student.apellido = student['apellido'];
        this.student.edad = student['edad'];
        this.student.genero = student['genero'];
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


  editStudent(){
    this.rest.updateStudent(this.id, this.student)
      .then((result) => {
        let toast = this.toastCtrl.create({
          message: `Estudiante actualizado`,
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
          message: `Error al actualizar estudiante`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1200);
      });
  }
}
