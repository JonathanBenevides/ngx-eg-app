import { ButtonAction } from "../type/eg-input.type";

export interface InputAction {
    icon: string,
    action: ButtonAction,
    click: Function,
    ariaLabel?: string
}
