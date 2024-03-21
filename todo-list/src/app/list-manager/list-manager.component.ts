import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../interfaces/todo-item';
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {InputButtonUnitComponent} from "../input-button-unit/input-button-unit.component";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent],
  template: `
    <div class = "todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todo of todoList">
        <app-todo-item [item]="todo"></app-todo-item>
      </li>
    </ul>
    </div>
  `,
  styleUrl: './list-manager.component.scss'
})
export class ListManagerComponent {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }
  addItem(title: string) {
    this.todoListService.addItem({ title });
  }
}
