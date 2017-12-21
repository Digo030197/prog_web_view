import { Component, OnInit, TemplateRef } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CarrinhoService } from '../../carrinho/carrinho.service';
import { Carrinho } from '../../carrinho/carrinho';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produto[];
  modalRef: BsModalRef;

  constructor(private produtoService: ProdutoService,
     private modalService: BsModalService, 
     private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.produtoService.getProdutos().
      then(result => {
        this.produtos = result;
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  delete(id: number, index: number) {
    this.produtoService.deleteProduto(id).
      then(result => {
        console.log(result);
        this.produtos.splice(index, 1);
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
