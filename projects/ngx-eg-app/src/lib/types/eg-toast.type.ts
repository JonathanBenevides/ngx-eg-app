
export type ToastConfig = Partial<ToastConfigBase> & { message: string };

export type ToastType = 'warning' | 'danger' | 'success' | 'info';

type ToastConfigBase = {
  status: number,
  type: ToastType,
  duration: number,
  id: string,
  header: string,
  position: 'top' | 'bottom' | 'middle',
  cssClass: string | string[],
}
