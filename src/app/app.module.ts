import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ViewTasksComponent } from './pages/view-tasks/view-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import { taskListReducer } from './state/tasks-list/tasks-list.reducer';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { TextFieldModule} from '@angular/cdk/text-field'
@NgModule({
  declarations: [
    AppComponent,
    ViewTasksComponent,
    TaskDetailsComponent,
    
  ],
  imports: [
    MatTableModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    StoreModule.forRoot({tasks: taskListReducer}),
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
