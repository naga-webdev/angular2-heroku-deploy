import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/index';
import { AddTodoComponent } from './add-todo/index';
import { ShowTodosComponent } from './show-todo/index';
import { PageNotFoundComponent } from './page-not-found/index';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'add-todo', component: AddTodoComponent },
    { path: 'show-todos', component: ShowTodosComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }