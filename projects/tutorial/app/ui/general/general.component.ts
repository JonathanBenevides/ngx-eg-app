import { Component } from '@angular/core';
import { MaskPipe, NgxEgTimer } from 'ngx-eg-app';

@Component({
  selector: 'app-general',
  imports: [NgxEgTimer, MaskPipe],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

}
