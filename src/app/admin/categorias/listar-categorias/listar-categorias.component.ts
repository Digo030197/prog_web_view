import { Component, OnInit, TemplateRef } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent implements OnInit {

  categorias: Categoria[];
  modalRef: BsModalRef;
  selectCategoria: Categoria;
  selectIndex: number;

  constructor(private categoriaService: CategoriaService, private modalService: BsModalService) { }
  
  ngOnInit() {
    this.categoriaService.getCategorias().
      then(result => {
        this.categorias = result;
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  delete(id: number, index: number) {
    this.categoriaService.deleteCategoria(id).
      then(result => {
        console.log(result);
        this.categorias.splice(index, 1);
        this.modalRef.hide();
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  openModal(template: TemplateRef<any>, categoriaSelecionada: Categoria, indexSelecionado: number) {
    this.selectIndex = indexSelecionado;
    this.selectCategoria = categoriaSelecionada;
    this.modalRef = this.modalService.show(template);
  }
}
