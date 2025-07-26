import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'idGenerator' })
export class IdGenerator implements PipeTransform {

  public transform(id: string, type?: string): string {
    return `${id.toLowerCase().replaceAll(' ', '-')}${type ? '-' + type : ''}`;
  }
}
