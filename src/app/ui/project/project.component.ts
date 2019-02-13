import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import {SharedService} from 'src/app/service/shared.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import { User } from 'src/app/model/user';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [DatePipe]
})
export class ProjectComponent implements OnInit {

  form:FormGroup;
  register(form:FormGroup)
  {
    form.reset();

  }
  datevisibility=true;
  proj:any;
  isEdit=false;
  projects:Project[];
  msg:any;
  users:User[];
  selectedUser:User;
  constructor(private service:SharedService, private router:Router,public datePipe : DatePipe) { 
    this.proj=new Project;
  }

  ngOnInit() {
    this.service.GetAllProjects().subscribe(data=>{
      this.projects = data;         
    });
    
  }

  enableDate()
  {
  this.datevisibility = !this.datevisibility;
  if(this.datevisibility == false){
  var today= new Date();
  this.proj.StartDate = new Date().toISOString().split('T')[0];
  this.proj.EndDate = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
  }else{
    this.proj.StartDate = "";
    this.proj.EndDate="";
  }
  return;
  }

  SortingProject(name:string)
  {
    this.service.SortingProjects(name).subscribe(data=>{
      this.projects = data;           
    });
  }

  SearchProjects(name:string)
  {
    this.service.SearchProjects(name).subscribe(data=>{
      this.projects = data; 
                
    });
  }

  EditProject(id:number)
  {     
    this.service.GetProjectDetails(id).subscribe(data=>{
      this.proj =data;
      if(this.proj.StartDate != null)
      {
        this.datevisibility = true;
      }
      console.log(this.proj.UserID)
      if(this.proj.UserID!=0)
      {        
        this.service.GetUserDetails(this.proj.UserID).subscribe(data=>{
          this.selectedUser =  data;
          this.SelectUser();

        });
      }
      this.isEdit= true;
    });
  }
  SuspendProject(id:number)
  {
    this.service.SuspendProject(id).subscribe(data=>{
      this.msg =data;
      this.service.GetAllProjects().subscribe(data=>{
        this.projects = data;         
      });
    });
  }

  GetUsers()
  {
    this.service.GetAllUsers().subscribe(data=>{
      this.users = data;           
    });

  }
  SelectUser()
  {
    console.log('select user');
    this.proj.UserID=this.selectedUser.UserID;
    this.proj.UserName=this.selectedUser.FirstName + " "+ this.selectedUser.LastName;
    
  }

  onItemChange(usr:User)
  {
   this.selectedUser=usr;
   console.log('itemchaneg');
  }
  Addproject()
  {
    this.service.SaveProject(this.proj).subscribe(data=>{
      this.msg= data;
    })
  }
  
}
