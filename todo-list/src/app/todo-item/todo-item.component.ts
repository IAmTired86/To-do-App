import { Component, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    {{ item.title }}
  `,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  // @ts-ignore
  @Input() item: TodoItem;
  constructor() { }
}
