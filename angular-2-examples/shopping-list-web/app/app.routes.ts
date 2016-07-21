import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { ItemsComponent } from './items.component';
import { AddItemComponent } from './add-item.component';
import { ItemDetailComponent } from './item-detail.component';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product.component';
import { ProductDetailComponent } from './product-detail.component';

import { HistoryComponent } from './history.component';

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
        path: 'products',
        component: ProductsComponent
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
