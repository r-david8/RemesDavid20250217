import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() a: number;
  @Input() b: number;
  @Output() result = new EventEmitter<number>();

  constructor(private parent: ParentComponent) {
    this.a = parent.a;
    this.b = parent.b;
  }

  onAdd() {
    this.result.emit(this.a + this.b);
  }

  onSubtract() {
    this.result.emit(this.a - this.b);
  }
}