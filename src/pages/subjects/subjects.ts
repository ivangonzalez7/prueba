import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubjectsProvider } from "../../providers/subjects/subjects";
import { AddsubjectPage } from "../addsubject/addsubject";
import { SubjectDetailsPage } from "../subject-details/subject-details";
import { ToastController } from "ionic-angular";
import { SearchPipe } from "../../pipes/search/search";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class SubjectsPage {

  public subjects: any;
  public errorMessage: string;
  public term: string;
  public modalidad: string;
  public cuatrimestre: string;
  public showfilters: boolean;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private rest: SubjectsProvider,
    private toastCtrl: ToastController,
    ) {}

  ionViewDidLoad() {
    this.term = '';
    this.showfilters = false;
    this.getSubjects();
  }

  ionViewWillEnter(){
    this.getSubjects();
  }

  getSubjects() {
    this.rest.getAllSubjects().then(
      (subjects) => {
        this.subjects = subjects;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  deleteSubject(id){
    this.rest.deleteSubject(id).then(
      (deleted) => {
        let toast = this.toastCtrl.create({
          message: `Asignatura borrada`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.ionViewDidLoad();
        }, 1200);
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al borrar la asignatura`,
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

  toAddSubject(){
    this.navCtrl.push(AddsubjectPage);
  }

  toDetails(id){
    this.navCtrl.push(SubjectDetailsPage, {id: id});
  }

  searchBy(ev: any) {
    this.term = ev.target.value;
  }

  sort(){
    this.rest.showSubjectSorted().then(
      (subjects) => {
        this.subjects = subjects;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  deleteFilters()
  {
    this.getSubjects();
  }

  filterbyMod(modalidad){
    this.rest.showSubject_byEstudios(modalidad).then(
      (subjects) => {
        this.subjects = subjects;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  filterbyCuatri(cuatri){
    this.rest.showSubject_byCuatri(cuatri).then(
      (subjects) => {
        this.subjects = subjects;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  toggleFilters(){
    this.showfilters = true;
  }

  hideFilters(){
    this.showfilters = false;
  }
}
