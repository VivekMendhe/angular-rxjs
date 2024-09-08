import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss',
})
export class EventBindingComponent {
  count: number = 0;
  value: unknown = 'Value';
  onClickMe() {
    this.count++;
  }

  onChangeValue(val: unknown) {
    this.value = val;
  }

  value2: any = '';
  inputChange(event: any) {
    // console.log(event.target.value);
    this.value2 = event.target.value;
  }

  value3: any = '';

  onSelectChange(event: any) {
    this.value3 = event.target.value;
  }

  onScroll(event: any) {
    console.log(event);
  }
}
