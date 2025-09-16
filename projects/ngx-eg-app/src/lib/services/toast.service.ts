import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';

import { ToastConfig } from '../types/eg-toast.type';
import { FIVE_SECONDS, ZERO } from '../utils/magic-number';
import { Theming } from '../interfaces/theming.interface';
import { ThemingType } from '../types/theming.type';

@Injectable()
export class NgxEgToastService {

  constructor(private readonly toastController: ToastController) { }

  public async show(config: ToastConfig): Promise<void> {
    const { message, duration, id, position, type, cssClass, header } = config;
    const className = this.getClass(cssClass, type);
    const toast = await this.toastController.create({
      message,
      header,
      cssClass: className,
      swipeGesture: 'vertical',
      duration: duration || FIVE_SECONDS,
      keyboardClose: true,
      position: position || 'bottom',
      color: type,
      id: id || message.split(' ').map(word => word.charAt(ZERO).toLowerCase()).join('') + '-toast'
    });
    await toast.present();
  }

  private getClass(cssClass: string | string[] = '', type: ThemingType = 'primary'): string | string[] {
    if (Array.isArray(cssClass)) {
      return [...cssClass, 'generic', Theming[type]];
    } else {
      return cssClass ? `${cssClass} generic ${type}` : `generic ${type}`;
    }
  }
}
