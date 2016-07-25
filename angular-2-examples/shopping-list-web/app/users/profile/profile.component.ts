import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import {
    UserService,
} from 'app/users/shared/index';

@Component({
    selector:'profile',
    templateUrl: 'app/users/profile/profile.component.html',
})

export class ProfileComponent {


    constructor(
        private userService: UserService,
    ) {
        console.log(this.userService.getBasicAuth());
    }
}
