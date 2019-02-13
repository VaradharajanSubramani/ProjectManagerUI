import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { HttpModule } from '@angular/http';
import { User } from '../model/user';
import { Project } from '../model/project';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  serviceurl:string ="http://localhost/ProjectMangerAPI/api/";
  taskController:string="tasks/";
  userController:string="users/";
  projController:string="project/";

  constructor(private http:HttpClient) { }

  GetAllUsers():Observable<any>
  {
    return this.http.get(this.serviceurl+this.userController+"GetAllUsers").pipe(map((res:Response)=>res))
  }

  AddUser(item:User):Observable<any>
  {
    return this.http.post(this.serviceurl+this.userController+"SaveUser",item).pipe(map((res:Response)=>res))
  }

  UpdateUser(item:User):Observable<any>
  {
    var data={id:item.UserID,value:item}
    return this.http.put(this.serviceurl+this.userController+"UpdateUser",item).pipe(map((res:Response)=>res))
  }
  GetUserDetails(id:number):Observable<any>
  {
    return this.http.get(this.serviceurl+this.userController+"GetUserDetails?id="+id).pipe(map((res:Response)=>res))
  }
  DeleteUser(id:number):Observable<any>
  {
    return this.http.delete(this.serviceurl+this.userController+"DeleteUser?id="+id).pipe(map((res:Response)=>res))
  }

  SearchUsers(name:string):Observable<any>
  {
    return this.http.get(this.serviceurl+this.userController+"SearchUsersByName?name="+name).pipe(map((res:Response)=>res))
  }

  SortingUsers(name:string):Observable<any>
  {
    return this.http.get(this.serviceurl+this.userController+"SortingUsers?columnName="+name).pipe(map((res:Response)=>res))
  }

  // Project Service
  GetAllProjects():Observable<any>
  {
    return this.http.get(this.serviceurl+this.projController+"GetAllProjects").pipe(map((res:Response)=>res))
  }

  GetProjectDetails(id:number):Observable<any>
  {
    return this.http.get(this.serviceurl+this.projController+"GetprojectDetails?id="+id).pipe(map((res:Response)=>res))
  }

  SaveProject(item:Project):Observable<any>
  {
    return this.http.post(this.serviceurl+this.projController+"SaveProject",item).pipe(map((res:Response)=>res)) 
  }

  UpdateProject(item:Project):Observable<any>
  {
    return this.http.put(this.serviceurl+this.projController+"UpdateProject",item).pipe(map((res:Response)=>res)) 
  }

  SuspendProject(id:number):Observable<any>
  {
    return this.http.delete(this.serviceurl+this.projController+"DeleteProject?id="+id).pipe(map((res:Response)=>res)) 
  }

  SearchProjects(name:string):Observable<any>
  {
    return this.http.get(this.serviceurl+this.projController+"SearchProjects?name="+name).pipe(map((res:Response)=>res))
  }

  SortingProjects(name:string):Observable<any>
  {
    return this.http.get(this.serviceurl+this.projController+"SortingProjects?columnName="+name).pipe(map((res:Response)=>res))
  }


  GetAllTasks():Observable<any>
  {
    return this.http.get(this.serviceurl+this.taskController+"GetAllTasks").pipe(map((res:Response)=>res))
  }

  Add(item:Task):Observable<any>
  {
    return this.http.post(this.serviceurl+this.taskController+"SaveTask",item).pipe(map((res:Response)=>res))
  }

  GetTaskDetails(id:number):Observable<any>
  {
    return this.http.get(this.serviceurl+this.taskController+"GetTaskDetails?id="+id).pipe(map((res:Response)=> res))
  }

  Update(item:Task):Observable<any>
  {
    return this.http.put(this.serviceurl+this.taskController+"UpdateTask",item).pipe(map((res:Response)=> res))
  }

  GetParentTasks():Observable<any>
  {
    return this.http.get(this.serviceurl+this.taskController+"GetAllParentTasks").pipe(map((res:Response)=>res))
  }

  EndTask(id:number):Observable<any>
  {
    return this.http.put(this.serviceurl+this.taskController+"EndTask",id).pipe(map((res:Response)=> res))
  }

  SearchTasks(name:string):Observable<any>
  {
    return this.http.get(this.serviceurl+this.taskController+"SearchTasks?name="+name).pipe(map((res:Response)=>res))
  }
  SortingTasks(name:string):Observable<any>
  {
    return this.http.get(this.serviceurl+this.taskController+"SortingTask?columnName="+name).pipe(map((res:Response)=>res))
  }
}
