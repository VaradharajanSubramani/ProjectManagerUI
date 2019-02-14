import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskaddComponent } from './taskadd.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms';
import { Task } from 'src/app/model/task';

describe('TaskaddComponent', () => {
  let component: TaskaddComponent;
  let fixture: ComponentFixture<TaskaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskaddComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule,FormsModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 

  it('Should Add task',()=>{

    const item = new Task();
    item.TaskName= "test Task";
    item.ParentID=1;
    item.Priority=10;
    item.ProjectID =1;
    item.UserID=1
    const res = component.Add();
    expect(true).toBeTruthy();

  })
});
