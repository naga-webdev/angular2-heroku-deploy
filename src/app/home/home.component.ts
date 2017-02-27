import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';
import { TodoService } from '../todo-service/todo.service';

@Component({
    moduleId: module.id,
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    private hidetodos: Todo[];

    private pendingTodos:Array<any> = [];
    private finishedTodos:Array<any> = [];

    private todos: Todo[];
    private pending: number = 0;
    private finished: number = 0;

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.todoService.getTodos().then(response => {
            this.hidetodos = response;
            for (var _i = 0; _i < this.hidetodos.length; _i++) {
                if (!(this.hidetodos[_i].completed)) {
                    this.pendingTodos.push(this.hidetodos[_i]);
                    this.pending++;
                } else {
                    this.finishedTodos.push(this.hidetodos[_i]);
                    this.finished++;
                }
            }
        });
    }

    showPendingTodos() {
        this.todos = this.pendingTodos;
    }

    showFinishedTodos() {
        this.todos = this.finishedTodos;    
    }
}