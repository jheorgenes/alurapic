import { Component, Input } from '@angular/core'; /* Sempre que for utilizar um componente, precisa realizar o import */

@Component({
  selector: 'ap-photo', /* Define o seletor para identificar esse componente */
  templateUrl: 'photo.component.html' /* Define qual template será utilizado */
})

export class PhotoComponent {
  @Input() description='';
  @Input() url='';
}


