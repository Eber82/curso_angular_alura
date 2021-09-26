import { Injectable } from "@angular/core";

const KEY = 'authToken';

@Injectable({providedIn : 'root'})
export class TokenService{

    hasToken(){
        return !!this.getToken(); //Código javascript para transforma a string em boolean

    }
    setToken(token : string){
        window.localStorage.setItem(KEY, token);
    }
    
    getToken(){
        return window.localStorage.getItem(KEY);
    }
    removeToken(){
        window.localStorage.removeItem(KEY);
    }

}