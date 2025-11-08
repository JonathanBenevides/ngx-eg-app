import { Component } from '@angular/core';
import { NgxModalService } from 'ngx-eg-app';

import { ContentComponent } from './content/content.component';
import { EVERYTHING_FILE } from './files/everything.constant';
import { MODAL_MAIN_FILES } from './files/modal-main.constant';
import { IMPORTS } from './modal.module';

@Component({
  selector: 'app-modal',
  imports: [IMPORTS],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  providers: [NgxModalService]
})
export class ModalComponent {

  public data: any;
  public showModalDoc = false;
  public everythingFile = EVERYTHING_FILE;
  public modalMainFiles = MODAL_MAIN_FILES;

  constructor(private readonly modalService: NgxModalService) { }

  public open(): void {
    this.modalService
      .show(ContentComponent, { title: 'Modal', closeButton: 'fechar' })
      .then((value) => this.data = value);
  }
}
