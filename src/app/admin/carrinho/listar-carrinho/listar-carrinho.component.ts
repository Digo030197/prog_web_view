import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Produto } from '../../produtos/produto';

@Component({
  selector: 'app-listar-carrinho',
  templateUrl: './listar-carrinho.component.html',
  styleUrls: ['./listar-carrinho.component.scss']
})
export class ListarCarrinhoComponent implements OnInit {

  produtos: Produto[];
  valorTotal: number = 0;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.produtos = this.carrinhoService.produtos;
    
    for(let produto of this.produtos){
      this.valorTotal = this.valorTotal + produto.preco;
    }
  }

}
