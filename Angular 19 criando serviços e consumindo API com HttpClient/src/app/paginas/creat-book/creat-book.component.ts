import { Component } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../componentes/livro/livro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creat-book',
  imports: [],
  templateUrl: './creat-book.component.html',
  styleUrl: './creat-book.component.css'
})
export class CreatBookComponent {

  constructor(
    private livroService: LivroService,
    private router: Router,
  ) { }

  creatBook(livro: Livro) {
    this.livroService.addBook(livro).subscribe(() => {
      this.router.navigate(['lista-livros'])
    })
  }

}
