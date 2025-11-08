import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxEgToastService, Select, Theming } from 'ngx-eg-app';

import { CUSTOM_CSS_TOAST_FILE } from './files/custom-css.constant';
import { DEFAULT_TOAST_FILE } from './files/default.constant';
import { HEADER_TOAST_FILE } from './files/header.constant';
import { INITIAL_PRESENTATION } from './files/initial-presentation.constant';
import { POSITIONING_TOAST_FILE } from './files/positioning.constant';
import { THEMING_TOAST_FILE } from './files/theming.constant';
import { TIMING_TOAST_FILE } from './files/timing.constant';
import { IMPORTS } from './toast.module';

@Component({
  selector: 'app-toast',
  imports: [IMPORTS],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  providers: [NgxEgToastService]
})
export class ToastComponent {

  public initialPresentation = INITIAL_PRESENTATION;
  public defaultToastDoc = DEFAULT_TOAST_FILE;
  public themingToastDoc = THEMING_TOAST_FILE;
  public timingToastDoc = TIMING_TOAST_FILE;
  public positioningToastDoc = POSITIONING_TOAST_FILE;
  public headerToastDoc = HEADER_TOAST_FILE;
  public customCssToastDoc = CUSTOM_CSS_TOAST_FILE;

  public showDefToastDoc = false;
  public showThemingToastDoc = false;
  public showTimerToastDoc = false;
  public showPositioningToastDoc = false;
  public showHeaderToastDoc = false;
  public showCustomCssToastDoc = false;

  public options: Select[] = [
    { value: Theming.primary, label: 'Primary' },
    { value: Theming.danger, label: 'Danger' },
    { value: Theming.success, label: 'Success' },
    { value: Theming.warning, label: 'Warning' }
  ];

  public positions: Select[] = [
    { value: 'top', label: 'Top' },
    { value: 'middle', label: 'Middle' },
    { value: 'bottom', label: 'Bottom' }
  ];

  public get theming(): boolean {
    return this.form.get('theming')?.valid!;
  }

  public get positioning(): boolean {
    return this.form.get('position')?.valid!;
  }

  public form: FormGroup = new FormGroup({
    theming: new FormControl(null, Validators.required),
    position: new FormControl(null, Validators.required)
  });

  constructor(private readonly toast: NgxEgToastService) {}

  public showDefault(): void {
    this.toast.show({ message: 'Toast default' });
  }

  public showTheming(): void {
    const theme = this.form.value.theming.value;
    this.toast.show({ message: 'Theming toast', type: theme });
  }

  public showTiming(): void {
    this.toast.show({ message: 'Timing toast', type: Theming.primary, duration: 5000 });
  }

  public showPositioning(): void {
    const position = this.form.value.position.value;
    this.toast.show({ message: 'Timing toast', type: Theming.primary, position: position });
  }

  public showHeader(): void {
    this.toast.show({ message: 'My message here.', type: Theming.primary, header: 'Header' });
  }

  public showCustomCss(): void {
    this.toast.show({ message: 'Custom css', cssClass: 'custom', duration: 100000000 });
  }
}
