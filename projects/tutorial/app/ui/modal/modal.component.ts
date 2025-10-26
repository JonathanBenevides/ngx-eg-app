import { Component } from '@angular/core';
import { NgxEgButton } from 'ngx-eg-app';

import { NgxModalService } from '../../../../ngx-eg-app/src/lib/services/modal.service';

import { ContentComponent } from './content/content.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [NgxEgButton, JsonPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  providers: [NgxModalService]
})
export class ModalComponent {

  public data: any;
  constructor(private readonly modalService: NgxModalService) { }

  public open(): void {
    this.modalService
      .show(ContentComponent, { title: 'Modal', closeButton: 'fechar' })
      .then((value) => this.data = value);
  }
}
