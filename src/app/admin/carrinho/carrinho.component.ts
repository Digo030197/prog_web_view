import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs/Subscription';

import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './carrinho';
import { Produto } from '../produtos/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  produtos: Produto[];

  constructor(private carrinhoService: CarrinhoService)  { }

  ngOnInit() {
    this.carrinhoService.carrinho.subscribe( (carrinho: Carrinho) => {
    this.produtos = carrinho.produtos;
    } );
  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

  removerProduto(id: number){
    this.carrinhoService.removerProduto(id);
  }

}
