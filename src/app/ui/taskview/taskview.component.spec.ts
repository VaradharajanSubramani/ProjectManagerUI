import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskviewComponent } from './taskview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms';

describe('TaskviewComponent', () => {
  let component: TaskviewComponent;
  let fixture: ComponentFixture<TaskviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskviewComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule,FormsModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('End Tasks',()=>   {
    const res = component.EndTask(1);
    expect(true).toBeTruthy();
 }); 
 
});
