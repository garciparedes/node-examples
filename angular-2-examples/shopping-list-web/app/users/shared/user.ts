export class User {
    
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }

    private getPassword(): string {
        return this.password;
    }

    private getBTOA(){
        return btoa(this.getUsername() + ':' + this.getPassword());
    }

    getBasicAuth(): string {
        return `Basic ${this.getBTOA()}`;
    }
}
