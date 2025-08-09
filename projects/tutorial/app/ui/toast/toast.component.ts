import { Component } from '@angular/core';
import { NgxEgButton, NgxEgToastService } from 'ngx-eg-app';

@Component({
  selector: 'app-toast',
  imports: [NgxEgButton],
  templateUrl: './toast.component.html',
  providers: [NgxEgToastService]
})
export class ToastComponent {

  constructor(private readonly toast: NgxEgToastService) { }

  public show(): void {
    this.toast.show({ message: 'Minha mensagem aqui', type: 'info' });
  }
}
