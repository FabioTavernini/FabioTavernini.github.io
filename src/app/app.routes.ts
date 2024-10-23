import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect root path to home (or modify as needed)
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)  // Lazy load the ContactComponent
  }
  // Add other routes here
];
