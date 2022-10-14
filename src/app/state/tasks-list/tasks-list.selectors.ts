import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';
import { TaskInfo } from 'src/app/models/task';
import { AppState } from '../app.state';
import { TaskListState } from './tasks-list.reducer';

export const selectTasks = (state: AppState) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TaskListState) => state.tasks
);

export const getTask = (id:string)=> createSelector(
  selectTasks,
  (state: TaskListState)=> state.tasks.find((task)=> task.id == id)
)

export const getUsers =createSelector(
  selectTasks,
  (state: TaskListState)=> state.users
)
