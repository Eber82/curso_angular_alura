import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Router } from "@angular/router";

import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectedService } from "src/app/core/platform-detected/platform-detected.service";


@Component({
    templateUrl : './signin.component.html'
})
export class SignInComponent implements OnInit {

    private loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>; //Decorator que me dá acesso ao elemento

    constructor(private formBuilder: FormBuilder,
                private authService : AuthService,
                private router : Router,
                private platformDetectedService : PlatformDetectedService) { }

    ngOnInit(): void {
        
        this.loginForm = this.formBuilder.group({
            userName : ['', Validators.required],
            password : ['', Validators.required]
        });
    }

    logar(){
        
        const userName  = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
        .autenthicate(userName, password)
        .subscribe(
            () => this.router.navigate(['user', userName]),
            err => {
                console.log(err),
                this.loginForm.reset();
                alert('Invalid user name or password')
                
                if (this.platformDetectedService.isPlatformBrowser()){
                    this.userNameInput.nativeElement.focus();
                }
                
            }
        );
    }

}