import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  imports: [
    CommonModule,
    DataViewModule
  ],
  declarations: [ProdutoListComponent]
})
export class ProdutosModule { }
