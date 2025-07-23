import { Validators } from '@angular/forms';

const regex = new RegExp(
    "^[A-Za-zÀ-ÖØ-öø-ÿ0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-zÀ-ÖØ-öø-ÿ0-9-]+\\.[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$",
    'u'
);

export const REQ_EMAIL = [Validators.required, Validators.pattern(regex)];
export const REQ_LETTERS = [Validators.required, Validators.pattern('^[a-zA-Zà-ÿÀ-ŸçÇ\\s]+$')];
export const REQ_NUMBER = [Validators.required, Validators.pattern('^[0-9]+$')];
export const REQ_NAME = [...REQ_LETTERS, Validators.minLength(2)];
export const REQ_ADDRESS_NUMBER = [...REQ_NUMBER, Validators.minLength(1), Validators.maxLength(5), Validators.min(0), Validators.max(99999)];
