import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

import { TaskDetailsComponent } from './task-details.component';

describe('TaskDetailsComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;
  let store: Store<AppState>;
  const initialState = {
    tasks: [{
      id: '123',
      createdBy: 'createdBy',
      assignedTo: '1',
      status: 'New',
      taskName: 'taskName'
    }],
    error: null,
    status: 'initial',
    users: []
  }
  const fakeActivatedRoute = {
    snapshot: { data: {}, paramMap: {} }
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsComponent ],
      providers: [provideMockStore({ initialState }), RouterTestingModule, RouterModule , {provide: ActivatedRoute, useValue: {paramMap: of({ get: (key: any) => 'value' })}} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    
    // component.route.snapshot.paramMap = {}
    // component.route.params = of({id: ''})
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goToViewTasks()', () => {
    it('should ', () => {
      component.goToViewTasks();
    });
  });

  describe('updateTask()', () => {
  
    it('should updateTask ', () => {
      component.updatedTaskDetails = {
        id: '123',
        createdBy: 'createdBy',
        assignedTo: '1',
        status: 'New',
        taskName: 'taskName'
      }
      component.taskDetails = {
        id: '123',
        createdBy: 'createdBy',
        assignedTo: '1',
        status: 'Inprogress',
        taskName: 'taskName'
      }
      const storeSpy = spyOn(store, 'dispatch').and.callThrough();
      component.updateTask();
      expect(storeSpy).toHaveBeenCalled();
    });
    it('should updateTask ', () => {
      component.updatedTaskDetails = {
        id: '123',
        createdBy: 'createdBy',
        assignedTo: '2',
        status: 'New',
        taskName: 'taskName'
      }
      component.taskDetails = {
        id: '123',
        createdBy: 'createdBy',
        assignedTo: '1',
        status: 'New',
        taskName: 'taskName'
      }
      const storeSpy = spyOn(store, 'dispatch').and.callThrough();
      component.updateTask();
      expect(storeSpy).toHaveBeenCalled();
    });
  
  });
  
  
});
