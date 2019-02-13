import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { UserComponent } from './ui/user/user.component';
import { ProjectComponent } from './ui/project/project.component';
import { TaskviewComponent } from './ui/taskview/taskview.component';
import { TaskaddComponent } from './ui/taskadd/taskadd.component';
import { TaskeditComponent } from './ui/taskedit/taskedit.component';

const routes:Routes=[
  {path:'',redirectTo:'project',pathMatch:'full'},
  {path:'user', component:UserComponent},
  {path:'project',component:ProjectComponent},
  {path:'taskview', component:TaskviewComponent},
  {path:'taskadd',component:TaskaddComponent},
  {path:'taskedit/:id',component:TaskeditComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  declarations: []
})
export class AppRoutingModule { }
