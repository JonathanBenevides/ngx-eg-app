import { ChangeDetectionStrategy, Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular/standalone';

import { ModalSettings } from '../../../lib/interfaces/modal.interface';

import { IMPORTS } from './modal.module';

@Component({
  selector: 'modal-host',
  imports: IMPORTS,
  templateUrl: './modal-host.component.html',
  styleUrl: './modal-host.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalHostComponent {

  public desktop = false;

  @Input() public component!: any;
  @Input() public settings!: ModalSettings;

  @ViewChild('container', { read: ViewContainerRef, static: true }) public container!: ViewContainerRef;

  private childComponentRef!: ComponentRef<any>;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly platForm: Platform
  ) {
    this.desktop = this.platForm.is('desktop');
  }

  public ngOnInit(): void {
    this.loadComponent();
  }

  public loadComponent(): void {
    this.container.clear();

    this.childComponentRef = this.container.createComponent(this.component);

    // Passar @Input()s
    if (this.settings) {
      Object.keys(this.settings).forEach((key) => {
        this.childComponentRef.instance[key] = this.settings[key as keyof ModalSettings];
      });
    }

    // Permitir que o componente filho feche o modal
    this.childComponentRef.instance.close = (data?: unknown): unknown => this.dismiss(data);
  }

  public dismiss(data?: unknown): void {
    this.modalCtrl.dismiss(data);
  }
}
