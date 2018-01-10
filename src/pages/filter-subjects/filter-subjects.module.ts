import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterSubjectsPage } from './filter-subjects';

@NgModule({
  declarations: [
    FilterSubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterSubjectsPage),
  ],
})
export class FilterSubjectsPageModule {}
