import { Pipe, PipeTransform } from '@angular/core';

import { THREE, ZERO } from '../../utils/magic-number';

@Pipe({ name: 'mask' })
export class MaskPipe implements PipeTransform {

  public transform(value: string | number, type?: 'currency' | 'email' | 'phone'): string | number {
    if (!value) return '';

    switch (type) {
      case 'currency':
        value = value.toString().replaceAll(/[0-9]/g, '*');
        break;
      case 'email':
        value = value.toString().replace(
          /^([^@])([^@]*)([^@])@([^.]+)\.([A-Za-z.]+)$/,
          (_, first, middle, last, domain, tlds) => {
            // Máscara do nome de usuário
            const maskedUser = first + '*'.repeat(middle.length) + last;

            // Máscara das letras após o domínio principal
            const maskedTlds = tlds.replace(/[A-Za-z]/g, '*');

            return `${maskedUser}@${domain}.${maskedTlds}`;
          }
        );
        break;
      case 'phone':
        const digits = value.toString().match(/[0-9]/g)?.length || ZERO;
        let digitCount = 0;
        value = value.toString().replace(/[0-9]/g, (_value) => {
          digitCount++;
          return digitCount < (digits - THREE) ? '*' : _value;
        });
        break;
    }

    return value;
  }

}
