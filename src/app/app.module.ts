import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPipe } from "../pipes/search/search";

import { SubjectsPage } from "../pages/subjects/subjects";
import { StudentsPage } from '../pages/students/students';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentsProvider} from "../providers/students/students";

import { HttpClientModule} from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { AddstudentPage } from "../pages/addstudent/addstudent";
import { Toast } from "@ionic-native/toast";
import { SubjectsProvider } from '../providers/subjects/subjects';
import { AddsubjectPage} from "../pages/addsubject/addsubject";
import { SubjectDetailsPage} from "../pages/subject-details/subject-details";
import { MatriculaPage } from "../pages/matricula/matricula";
import { FilterSubjectsPage } from "../pages/filter-subjects/filter-subjects";
import {EditSubjectPage} from "../pages/edit-subject/edit-subject";
import {EditStudentPage} from "../pages/edit-student/edit-student";

@NgModule({
  declarations: [
    MyApp,
    SubjectsPage,
    StudentsPage,
    AddstudentPage,
    AddsubjectPage,
    SubjectDetailsPage,
    MatriculaPage,
    SearchPipe,
    TabsPage,
    FilterSubjectsPage,
    EditSubjectPage,
    EditStudentPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SubjectsPage,
    StudentsPage,
    AddstudentPage,
    AddsubjectPage,
    SubjectDetailsPage,
    MatriculaPage,
    FilterSubjectsPage,
    EditSubjectPage,
    EditStudentPage,
    TabsPage
  ],
  providers: [
    Toast,
    HttpClient,
    StudentsProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SubjectsProvider,
    SearchPipe
  ]
})
export class AppModule {}
