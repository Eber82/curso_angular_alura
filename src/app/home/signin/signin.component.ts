import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
    templateUrl : './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService : AuthService) { }

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
            () => console.log('vai logar'),
            err => {
                console.log(err),
                this.loginForm.reset();
            }
        );
    }

}