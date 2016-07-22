import {
    bootstrap,
} from '@angular/platform-browser-dynamic';

import {
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
} from '@angular/http';

import {
    AppComponent,
    appRouterProviders,
} from './app/index';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
]);
