import { Component, OnInit } from '@angular/core';

import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { ProdutoService } from '../produtos/produto.service';
import { Produto } from '../produtos/produto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService) {

    this.produtoService.getProdutos()
      .then(result => {
        this.produtos = result;
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.mensage);
      });

  }

  adicionarProduto(produto: Produto) {
    this.carrinhoService.adicionarProduto(produto);
  }

  ngOnInit() {
  }

}
