import { ButtonActionType } from '../type/eg-input.type';

export interface ButtonAction {
  icon: string,
  action: ButtonActionType,
  click: Function,
  ariaLabel?: string
}
