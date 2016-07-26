import {
    Component,
} from '@angular/core';

import {
    ToolbarComponent
} from '../shared/index';
import {
    ROUTER_DIRECTIVES,
} from '@angular/router'

@Component({
    selector:'logged',
    templateUrl: 'app/signed/signed.component.html',
    styleUrls: [ 'app/signed/signed.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        ToolbarComponent,
    ]
})

export class SignedComponent {

}
