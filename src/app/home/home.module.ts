import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SignInComponent } from "./signin/signin.component";
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    declarations:[SignInComponent],
    imports : [
        ReactiveFormsModule, 
        CommonModule, 
        VMessageModule,
        AppRoutingModule
    ]
})

export class HomeModule{

}