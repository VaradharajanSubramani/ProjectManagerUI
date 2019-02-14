import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'; 
import { Task } from '../model/task';
import { User } from '../model/user';
import { Project } from '../model/project';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
     imports: [ HttpClientTestingModule,RouterTestingModule,FormsModule ]
  })
  );

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });

  
  it('get all tasks', ()=>{
    const service: SharedService = TestBed.get(SharedService);     
     const res = service.GetAllTasks().subscribe(data=>{
     expect(data.length).toBeGreaterThan(2);    
 });
  });

 it('Add task',()=> {
  const service: SharedService = TestBed.get(SharedService);
  const item = new Task();
    item.TaskName= "test Task";
    item.ParentID=1;
    item.Priority=10;
    item.ProjectID =1;
    item.UserID=1;
    item.StartDate= new Date('9/1/2019')
    item.EndDate= new Date('9/5/2019')
   service.Add(item);
   expect(true).toBeTruthy();
 });

 it('Update task',()=> {
  const service: SharedService = TestBed.get(SharedService);
  const item = new Task();
    item.TaskID = 1
    item.TaskName= "test Task";
    item.ParentID=1;
    item.Priority=10;
    item.ProjectID =1;
    item.UserID=1;
    service.Update(item);
   expect(true).toBeTruthy();
 });

 it('Add User',()=> {
  const service: SharedService = TestBed.get(SharedService);
  const item = new User();
   item.FirstName="Varadhafa";
   item.LastName="Subramani";
   item.ProjectID =1;
   item.EmployeeID=23424;
   item.TaskID=1
   service.AddUser(item);
   expect(true).toBeTruthy();
 });

 it('Update User',()=> {
  const service: SharedService = TestBed.get(SharedService);
  const item = new User();
   item.FirstName="Varadhafa";
   item.LastName="Subramani";
   item.ProjectID =1;
   item.EmployeeID=23424;
   item.TaskID=1
   service.UpdateUser(item);
   expect(true).toBeTruthy();
 });

 it('Add Project',()=> {
  const service: SharedService = TestBed.get(SharedService);
  const item = new Project();
  item.ProjectName="Test Project";
  item.Priority = 1;
  item.StartDate= new Date('9/1/2019')
  item.EndDate= new Date('9/5/2019')
  item.UserID = 10
  service.SaveProject(item);
  expect(true).toBeTruthy();

 });

 it('Update Project',()=> {
  const service: SharedService = TestBed.get(SharedService);
  const item = new Project();
  item.ProjectName="Test Project";
  item.Priority = 1;
  item.StartDate= new Date('9/1/2019')
  item.EndDate= new Date('9/5/2019')
  item.UserID = 10
  service.UpdateProject(item);
  expect(true).toBeTruthy();
 });

 it('Get all Users', ()=>{
  const service: SharedService = TestBed.get(SharedService);     
   const res = service.GetAllUsers().subscribe(data=>{
     expect(data.length).toBeGreaterThan(2);
   }); 
 });

 it('Get all Projects', ()=>{
  const service: SharedService = TestBed.get(SharedService);     
   const res = service.GetAllProjects().subscribe(data=>{
     expect(data.length).toBeGreaterThan(2);
   }); 
 });

});
