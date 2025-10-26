import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LINK_FILES } from './files/link-files.constant';
import { IMPORTS } from './button.module';
import { BUTTON_SIZE_FILES } from './files/button-size.constant';
import { BUTTON_ICON_FILES } from './files/button-icon.constant';
import { BUTTON_FORMAT_FILES } from './files/button-format.constant';
import { BUTTON_DISABLED_FILES } from './files/button-disabled.constant';
import { BUTTON_STRETCHED_FILES } from './files/button-stretched.constant';
import { BUTTON_COLOR_FILES } from './files/button-color.constant';
import { BUTTON_STYLE_FILES } from './files/button-style.constant';
import { BUTTON_MAIN_FILES } from './files/button-main.constant';

@Component({
  selector: 'app-button',
  imports: IMPORTS,
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  public link_files = LINK_FILES;
  public button_size_files = BUTTON_SIZE_FILES;
  public button_icon_files = BUTTON_ICON_FILES;
  public button_format_files = BUTTON_FORMAT_FILES;
  public button_disabled_files = BUTTON_DISABLED_FILES;
  public button_stretched_files = BUTTON_STRETCHED_FILES;
  public button_color_files = BUTTON_COLOR_FILES;
  public button_style_files = BUTTON_STYLE_FILES;
  public button_main_files = BUTTON_MAIN_FILES;

  public showLinkDoc: boolean = false;
  public showBtnSizeDoc: boolean = false;
  public showBtnIconDoc: boolean = false;
  public showBtnFormatDoc: boolean = false;
  public showBtnDisabledDoc: boolean = false;
  public showBtnStretchedDoc: boolean = false;
  public showBtnColorDoc: boolean = false;
  public showBtnStyleDoc: boolean = false;
}
