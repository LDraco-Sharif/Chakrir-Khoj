import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        title: 'Chakrir Khoj',
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    },
    {
        path: '**',
        redirectTo: ''
    }
];
