import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListarProdutosComponent } from './admin/produtos/listar-produtos/listar-produtos.component';
import { ListarCategoriasComponent } from './admin/categorias/listar-categorias/listar-categorias.component';
import { EditarCategoriasComponent } from './admin/categorias/editar-categorias/editar-categorias.component';
import { EditarProdutosComponent } from './admin/produtos/editar-produtos/editar-produtos.component';
import { HomeComponent } from './admin/home/home.component';
import { CadastrarProdutosComponent } from './admin/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { CadastrarCategoriasComponent } from './admin/categorias/cadastrar-categorias/cadastrar-categorias.component';
import { CategoriaService } from './admin/categorias/categoria.service';
import { ProdutoService } from './admin/produtos/produto.service';
import { VisualizarCategoriasComponent } from './admin/categorias/visualizar-categorias/visualizar-categorias.component';
import { VisualizarProdutosComponent } from './admin/produtos/visualizar-produtos/visualizar-produtos.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarrinhoComponent } from './admin/carrinho/carrinho.component';
import { CarrinhoService } from './admin/carrinho/carrinho.service';
import { ListarCarrinhoComponent } from './admin/carrinho/listar-carrinho/listar-carrinho.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    ListarProdutosComponent,
    ListarCategoriasComponent,
    EditarCategoriasComponent,
    EditarProdutosComponent,
    HomeComponent,
    CadastrarProdutosComponent,
    CadastrarCategoriasComponent,
    VisualizarCategoriasComponent,
    VisualizarProdutosComponent,
    CarrinhoComponent,
    ListarCarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [
    CategoriaService,
    ProdutoService,
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
