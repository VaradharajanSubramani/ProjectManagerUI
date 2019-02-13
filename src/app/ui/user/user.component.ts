import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import {SharedService} from  'src/app/service/shared.service';
import {Router} from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form:FormGroup;
  register(form:FormGroup)
  {
    form.reset();

  }
 users:User[];
  user:any;
  msg:any; 
  isEdit:boolean =false;
  constructor(private service: SharedService, private router :Router) {
    this.user= new User();
   }

  ngOnInit() {
     this.service.GetAllUsers().subscribe(data=>{
     this.users= data;
    }); 
  }

  AddUser()
  {    
    
    console.log(this.isEdit);
    if(this.isEdit == false)
    {
      console.log('Add');
      this.service.AddUser(this.user).subscribe(data=>{
        this.msg =data;  
        this.service.GetAllUsers().subscribe(data=>{
          this.users= data;
         });        
      });
    }
    else{
      console.log('update');
        this.service.UpdateUser(this.user).subscribe(data=>{
        this.msg =data;  
        this.service.GetAllUsers().subscribe(data=>{
          this.users= data;
          this.isEdit = false;
         });        
      });
    }
          
  }

  EditUser(item:User)
  {
    console.log("edit");   
    this.service.GetUserDetails(item.UserID).subscribe(data=>{
      this.user=data;
      this.isEdit=true;      
    })
    //this.user= item; 
  }
  DeleteUser(id:number)
  {
    this.service.DeleteUser(id).subscribe(data=>{
      this.msg=data;
      this.service.GetAllUsers().subscribe(data=>{
        this.users= data;        
       }); 
    })
  }

  SearchUsers(name:string)
  {    
    this.service.SearchUsers(name).subscribe(data=>{
      this.users=data;
    });
  }

  SortingUsers(name:string)
  {
    this.service.SortingUsers(name).subscribe(data=>{
      this.users=data;
    });
  }
  
}
