import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/index';
import { AddTodoComponent } from './add-todo/index';
import { ShowTodosComponent } from './show-todo/index';
import { PageNotFoundComponent } from './page-not-found/index';


import { TodoService } from './todo-service/index';
import { MaterialAlertsService } from './material-alerts/index';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule, MaterialModule.forRoot()],
  declarations: [AppComponent, HomeComponent, AddTodoComponent, ShowTodosComponent, PageNotFoundComponent],
  providers: [TodoService, MaterialAlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }