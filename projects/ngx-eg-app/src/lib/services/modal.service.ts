import { Injectable, Type } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';

import { ModalHostComponent } from '../../shared/components/modal-host-component/modal-host.component';
import { ModalSettings } from '../interfaces/modal.interface';

@Injectable()
export class NgxModalService {

  constructor(private readonly modal: ModalController) { }

  public async show<T>(
    component: Type<T>,
    settings: ModalSettings
  ): Promise<unknown> {
    const modal = await this.modal.create({
      component: ModalHostComponent,
      componentProps: {
        component,
        settings
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    return data;
  }
}
