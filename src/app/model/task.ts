import { Parenttask } from "./parenttask";
import { Project } from "./project";
import { User } from "./user";

export class Task {

    constructor()
    {
        this.Project= new Project();
        this.Users = new Array<User>();
    }

    TaskID:number;
    ParentID:number;
    ProjectID:number;
    TaskName:string;
    ParentTaskName:string;
    StartDate:Date;
    EndDate:Date;
    Priority:number;
    Status:string 
    ParentTask:Parenttask;
    Project:Project;
    Users:User[];
    UserID:number;
    UserName:string;
}
