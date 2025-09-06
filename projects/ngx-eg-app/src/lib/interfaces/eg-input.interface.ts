import { ButtonAction } from '../../shared/interface/generic.interface';
import { ButtonActionType } from '../../shared/type/eg-input.type';

export interface InputButtonAction extends ButtonAction {
  action: ButtonActionType
}

export type HeaderButtonAction = ButtonAction;
