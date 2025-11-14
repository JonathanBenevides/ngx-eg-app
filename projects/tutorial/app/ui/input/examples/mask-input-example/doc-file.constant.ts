export const DOC_FILE = [
    {
        name: 'example.component.html',
        content: [
            '<form [formGroup]="form">',
            '<ngx-eg-input [mask]="phoneMask" [label]="\'Phone\'" formControlName="phone">',
            '</ngx-eg-input>',
            '<ngx-eg-input [mask]="showMask ? phoneMask : \'\' " (blur)="change(false)" (focus)="change(true)" [label]="\'Hybrid Mask\'" formControlName="hybrid">',
            '</ngx-eg-input>',
            '</form>',
        ]
    },
    {
        name: 'example.component.ts',
        content: [
            'import { Component } from \'@angular/core\';',
            'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
            'import { NgxEgInput } from \'ngx-eg-app\';',
            '',
            '@Component({',
            'selector: \'app-example\',',
            'imports: [NgxEgInput, ReactiveFormsModule],',
            'templateUrl: \'./example.component.html\'',
            '})',
            'export class ExampleComponent {',
            '',
            'public form: FormGroup = new FormGroup({',
            'phone: new FormControl(\'11953564438\')',
            'hybrid: new FormControl(\'11953564438\')',
            '});',
            '',
            'public phoneMask = \'(XX) X XXXX-XXXX\';',
            'public showMask = true;',
            '',
            'public focusStatusChange(hasFocus: boolean): void {',
            'this.showMask = this.form.get(\'hybrid\')!.valid && !isNaN(this.form.get(\'hybrid\')!.value) && !hasFocus;',
            '}',
            '}'
        ]
    },
]