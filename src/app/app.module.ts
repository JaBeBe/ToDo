import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DoTaskComponent } from './do-task/do-task.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CheckedDirective } from './shared/checked.directive';
import { GetDateDirective } from './shared/get-date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortPipe } from './shared/sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    DoTaskComponent,
    AddComponent,
    CheckedDirective,
    GetDateDirective,
    TransformTaskPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
