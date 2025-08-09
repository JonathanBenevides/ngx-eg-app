import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges, ViewEncapsulation } from '@angular/core';

import { IMPORTS } from '../../../shared/module/eg-button.module';
import { ButtonFill, ButtonShape, ButtonSize, ButtonType } from '../../../shared/type/eg-button.type';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  imports: IMPORTS,
  selector: 'ngx-eg-button',
  templateUrl: './eg-button.component.html',
  styleUrl: './eg-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgButton implements OnChanges {

  @Input() public id = '';
  @Input() public mode: 'ios' | 'md' = 'md';
  @Input() public icon: string = '';
  @Input() public label: string = '';
  @Input() public ariaLabel: string = '';
  @Input() public expand: 'block' | '' = '';
  @Input() public disabled: boolean = false;
  @Input() public fill: ButtonFill = 'solid';
  @Input() public type: ButtonType = 'button';
  @Input() public size: ButtonSize = 'default';
  @Input() public shape: ButtonShape = 'default';
  @Input() public iconSide: 'left' | 'right' = 'left';

  @Output() onClick = new EventEmitter<Event>();

  constructor(private readonly element: ElementRef<IonButton>, private readonly renderer: Renderer2) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('disabled' in changes) {
      this.renderer.setAttribute(this.element.nativeElement, 'aria-disabled', this.disabled ? 'true' : 'false');
    }
  }

  public click():void {
    this.onClick.emit();
  }
}
