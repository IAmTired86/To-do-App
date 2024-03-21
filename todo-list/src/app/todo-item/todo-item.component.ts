import { Component, Input ,Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    <div class="todo-item">
      {{ item.title }}

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  // @ts-ignore
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  constructor() { }
  removeItem() {
    this.remove.emit(this.item);
  }
}
