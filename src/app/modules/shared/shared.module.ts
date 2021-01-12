import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './components/week/week.component';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [
    WeekComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeekComponent,
    TaskComponent,
  ]
})
export class SharedModule { }
