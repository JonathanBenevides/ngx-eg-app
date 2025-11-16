export const DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ion-toggle (ionChange)="border=!border">No border</ion-toggle>Border',
      '<ngx-eg-group [border]="border" [label]="\'Group 1\'" formGroupName="groupOne" [icon]="\'lock - closed\'">',
      '<ngx-eg-input [label]="\'Name\'" formControlName="name"></ngx-eg-input>',
      '<ngx-eg-group [border]="border" [label]="\'Group 2\'" formGroupName="groupTwo" [icon]="\'lock - closed\'">',
      '<ngx-eg-input [label]="\'Last name\'" formControlName="lastname"></ngx-eg-input>',
      '</ngx-eg-group>',
      '</ngx-eg-group>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
      'import { NgxEgInput, NgxEgGroup } from \'ngx-eg-app\';',
      'import { IonToggle } from \'@ionic/angular/standalone\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgInput, ReactiveFormsModule, NgxEgGroup, IonToggle],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public border = false;',
      '',
      'public form: FormGroup = new FormGroup({',
      'groupOne: new FormGroup({',
      'name: new FormControl(),',
      'groupTwo: new FormGroup({',
      'lastname: new FormControl(),',
      '})',
      '})',
      '});',
      '}'
    ]
  }
];