import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <div class="container">
              <div class="row navbar" style="text-align:center;">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"><button md-button routerLink="/home"><md-icon>home</md-icon> Home</button></div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"><button md-button routerLink="/add-todo"><md-icon>add</md-icon> Add Todo</button></div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"><button md-button routerLink="/show-todos"><md-icon>menu</md-icon> All Todos</button></div>
              </div>
              <div class="jumbotron">
                <router-outlet></router-outlet><br/>
              </div>
            </div>
            `,
  styles:[`
            .navbar{
              background-color:#1976D2;
            }
            button[md-button]{
              background-color:#1976D2;
              color:white;
              margin-top:5px;
            }
          `]
})
export class AppComponent {}
