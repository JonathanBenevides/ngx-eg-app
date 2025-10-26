import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  imports: [],
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.scss'
})
export class SubTitleComponent {
  @Input() public subTitle: string = '';
}
