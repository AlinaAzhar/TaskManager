import { createAction, props } from '@ngrx/store';
import { TaskInfo } from 'src/app/models/task';

export const addTask = createAction(
  '[View Tasks Page] Add Task',
  props<TaskInfo>()
);

export const removeTask = createAction(
  '[View Tasks Page] Remove Task',
  props<{ id: string }>()
);

export const assignTask = createAction(
  '[view Details Page] Assign Task', props<{id: string, assignTo: string}>()
);

export const changeTaskStatus = createAction(
  '[view Details Page] Change Status', props<{id: string, status: string}>()
);

export const addComment = createAction(
  '[view Details Page] Add Comment', props<{id: string, comments: string}>()
);

// export const loadTodos = createAction('[Todo Page] Load Todos');

// export const loadTodosSuccess = createAction(
//   '[Todo API] Todo Load Success',
//   props<{ todos: TaskInfo[] }>()
// );

// export const loadTodosFailure = createAction(
//   '[Todo API] Todo Load Failure',
//   props<{ error: string }>()
// );
