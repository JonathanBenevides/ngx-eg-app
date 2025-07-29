import { Pipe, PipeTransform } from '@angular/core';
import { FOUR, ONE, TWO } from '../../utils/magic-number';

@Pipe({ name: 'mask' })
export class MaskPipe implements PipeTransform {

  public transform(value: string | number, type: 'currency' | 'email' | 'phone'): string | number {
    switch (type) {
      case 'currency':
        value = value.toString().replaceAll(',', '').replaceAll('.', '');
        value = '*'.repeat(value.length);
        break;
      case 'email':
        const [email, dominium] = (value as string).split('@');
        const [name, rest] = dominium.split('.');
        value = `${email[0]}${'*'.repeat(email.length - TWO)}${email[email.length - ONE]}@${name}.${'*'.repeat(rest.length)}`;
        break;
      case 'phone':
        value = '*'.repeat((value as string).length - FOUR) + (value as string).slice(-FOUR);
        break;
    }
    return value;
  }

}
