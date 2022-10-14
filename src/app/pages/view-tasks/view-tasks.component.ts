import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { UserInfo } from 'src/app/models/userInfo';
import { AppState } from 'src/app/state/app.state';
import { addTask, removeTask } from 'src/app/state/tasks-list/tasks-list.actions';
import { getUsers, selectAllTasks } from 'src/app/state/tasks-list/tasks-list.selectors';



@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {
  public allTasks$ = new MatTableDataSource([]);
  newTaskForm: FormGroup = new FormGroup({
    taskName: new FormControl('', [Validators.required])
  })
  displayedColumns: string[] = ['taskName', 'createdBy', 'assignedTo', 'status', 'delete'];
  
  users: UserInfo[] = [];
  constructor(public store: Store<AppState>, public router: Router) { }

  ngOnInit(): void {
    this.store.pipe(select(getUsers)).subscribe(data=> this.users = data);
    this.store.pipe(select(selectAllTasks)).subscribe((data: any)=>{
      if(data){
        this.allTasks$.data = data
      }
    })
  
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.allTasks$.filter = filterValue.trim().toLowerCase();
  }

  goToDetails(id: string){
    this.router.navigate([`task-details/${id}`])
  }

  addTask(){
    this.store.dispatch(addTask({
      id: Date.now().toString(),
      taskName: this.newTaskForm.value.taskName,
      createdBy: 'Project Manager',
      status: 'NEW'
    }));
    this.newTaskForm.reset();
  }

  deleteTask(id: string){
    this.store.dispatch(removeTask({id}))
  }

  getAssignedTo(assignedUserId: string){
    return this.users.find((user)=> user.id === assignedUserId)
  }

}
