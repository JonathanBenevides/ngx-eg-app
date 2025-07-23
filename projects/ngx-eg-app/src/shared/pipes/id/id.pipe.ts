import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pipeId' })
export class IdPipe implements PipeTransform {

  public transform(id: string, label: string, type: 'select' | 'checkbox' | 'input' | 'button'): string {
    return id || `${label.toLowerCase().replaceAll(' ', '-')}-${type}`;
  }

}
