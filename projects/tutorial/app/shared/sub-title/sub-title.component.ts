import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxEgButton } from 'ngx-eg-app';

@Component({
  selector: 'app-sub-title',
  imports: [NgxEgButton],
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.scss'
})
export class SubTitleComponent {
  @Input() public subTitle: string = '';
  @Output() public event = new EventEmitter<void>();

  public visible: boolean = false;
}
