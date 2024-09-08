import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  count = signal(0);

  employees = signal<Employee[]>([
    { id: 1, name: 'John Smith', position: 'Manager', department: 'Sales' },
  ]);

  newName = signal('');
  newPosition = signal('');
  newDepartment = signal('');
  formVisible = signal(false);

  addEmployee() {
    if (this.newName() && this.newPosition() && this.newDepartment()) {
      const newEmployee: Employee = {
        id: this.employees().length + 1,
        name: this.newName(),
        position: this.newPosition(),
        department: this.newDepartment(),
      };
      // Mutate the employee list using signal's update method
      this.employees.update((list) => [...list, newEmployee]);

      // Reset form values
      this.newName.set('');
      this.newPosition.set('');
      this.newDepartment.set('');
    }
  }

  toggleForm() {
    this.formVisible.update((visible) => !visible);
  }

  clearForm() {
    this.newName.set('');
    this.newPosition.set('');
    this.newDepartment.set('');
  }

  onCount() {
    this.count.update((c) => c + 1);
    console.log('The count is: ' + this.count());
  }

  onDecrease() {
    this.count.update((c) => c - 1);
  }

  product = signal({
    id: 1,
    name: 'Laptop',
    brand: 'HP',
    price: '49000',
    quantity: '1',
  });

  changeProductName() {
    let newName = 'Lenovo';
    this.product.update((product) => ({
      ...product,
      brand: product.brand === 'HP' ? 'Lenovo' : 'HP',
    }));
  }



  sideEffect=effect(()=>console.log("Side Effect, product name changed to " + this.product().brand));
  
}
