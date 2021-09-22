import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Produto } from "./produto";

@Injectable({providedIn:"root"})
export class ProdutoService{

    constructor(private http : HttpClient){}

    listProdutos(){
        return this.http.get<Produto[]>('http://localhost:8080/dados');
    }

}