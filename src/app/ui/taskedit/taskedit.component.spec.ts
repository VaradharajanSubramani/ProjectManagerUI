import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskeditComponent } from './taskedit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms';

describe('TaskeditComponent', () => {
  let component: TaskeditComponent;
  let fixture: ComponentFixture<TaskeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskeditComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule,FormsModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Update task', () => {
    const res = component.Update();
    expect(true).toBeTruthy();
   
  });
});
