import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TaskInfo } from 'src/app/models/task';
import { UserInfo } from 'src/app/models/userInfo';
import { AppState } from 'src/app/state/app.state';
import { addComment, assignTask, changeTaskStatus } from 'src/app/state/tasks-list/tasks-list.actions';
import { getTask, getUsers } from 'src/app/state/tasks-list/tasks-list.selectors';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  taskDetails!: TaskInfo;
  taskId!: string | null;
  getTaskDetails: any;
  updatedTaskDetails!: TaskInfo;
  users: UserInfo[] = []

  
  constructor(public route: ActivatedRoute, public store: Store<AppState>, public router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.taskId = params.get('id');
      if(this.taskId){
        this.getTaskDetails = this.store.pipe(select(getTask(this.taskId!)));
        this.getTaskDetails.subscribe((data: TaskInfo)=> {
          if(!data){
            this.router.navigate([''])
          }else{
            this.taskDetails = data;
            this.updatedTaskDetails = Object.assign({}, this.taskDetails);
          }
        },(error: any) => console.log(error));
        this.store.pipe(select(getUsers)).subscribe(data=> this.users = data)
      }else {
        this.router.navigate([''])
      }
    });
    
  }

  goToViewTasks(){
    this.router.navigate([''])
  }

  updateTask(){
    if(this.updatedTaskDetails.status !== this.taskDetails.status){
      this.store.dispatch(changeTaskStatus({id: this.updatedTaskDetails.id, status: this.updatedTaskDetails.status}))
    }
    if(this.updatedTaskDetails.assignedTo && this.updatedTaskDetails.assignedTo !== this.taskDetails.assignedTo){
      this.store.dispatch(assignTask({id: this.updatedTaskDetails.id, assignTo: this.updatedTaskDetails.assignedTo}))
    }

    if(this.updatedTaskDetails.comments && this.updatedTaskDetails.comments !== this.taskDetails.comments){
      this.store.dispatch(addComment({id: this.updatedTaskDetails.id, comments: this.updatedTaskDetails.comments}))
    }
  }

  checkIfChange(): boolean{
   return this.updatedTaskDetails.status == this.taskDetails.status && this.updatedTaskDetails.assignedTo == this.taskDetails.assignedTo  && this.updatedTaskDetails.comments== this.taskDetails.comments;
  }
}
