import { createReducer, on } from '@ngrx/store';
import { TaskInfo } from 'src/app/models/task';
import { UserInfo } from 'src/app/models/userInfo';
import { addComment, addTask, assignTask, changeTaskStatus, removeTask } from './tasks-list.actions';


export interface TaskListState {
  tasks: TaskInfo[];
  error: string | null;
  status: string;
  users: UserInfo[]
}

export const initialState: TaskListState = {
  tasks: JSON.parse(localStorage.getItem('tasks')!),
  error: null,
  status: 'initial',
  users: [
    {
      id: '1',
      userName: 'Tester'
    },
    {
      id: '2',
      userName: 'Developer'
    },
    {
      id: '3',
      userName: 'Product Owner'
    },
  ]
};

export const taskListReducer = createReducer(
  initialState,
  on(addTask, (state, taskInfo) => ({
    ...state,
    tasks: [...state.tasks, taskInfo],
  })),
  on(removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(assignTask, (state, { id, assignTo }) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.tasks.forEach((task: TaskInfo) => {
      if (task.id == id) {
        task.assignedTo = assignTo;
        task.assignedDate = new Date();
      }
    })
    return stateCopy;
  }),
  on(changeTaskStatus, (state, { id, status }) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.tasks.forEach((task: TaskInfo) => {
      if (task.id == id) {
        task.status = status;
      }
    })
    return { ...stateCopy };
  }),
  on(addComment, (state, {id, comments})=> {
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.tasks.forEach((task: TaskInfo)=> {
      if(task.id === id){
        task.comments = comments;
      }
    })
    return stateCopy
  })

);
