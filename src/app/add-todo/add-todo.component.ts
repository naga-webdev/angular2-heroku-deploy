import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../models/todo';
import { TodoService } from '../todo-service/todo.service';
import { MaterialAlertsService } from '../material-alerts/material-alerts.service';

@Component({
    moduleId: module.id,
    selector: 'add-todo-component',
    templateUrl: 'add-todo.component.html'
})
export class AddTodoComponent implements OnInit {
    private todo:any = {};

    constructor(private todoService:TodoService, private router:Router,private materialAlertsService:MaterialAlertsService) { }

    ngOnInit() { 
        
    }

    onSubmit(){
        this.todoService.addTodo(this.todo.task).then(response => {
            if(response._body != null){
                this.materialAlertsService.openSnackBar("Todo Added Successfully!");
                this.router.navigateByUrl('/show-todos');
            }else{
                this.router.navigateByUrl('/add-todo');
            }
        });
        this.todo.task = "";
    }

}