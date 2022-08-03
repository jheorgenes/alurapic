import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jtw_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService){
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken(); //Pega o token do LocalStorage
    const user = jtw_decode(token) as User; //Quando decodificado, já deixa no formato da Interface User
    this.userName = user.name; //Obtendo o userName do payload
    this.userSubject.next(user); //Faz o subscribe com os dados do usuário
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null); //Emitir um valor nulo para sumir o nome do usuário no header
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  getUserName(){
    return this.userName;
  }
}
