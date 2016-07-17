import { provideRouter, RouterConfig } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail.component';


const routes: RouterConfig = [
    {
      path: '',
      redirectTo: '/items',
      pathMatch: 'full'
    },
    {
        path: 'items',
        component: ItemsComponent
    },
    {
        path: 'items/:id',
        component: ItemDetailComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
