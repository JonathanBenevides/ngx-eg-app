import { ButtonActionRoleType } from '../type/eg-input.type';

export interface ButtonAction {
  icon: string,
  click: Function,
  ariaLabel?: string;
  role?: ButtonActionRoleType
}

export interface EgInputValueAccessor {
  onBlur(event: CustomEvent): void;
  handleChange({ detail: { value } }: CustomEvent): void;
}