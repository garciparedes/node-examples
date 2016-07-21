import { provideRouter, RouterConfig } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail.component';
import { AddItemComponent } from './add-item.component';
import { HistoryComponent } from './history.component';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products.component';
import { ProfileComponent } from './profile.component';


const routes: RouterConfig = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'items',
        component: ItemsComponent
    },
    {
        path: 'items/add',
        component: AddItemComponent
    },
    {
        path: 'items/:id',
        component: ItemDetailComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
