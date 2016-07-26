import {
    Injectable,
} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {
    User,
} from './index';

@Injectable()
export class UserService {

    private user: User;


    setUser(username: string, password: string) {
        this.user = new User(username, password);
        console.log(this.user);
        console.log(this.user.getBasicAuth());
    }

    getUser(): User {
        return this.user;
    }

    getBasicAuth(): string {
        return this.getUser()
            .getBasicAuth();
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
