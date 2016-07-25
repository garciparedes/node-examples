import {
    bootstrap,
} from '@angular/platform-browser-dynamic';

import {
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
} from '@angular/http';

import {
    AppComponent,
    APP_ROUTER_PROVIDERS,
} from './app/index';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
]);
