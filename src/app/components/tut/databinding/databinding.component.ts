import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss',
})
export class DatabindingComponent {
  employee = 'text';

  emp = {
    name: 'Employ',
    position: 'Director',
  };

  price: number = 500;
  quantity: number = 3;
  tax: number = 8.5;

  isEditable: boolean = false;

  calculateTotal() {
    return this.price * this.quantity;
  }

  calculateTax() {
    return (this.price * this.tax) / 100;
  }

  toggleButton() {
    this.isEditable = !this.isEditable;
  }
}
