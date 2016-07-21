import { provideRouter, RouterConfig } from '@angular/router';


import { DashboardComponent } from './dashboard/index';

import {
    ItemListComponent,
    AddItemComponent,
    ItemDetailComponent
} from './items/index';

import {
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent
} from './products/index';

import { HistoryComponent } from './history/index';

import { ProfileComponent } from './users/index';


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
        component: ItemListComponent
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
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/add',
        component: AddProductComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
