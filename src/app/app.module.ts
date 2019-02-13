import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import {RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './ui/user/user.component';
import { ProjectComponent } from './ui/project/project.component';
import { TaskviewComponent } from './ui/taskview/taskview.component';
import { TaskaddComponent } from './ui/taskadd/taskadd.component';
import { TaskeditComponent } from './ui/taskedit/taskedit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponent,
    TaskviewComponent,
    TaskaddComponent,
    TaskeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,RouterModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
