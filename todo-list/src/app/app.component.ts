import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import {CommonModule} from "@angular/common";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoItem} from "./interfaces/todo-item";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputButtonUnitComponent, CommonModule, TodoItemComponent],
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todo of todoList">
        <app-todo-item [item]="todo"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {
    this.todoList.push({ title });
  }
}
