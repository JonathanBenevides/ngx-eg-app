export const EVERYTHING_FILE = [
  {
    name: 'main.component.html',
    content: [
      '<div>Content: {{ data | json }}</div>',
      '<ngx-eg-button [label]="\'Open\'" (click)="open()"></ngx-eg-button>'
    ]
  },
  {
    name: 'main.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxModalService } from \'ngx-eg-app\';',
      'import { JsonPipe } from \'@angular/common\';',
      'import { ModalComponent } from \'./modal.component\';',
      '',
      '@Component({',
      'selector: \'app-main\',',
      'imports: [JsonPipe],',
      'providers: [NgxModalService],',
      'templateUrl: \'./main.component.html\'',
      '})',
      'export class MainComponent {',
      '',
      'public data: any;',
      '',
      'constructor(private readonly modalService: NgxModalService) { }',
      '',
      'public open(): void {',
      'this.modalService',
      '.show(ModalComponent, { title: \'Modal\', closeButton: \'fechar\' })',
      '.then((value) => this.data = value);',
      '}',
      '}'
    ]
  },
  {
    name: 'modal.component.html',
    content: [
      '<form [formGroup]="form" (ngSubmit)="dismiss()">',
      '<ngx-eg-input [label]="\'nome\'" formControlName="name">',
      '</ngx-eg-input>',
      '<ngx-eg-button [label]="\'Close\'" (click)="dismiss()">',
      '</ngx-eg-button>',
      '</form>'
    ]
  },
  {
    name: 'modal.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
      'import { ModalController } from \'@ionic/angular/standalone\';',
      'import { NgxEgButton, NgxEgInput } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-modal\',',
      'imports: [NgxEgButton, NgxEgInput, ReactiveFormsModule],',
      'template: \'./modal.component.html\',',
      '})',
      'export class ModalComponent {',
      '',
      'public form = new FormGroup({',
      'name: new FormControl(\'\'\'\')',
      '});',
      '',
      'constructor(private readonly modalCtrl: ModalController) {}',
      '',
      'public dismiss(): void {',
      'this.modalCtrl.dismiss(this.form.value);',
      '}',
      '}'
    ]
  }
];