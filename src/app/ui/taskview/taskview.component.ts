import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import {Task} from 'src/app/model/task';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
  list: Task[];
msg:any;

  constructor(private service: SharedService) { 
    this.service.GetAllTasks()
  .subscribe(data=>{
    this.list = data;
    console.log(this.list)
  })
  }

  ngOnInit() {
  }

  EndTask(id:number)
  {
    this.service.EndTask(id).subscribe(res=>
      {
        this.msg=res;       
      });   
  }

  SearchTasks(name:string)
  {
    this.service.SearchTasks(name).subscribe(data=>{
      this.list = data;
    });

  }

  SortingUsers(name:string)
  {
   this.service.SortingTasks(name).subscribe(data=>{
     this.list = data;
   });
  }
}
