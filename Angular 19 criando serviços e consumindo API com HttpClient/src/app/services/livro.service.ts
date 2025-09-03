import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../componentes/livro/livro';
import { map, Observable } from 'rxjs';
import { GeneroLiterario } from '../componentes/livro/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private API_URL = "http://localhost:3000/livros"

  generos: GeneroLiterario[] = [
    { id: 'romance', value: 'Romance' },
    { id: 'misterio', value: 'Mistério' },
    { id: 'fantasia', value: 'Fantasia' },
    { id: 'ficcao-cientifica', value: 'Ficção Científica' },
    { id: 'tecnicos', value: 'Técnicos' }
  ];

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.API_URL);
  }

  organizingBooksByGenre(): Observable<Map<string, Livro[]>>{
    return this.getBooks().pipe(
      map((livros: Livro[]) => {
        const booksByGenre = new Map<string, Livro[]>();

        livros.forEach((livro: Livro) => {
          const Idgenre = typeof livro.genero === 'string' ? livro.genero : livro.genero?.id;

          if(Idgenre) {
            if(!booksByGenre.has(Idgenre)) {
              booksByGenre.set(Idgenre, []);
            }
            booksByGenre.get(Idgenre)?.push(livro);
          }
        })
        return booksByGenre;
      })
    )
  }

}
