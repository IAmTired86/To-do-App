import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue(getInputValue($event))">

    <button (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title = 'Hello World';

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
}
