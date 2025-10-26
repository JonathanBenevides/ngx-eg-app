import { ThemingType } from './theming.type';

export type ToastConfig = Partial<ToastConfigBase> & { message: string };

type ToastConfigBase = {
  status: number,
  type: ThemingType,
  duration: number,
  id: string,
  header: string,
  position: 'top' | 'bottom' | 'middle',
  cssClass: string | string[],
}
