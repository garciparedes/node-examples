import {
    Component,
} from '@angular/core';

import {
    ActivatedRoute,
    Router,
    ROUTER_DIRECTIVES,
} from '@angular/router'

@Component({
    selector:'signin',
    templateUrl: 'app/users/signin/signin.component.html',
    styleUrls: [ 'app/users/signin/signin.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
    ],
})

export class SigninComponent {

}
