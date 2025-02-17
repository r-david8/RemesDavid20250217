import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a: number = 0;
  b: number = 0;
  result: number = 0;

  onResultCalculated(result: number) {
    this.result = result;
  }

  onChildEvent(value: number) {
    this.result = value;
  }
}
