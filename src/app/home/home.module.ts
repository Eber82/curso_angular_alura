import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations:[SignInComponent],
    imports : [ReactiveFormsModule, CommonModule]
})

export class HomeModule{

}