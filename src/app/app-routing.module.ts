import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { ViewTasksComponent } from './pages/view-tasks/view-tasks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-list',
    pathMatch: 'full'
  },
  { 
    path: 'task-list',
    component: ViewTasksComponent
  },
  { 
    path: 'task-details/:id',
    component: TaskDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
