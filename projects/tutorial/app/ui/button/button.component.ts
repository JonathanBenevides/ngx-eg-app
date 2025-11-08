import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IMPORTS } from './button.module';
import { BUTTON_COLOR_FILES } from './files/button-color.constant';
import { BUTTON_DISABLED_FILES } from './files/button-disabled.constant';
import { BUTTON_FORMAT_FILES } from './files/button-format.constant';
import { BUTTON_ICON_FILES } from './files/button-icon.constant';
import { BUTTON_SIZE_FILES } from './files/button-size.constant';
import { BUTTON_STRETCHED_FILES } from './files/button-stretched.constant';
import { BUTTON_STYLE_FILES } from './files/button-style.constant';
import { INITIAL_PRESENTATION } from './files/initial-presentation.constant';
import { LINK_FILES } from './files/link-files.constant';
import { BASIC_BTN_FILES } from './files/button-basic.constant';

@Component({
  selector: 'app-button',
  imports: IMPORTS,
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  public linkFiles = LINK_FILES;
  public buttonSizeFiles = BUTTON_SIZE_FILES;
  public buttonIconFiles = BUTTON_ICON_FILES;
  public buttonFormatFiles = BUTTON_FORMAT_FILES;
  public buttonDisabledFiles = BUTTON_DISABLED_FILES;
  public buttonStretchedFiles = BUTTON_STRETCHED_FILES;
  public buttonColorFiles = BUTTON_COLOR_FILES;
  public buttonStyleFiles = BUTTON_STYLE_FILES;
  public buttonMainFiles = INITIAL_PRESENTATION;
  public buttonBasicFile = BASIC_BTN_FILES;

  public showLinkDoc: boolean = false;
  public showBtnSizeDoc: boolean = false;
  public showBtnIconDoc: boolean = false;
  public showBtnFormatDoc: boolean = false;
  public showBtnDisabledDoc: boolean = false;
  public showBtnStretchedDoc: boolean = false;
  public showBtnColorDoc: boolean = false;
  public showBtnStyleDoc: boolean = false;
  public showBtnBasicDoc: boolean = false;

  public click(): void {
    console.log('clicou')
  }
}
