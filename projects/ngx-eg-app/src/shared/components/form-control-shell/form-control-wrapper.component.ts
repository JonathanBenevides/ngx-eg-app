import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IonNote } from '@ionic/angular/standalone';

import { IdGenerator } from '../../../lib/pipes/id-generator/id-generator.pipe';

@Component({
  selector: 'form-control-wrapper',
  imports: [IonNote, IdGenerator, CommonModule],
  templateUrl: './form-control-wrapper.component.html',
  styleUrl: './form-control-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlWrapperComponent implements OnChanges {

  @Input() public id = ''; // caso o ID seja personalizado, passe-o para a acessibilidade funcionar corretamente
  @Input() public class = '';
  @Input() public label = '';
  @Input() public showError = false;
  @Input() public errorMessage: string | { [key: string]: string } = '';

  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('showError' in changes) {
      this.changeHintVisibility();
    }
  }

  private changeHintVisibility(): void {
    requestAnimationFrame(() => {
      const hint = this.elementRef
        .nativeElement
        .querySelector('ion-select, ion-input, ion-checkbox')
        ?.shadowRoot
        ?.querySelector('[part="supporting-text helper-text"]') as HTMLElement;
      if (hint) {
        hint.style.visibility = this.showError && this.errorMessage ? 'hidden' : 'unset';
      }
    });
  }
}
