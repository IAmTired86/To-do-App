import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import {CommonModule} from "@angular/common";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {ListManagerComponent} from "./list-manager/list-manager.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputButtonUnitComponent, CommonModule, TodoItemComponent, ListManagerComponent],
  template: `
    <h1 class = "app-title">
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
}
