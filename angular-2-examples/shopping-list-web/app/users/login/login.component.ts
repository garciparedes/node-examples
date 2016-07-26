import {
    Component,
} from '@angular/core';

import { FormBuilder, Validators } from '@angular/common';

import {
    Router,
    ROUTER_DIRECTIVES,
} from '@angular/router';

import { UserService, } from '../shared/index';

@Component({
    selector:'login',
    templateUrl: 'app/users/login/login.component.html',
    styleUrls: [ 'app/users/login/login.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
    ],
})

export class LoginComponent {
    private loginForm: any;

    constructor(
        private userService: UserService,
        private router: Router,
        fb: FormBuilder
    ) {
        this.loginForm = fb.group({
          username: ["", Validators.required],
          password: ["", Validators.required]
        });

    }

    doLogin(){
        event.preventDefault();

        this.userService.setUser(
            this.loginForm.value.username,
            this.loginForm.value.password
        );
        this.router.navigate(['/dashboard']);
    }
}
