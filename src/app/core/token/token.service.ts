import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hasToken(){
    return !!this.getToken(); //Retorna verdadeiro se existir token e se não existir, vai vir null e por isso não vai passar na condição
  }

  setToken(token){
    window.localStorage.setItem(KEY, token); // Passa a chave e o valor pro localStorage
  }

  getToken(){
    return window.localStorage.getItem(KEY); //Usa o a chave como identificador para obter o token
  }

  removeToken(){
    window.localStorage.removeItem(KEY);
  }
}
