import { Component } from '@angular/core';
import { NgxEgButton, NgxEgToastService } from 'ngx-eg-app';

@Component({
  selector: 'app-eg-toast',
  imports: [NgxEgButton],
  templateUrl: './eg-toast.component.html',
  styleUrl: './eg-toast.component.scss',
  providers: [NgxEgToastService]
})
export class EgToastComponent {

  constructor(private readonly toast: NgxEgToastService) { }

  public show(): void {
    this.toast.show({ message: 'Minha mensagem aqui', type: 'info' });
  }
}
