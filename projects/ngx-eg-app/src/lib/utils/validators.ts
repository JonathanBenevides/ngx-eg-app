import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import moment from 'moment';

import { FIVE, MAX_NUMBER, ONE, TWO, ZERO } from './magic-number';

export const EMAIL_REGEX = new RegExp(
  '^[A-Za-zÀ-ÖØ-öø-ÿ0-9.!#$%&\'*+/=?^_`{|}~-]+@[A-Za-zÀ-ÖØ-öø-ÿ0-9-]+\\.[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$',
  'u'
);

export const NUMBERS_REGEX = new RegExp('^[0-9]+$');

export const REQ_EMAIL = [Validators.required, Validators.pattern(EMAIL_REGEX)];
export const REQ_LETTERS = [Validators.required, Validators.pattern('^[a-zA-Zà-ÿÀ-ŸçÇ\\s]+$')];
export const REQ_NUMBER = [Validators.required, Validators.pattern('^[0-9]+$')];
export const REQ_NAME = [...REQ_LETTERS, Validators.minLength(TWO)];
export const REQ_ADDRESS_NUMBER = [...REQ_NUMBER, Validators.minLength(ONE), Validators.maxLength(FIVE), Validators.min(ZERO), Validators.max(MAX_NUMBER)];

export function VALID_DATE(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return moment(control.value).isValid() ? null : { invalidDate: true };
  };
}

