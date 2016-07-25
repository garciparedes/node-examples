import {
    Component,
} from '@angular/core';

import {
    ROUTER_DIRECTIVES,
} from '@angular/router';

import {
    ToolbarComponent,
    WikipediaService,
} from 'app/shared/index';

import {
    ItemService,
} from 'app/items/index';

import {
    ProductService,
} from 'app/products/index';

import {
    UserService,
} from 'app/users/index';

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
        UserService,
        WikipediaService,
    ]
})

export class AppComponent { }
