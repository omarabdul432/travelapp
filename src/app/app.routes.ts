import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'details/:id',
  //   loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
  // },
];
