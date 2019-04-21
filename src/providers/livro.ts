import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LivroProvider {

  private baseApiPath = 'https://openlibrary.org/api/';

  constructor(public http: Http) {
    console.log('livro');
  }

  getLivros() {
    return this.http.get(this.baseApiPath + 'books?bibkeys=ISBN:9788588639287,ISBN:9788532522610,ISBN:9788577240562&format=json&details=true');
  }


}
