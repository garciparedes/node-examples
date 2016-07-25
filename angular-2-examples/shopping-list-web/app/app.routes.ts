import {
    provideRouter,
    RouterConfig,
} from '@angular/router';

import {
    DashboardComponent,
} from 'app/dashboard/index';

import {
    ItemListComponent,
} from 'app/items/index';

import {
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent
} from 'app/products/index';

import {
    ProfileComponent,
    LoginComponent,
    SigninComponent,
} from 'app/users/index';


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
        path: 'items/:id',
        component: ItemListComponent
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
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
