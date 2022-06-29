import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';

@NgModule({
  declarations: [ /* Declara o componente */
    PhotoComponent
  ],
  imports: [ /* Precisa para funcionar */
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PhotoComponent
  ]
})
export class PhotoModule {}
