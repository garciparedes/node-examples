import {
    Component,
} from '@angular/core';

import {
    ROUTER_DIRECTIVES,
} from '@angular/router'

@Component({
    selector:'auth',
    templateUrl: 'app/auth/auth.component.html',
    styleUrls: [ 'app//auth/auth.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class AuthComponent {

}
