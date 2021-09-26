import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
    providedIn : 'root'
})
export class PlatformDetectedService{

    constructor(@Inject(PLATFORM_ID) private platformId : string){} //Forma de injetar o platfomId

    isPlatformBrowser(){
        return isPlatformBrowser(this.platformId); //Retorna se está sendo executado no browser ou em alguma plataforma 'server-side'
    }
}