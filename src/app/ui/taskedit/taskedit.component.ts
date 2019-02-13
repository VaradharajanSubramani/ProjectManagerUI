import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import {SharedService} from 'src/app/service/shared.service';
import {Task} from 'src/app/model/task';
import {DatePipe} from '@angular/common';
import {Parenttask} from 'src/app/model/parenttask';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css'],
  providers: [DatePipe]
})
export class TaskeditComponent implements OnInit {
  item:Task;
  pitem:Parenttask;
  isEdit =true;
  constructor(private shareService:SharedService, 
    private route:ActivatedRoute, public datePipe : DatePipe, private router:Router) 
    { this.item= new Task() };

  ngOnInit() {
    this.route.params.subscribe(parms =>{
      this.shareService.GetTaskDetails(parms['id']).subscribe(res=>{
        this.item=res;
        console.log(this.item);
        if(this.item != null)
        {       
          this.item.StartDate = new Date(this.item.StartDate);
          this.item.EndDate = new Date(this.item.EndDate);        
        }
        this.shareService.GetUserDetails(this.item.UserID).subscribe(data=>{
            this.item.UserName = data.FirstName+ " "+ data.LastName;
        });
      });
      });
      this.shareService.GetParentTasks().subscribe(res=>
        {
          this.pitem=res;     
        });
  }

  Update()
  {    
    this.shareService.Update(this.item).subscribe(res=>
      {
        this.item = res;
        this.router.navigate(['taskview']);
      });
   
  }

}
