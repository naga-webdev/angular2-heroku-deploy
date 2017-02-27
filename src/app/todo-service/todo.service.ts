import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

    //private headers = new Headers({'Content-Type': 'application/json'});
    private todoUrl = '/addTodo';  // URL to web api
    private todosUrl = '/showTodos';
    private updateTodoUrl = '/updateTodo';
    private deleteUrl = '/deleteTodo';

    constructor(private http: Http) { }

    addTodo(task: string): Promise<any> {

        return this.http
            .post(this.todoUrl, task)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);

    }

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(response => response.json() as Todo[])
            .catch(this.handleError);
    }

    updateTodo(id: string): Promise<Todo> {
        const url = `${this.updateTodoUrl}/${id}`;
      
        return this.http
            .put(url, JSON.stringify(id))
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
      }

    
      deleteTodo(id: string): Promise<void> {
        const url = `${this.deleteUrl}/${id}`;
        return this.http.delete(url)
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }
    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
