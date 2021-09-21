import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn : 'root'}) //Esse decorator com 'providedIn : 'root'' faz com que uma única instância desse service será compartilhada.  
export class PhotoService{

    constructor(private http: HttpClient){}

    listFromUser(username : string){
        return this.http.get<Photo[]>(`${API}/${username}/photos`)
    }
}