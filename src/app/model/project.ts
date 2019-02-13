import { Task } from "./task";
import { User } from "./user";

export class Project {
    constructor()    
    {
        this.Tasks = new Array<Task>();
        this.Users= new Array<User>();
    }
    ProjectID:number;
    ProjectName:string;
    StartDate:Date;
    EndDate:Date;
    Priority:number;
    NoOfTasks:number;
    CompletedTasks:number; 
    UserID:number;
    UserName:string;  
    Tasks:Task[];
    Users:User[];

}
