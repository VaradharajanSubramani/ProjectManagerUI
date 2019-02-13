import { Component, OnInit,ViewChild } from '@angular/core';
import{SharedService} from 'src/app/service/shared.service';
import {Task} from 'src/app/model/task';
import {Parenttask} from 'src/app/model/parenttask';
import{ActivatedRoute,Router,RouterModule} from '@angular/router';
import { User } from 'src/app/model/user';
import { Project } from 'src/app/model/project';


@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {

  item:Task;
  msg:any;  
  pitem :Parenttask;
  users :User[];
  projs:Project[];
  selectedUser:User;
  selectedProject:Project;
  @ViewChild('myForm') formValues;

  constructor(private service:SharedService, private router:Router) {
    this.item= new Task();
    //this.pitem = new ParentTask();
   }

  ngOnInit() {
    this.service.GetParentTasks().subscribe(res=>
      {
        this.pitem=res;        
        console.log(this.pitem);
      });
  }
  Add()
  {    
    console.log(this.item);
    this.service.Add(this.item).subscribe(res=>
      {this.msg=res;
        this.router.navigate(['taskview']);
      });    
  }

  clear()
  {
    console.log("clear");
    this.formValues.resetForm();
  }
  GetUsers()
  {
    this.service.GetAllUsers().subscribe(data=>{
      this.users = data;           
    });

  }
  onUserItemChange(usr:User)
  {
   this.selectedUser=usr;  
  }
  SelectUser()
  {
    console.log('select user');
    this.item.UserID=this.selectedUser.UserID;
    this.item.UserName=this.selectedUser.FirstName + " "+ this.selectedUser.LastName;    
  }

  GetProjects()
  {
    this.service.GetAllProjects().subscribe(data=>{
      this.projs = data;           
    });
  }

  onProjectItemChange(prj:Project)
  {
   this.selectedProject=prj;   
  }
  SelectProject()
  {    
    this.item.ProjectID=this.selectedProject.ProjectID;
    this.item.Project.ProjectID =this.selectedProject.ProjectID;
    this.item.Project.ProjectName=this.selectedProject.ProjectName;
    
  }
}
