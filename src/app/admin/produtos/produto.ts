import { Categoria } from "../categorias/categoria";

export class Produto {
    id: number;
    nome: String;
    descricao: String;
    categoria: Categoria;
    preco: number;
}