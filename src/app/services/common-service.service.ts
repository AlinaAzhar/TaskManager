import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  tasks = [
    {
      id: '1665682710376',
    taskName: 'Prepare Login',
    createdBy: 'Project Manager',
    status: 'NEW' ,
    },
    {
      id: '1665682727744',
    taskName: 'Prepare Dashboard',
    createdBy: 'Project Manager',
    status: 'NEW' ,
    },
    {
      id: '1665682737032',
    taskName: 'Update Dashboard',
    createdBy: 'Project Manager',
    status: 'NEW' ,
    },
    {
      id: '1665682745832',
      taskName: 'Create graphs',
      createdBy: 'Project Manager',
      status: 'NEW' ,
    }
  ]
  constructor() { 
  }

  setTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
