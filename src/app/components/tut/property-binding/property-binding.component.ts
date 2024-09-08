import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss',
})
export class PropertyBindingComponent {
  myImg: string = '/logo.png';
  dyValue: string = 'John Smith';

  inStock: boolean = false;

  products = {
    p1: false,
    p2: true,
  };

  hiddenItem:boolean=false;

  property:boolean = false;
}
