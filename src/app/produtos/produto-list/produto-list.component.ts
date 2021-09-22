import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto-service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos : Produto[] = [];
  
  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
    this.produtoService.
    listProdutos().
    subscribe(
      produtos => this.produtos = produtos,
      erro => console.log(erro)
    );
  }

}
