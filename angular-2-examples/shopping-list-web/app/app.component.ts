import {
    Component,
} from '@angular/core';

import {
    ROUTER_DIRECTIVES,
} from '@angular/router';

import {
    ToolbarComponent,
    WikipediaService,
} from './shared/index';

import {
    ItemService,
} from './items/index';

import {
    ProductService,
} from './products/index';

import {
    UserService,
    AuthGuard,
} from './users/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        ToolbarComponent
    ],
    providers: [
        ItemService,
        ProductService,
        WikipediaService,
    ]
})

export class AppComponent { }
