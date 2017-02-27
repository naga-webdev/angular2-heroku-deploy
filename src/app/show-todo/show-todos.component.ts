import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../models/todo';
import { TodoService } from '../todo-service/todo.service';
import { MaterialAlertsService } from '../material-alerts/material-alerts.service';

@Component({
    selector: 'show-todos-component',
    templateUrl: 'show-todos.component.html',
    styleUrls:['show-todos.component.css']
})
export class ShowTodosComponent implements OnInit {
    private todos:Todo[];
    private loading:boolean = false;

    constructor(private todoService:TodoService,private router:Router,private materialAlertsService:MaterialAlertsService) { }

    ngOnInit() { 
        this.loading = true;
        this.todoService.getTodos().then(response => {
            this.loading = false;
            this.todos = response;
        });
    }

    updateTodo(id:string){
        this.loading = true;
        this.todoService.updateTodo(id).then(() => {
            this.materialAlertsService.openSnackBar('Todo updated successfully!');
            this.ngOnInit();
            //this.router.navigate(['/home']);
        });
    }

    deleteTodo(id:string){
        this.loading = true;
        this.todoService.deleteTodo(id).then(() =>{
            this.materialAlertsService.openSnackBar('Todo deleted successfully!');
            this.ngOnInit();
            //this.router.navigate(['/home']);
        });
    }

    recentTodos(){
        this.todos.reverse();
    }
}