import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
    selector:'login-page',
    template:
    `
        <button class="btn button" (click)='loginBtn()'>Login</button>
    `
})
export class Login{

    constructor(
        private router: Router
    ){}

    loginBtn(): void{
        console.log('Logging in..');
        let link = ['/map'];
        this.router.navigate(link);
    }
}