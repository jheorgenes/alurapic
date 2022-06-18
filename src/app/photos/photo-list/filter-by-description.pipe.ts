import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name:'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if(descriptionQuery){
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery)); /* Compara o descrição de cada foto que tiver a descrição recebida */
    } else {
      return photos;
    }
  }
}
