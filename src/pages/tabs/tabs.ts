import { Component } from '@angular/core';

import { SubjectsPage} from "../subjects/subjects";
import { StudentsPage } from '../students/students';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StudentsPage;
  tab2Root = SubjectsPage;

  constructor() {

  }
}
