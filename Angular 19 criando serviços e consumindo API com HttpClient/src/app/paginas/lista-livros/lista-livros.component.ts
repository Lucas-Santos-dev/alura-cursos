import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { BotaoComponent } from '../../componentes/botao/botao.component';
import { DivisorComponent } from '../../componentes/divisor/divisor.component';
import { EstadoVazioComponent } from '../../componentes/estado-vazio/estado-vazio.component';
import { GeneroLiterario, Livro } from '../../componentes/livro/livro';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { SubtituloComponent } from '../../componentes/subtitulo/subtitulo.component';
import { TituloComponent } from '../../componentes/titulo/titulo.component';
import { LivroService } from '../../services/livro.service';


@Component({
  selector: 'app-lista-livros',
  imports: [
    CommonModule,
    LivroComponent,
    TituloComponent,
    DivisorComponent,
    BotaoComponent,
    SubtituloComponent,
    EstadoVazioComponent
  ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  generosComLivros: { genero: GeneroLiterario; livros: Livro[] }[] = [];

  constructor(private LivroService: LivroService) { }

  ngOnInit() {
    this.LivroService.organizingBooksByGenre().subscribe((booksByGenre) => {
      this.generosComLivros = this.LivroService.generos.map((genero) => ({
        genero,
        livros: booksByGenre.get(genero.id) ?? []
      }));
    });
  }

  organizarLivrosPorGenero() {

  }
}
