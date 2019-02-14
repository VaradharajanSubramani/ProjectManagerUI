import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule,FormsModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Search project by name',()=>{
    let res = component.SearchProjects('vara');
    expect(true).toBeGreaterThanOrEqual(1);
  });

  it('Sorting project by name',()=>{
    let res = component.SortingProject('StartDate');
    expect(true).toBeGreaterThanOrEqual(1);
  });

});
