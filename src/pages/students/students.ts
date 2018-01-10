import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { StudentsProvider } from "../../providers/students/students";
import { AddstudentPage } from "../addstudent/addstudent";
import { SearchPipe} from "../../pipes/search/search";
import { EditStudentPage } from "../edit-student/edit-student";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class StudentsPage {

  public students: any;
  public errorMessage: string;
  public term: string;

  constructor(
    private navCtrl: NavController, 
    private rest: StudentsProvider, 
    private toastCtrl: ToastController
  ) {
    this.term = '';
  }

  ionViewDidLoad() {
    this.getStudents();
  }

  ionViewWillEnter(){
    this.getStudents();
  }

  getStudents() {
    this.rest.getAllStudents().then(
      (students) => {
        this.students = students;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  deleteStudent(id){
    this.rest.deleteStudent(id).then(
      (deleted) => {
        let toast = this.toastCtrl.create({
          message: `Estudiante borrado`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.ionViewDidLoad();
        }, 1200);
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al borrar el estudiante`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          // this.navCtrl.popToRoot();
          // might try this instead
        }, 1200);
      }
    )
  }

  toAddStudent(){
    this.navCtrl.push(AddstudentPage);
  }

  toEditStudent(id){
    this.navCtrl.push(EditStudentPage, {id: id});
  }

  searchBy(ev: any) {
    this.term = ev.target.value;
  }
}
