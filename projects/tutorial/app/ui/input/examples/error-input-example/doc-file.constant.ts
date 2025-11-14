export const DOC_FILE = [
    {
        name: 'example.component.html',
        content: [
            '<form [formGroup]="form">',
            '<ngx-eg-input [label]="\'Nome\'" [errorMessage]="\'Campo obrigatório\'" formControlName="name">',
            '</ngx-eg-input>',
            '<ngx-eg-input [label]="\'Valor\'" [errorMessage]="{ required: \'Campo obrigatório\', minlength: \'Mínimo de 4 digitos\'" formControlName="value">',
            '</ngx-eg-input>',
            '</form>',
        ]
    },
    {
        name: 'example.component.ts',
        content: [
            'import { Component } from \'@angular/core\';',
            'import { FormControl, FormGroup, ReactiveFormsModule, Validators } from \'@angular/forms\';',
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
            'name: new FormControl(\'\', Validators.required)',
            'value: new FormControl(\'\', [Validators.required, Validators.minLength(4)]),',
            '});',
            '}'
        ]
    },
]