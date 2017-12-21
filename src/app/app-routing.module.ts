import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListarProdutosComponent } from './admin/produtos/listar-produtos/listar-produtos.component';
import { ListarCategoriasComponent } from './admin/categorias/listar-categorias/listar-categorias.component';
import { EditarProdutosComponent } from './admin/produtos/editar-produtos/editar-produtos.component';
import { EditarCategoriasComponent } from './admin/categorias/editar-categorias/editar-categorias.component';
import { HomeComponent } from './admin/home/home.component';
import { CadastrarProdutosComponent } from './admin/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { CadastrarCategoriasComponent } from './admin/categorias/cadastrar-categorias/cadastrar-categorias.component';
import { VisualizarCategoriasComponent } from './admin/categorias/visualizar-categorias/visualizar-categorias.component';
import { VisualizarProdutosComponent } from './admin/produtos/visualizar-produtos/visualizar-produtos.component';
import { CarrinhoComponent } from './admin/carrinho/carrinho.component';
import { ListarCarrinhoComponent } from './admin/carrinho/listar-carrinho/listar-carrinho.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin', component: AdminComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'produtos/listar', component: ListarProdutosComponent },
          { path: 'produtos/editar', component: EditarProdutosComponent },
          { path: 'produtos/cadastrar', component: CadastrarProdutosComponent },
          { path: 'produtos/visualizar/:id', component: VisualizarProdutosComponent },
          { path: 'categorias/listar', component: ListarCategoriasComponent },
          { path: 'categorias/editar', component: EditarCategoriasComponent },
          { path: 'categorias/cadastrar', component: CadastrarCategoriasComponent },
          { path: 'categorias/visualizar/:id', component: VisualizarCategoriasComponent },
          { path: 'carrinho', component: CarrinhoComponent },
          { path: 'listar-carrinho', component: ListarCarrinhoComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
