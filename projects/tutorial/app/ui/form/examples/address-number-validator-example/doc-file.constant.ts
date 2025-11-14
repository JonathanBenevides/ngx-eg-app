export const DOC_FILE = [
    {
        name: 'example.component.html',
        content: [
            '<form [formGroup]="form">',
            '<ngx-eg-input [label]="\'Número\'" formControlName="number" [errorMessage]="{required: \'campo obrigatório\', pattern: \'somente números\', maxlength: \'Máximo 5 caracteres\', max: \'número máximo 99999\'}">',
            '</ngx-eg-input>',
            '</form>',
        ]
    },
    {
        name: 'example.component.ts',
        content: [
            'import { Component } from \'@angular/core\';',
            'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
            'import { NgxEgInput, REQ_ADDRESS_NUMBER } from \'ngx-eg-app\';',
            '',
            '@Component({',
            'selector: \'app-example\',',
            'imports: [NgxEgInput, ReactiveFormsModule],',
            'templateUrl: \'./example.component.html\'',
            '})',
            'export class ExampleComponent {',
            '',
            'public form: FormGroup = new FormGroup({',
            'number: new FormControl(\'\', REQ_ADDRESS_NUMBER),',
            '});',
            '}'
        ]
    },
]