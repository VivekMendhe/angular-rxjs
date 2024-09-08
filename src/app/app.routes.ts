import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/tut/databinding/databinding.component';
import { PropertyBindingComponent } from './components/tut/property-binding/property-binding.component';
import { SignalsComponent } from './components/tut/signals/signals.component';
import { EventBindingComponent } from './components/tut/event-binding/event-binding.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-binding', component: DatabindingComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'event-binding', component: EventBindingComponent },
];
