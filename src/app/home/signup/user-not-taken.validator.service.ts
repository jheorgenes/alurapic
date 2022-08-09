import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';;

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService{

  constructor(private signUpService: SignUpService){}

  checkUserNameTaken(){

    return (control: AbstractControl) => {
      return control
                .valueChanges
                .pipe(debounceTime(300)) //Evita de ficar buscando a cada letra digitada
                .pipe(switchMap(userName => this.signUpService.checkUserNameTaken(userName))) //Consultando a api
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null)) //Retornando um objeto js userNameTaken=true ou null
                .pipe(first()); //Informa que o observable completou e retorna o primeiro objeto Emitido.
    }
  }
}
