import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ViewTasksComponent } from './view-tasks.component';

describe('ViewTasksComponent', () => {
  let component: ViewTasksComponent;
  let fixture: ComponentFixture<ViewTasksComponent>;
  let store: Store<AppState>;
  const initialState = {
    tasks: [],
    error: null,
    status: 'initial',
    users: []
  }
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTasksComponent ],
      providers: [provideMockStore({ initialState }), RouterTestingModule, RouterModule , {provide: ActivatedRoute, useValue: fakeActivatedRoute} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('applyFilter()', () => {
    it('should applyFilter', () => {
      const event = {
        target: {value: 'htj'}
      }
      component.applyFilter(event);
    });
  
  });
  describe('applyFilter()', () => {
    it('should applyFilter', () => {
      const spy = spyOn(component.router, 'navigate');
      component.goToDetails('4545');
      expect(spy).toHaveBeenCalled();
    });
  
  });

  describe('addTask()', () => {
  
    it('should addTask', () => {
      const storeSpy = spyOn(store, 'dispatch').and.callThrough();
      component.addTask();
      expect(storeSpy).toHaveBeenCalled();
    });
  
  });
  describe('deleteTask()', () => {
  
    it('should deleteTask', () => {
      const storeSpy = spyOn(store, 'dispatch').and.callThrough();
      component.deleteTask('565665');
      expect(storeSpy).toHaveBeenCalled();
    });
  
  });
  
  describe('getAssignedTo()', () => {
  
    it('should getAssignedTo', () => {
      component.users = [{
        id: '5656',
        userName: 'userName'
      }]
      component.getAssignedTo('5656');
      expect(component.getAssignedTo('5656')).toEqual(component.users[0])
    });
  
  });
  
  
});


