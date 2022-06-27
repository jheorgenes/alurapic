import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

/**
 * Quando se cria um Service, você utiliza o decorator @Injectable para que essa classe seja injetada
 * Deve receber como parâmetro, um objeto com a propriedade providedIn: 'root'
 * Quando realizado, significa que o angular irá criar esse service no Scopo RAIZ do projeto
 */
@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) {} /* Recebe como serviço, o httpClient objeto e já torna esse objeto como propriedade da classe através do modificador de acesso*/

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(API + '/' + userName + '/photos'); /*Busca nesse endereço*/
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(API + '/' + userName + '/photos', { params }); /*Busca nesse endereço*/
  }
}
