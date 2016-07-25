import {
    provideRouter,
    RouterConfig,
    CanActivate,
} from '@angular/router';

import {
    DashboardComponent,
} from './dashboard/index';

import {
    ItemListComponent,
} from './items/index';

import {
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent
} from './products/index';

import {
    ProfileComponent,
    LoginComponent,
    SigninComponent,
    AuthGuard,
} from './users/index';


const routes: RouterConfig = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'items',
        component: ItemListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'items/:id',
        component: ItemListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products',
        component: ProductListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products/add',
        component: AddProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
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
