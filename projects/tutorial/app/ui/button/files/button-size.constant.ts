export const BUTTON_SIZE_FILES = [
    {
        name: 'example.component.html',
        content: [
            '<ngx-eg-button [size]="small" [label]="label"></ngx-eg-button>',
            "",
            '<ngx-eg-button [size]="default" [label]="label"></ngx-eg-button>',
            "",
            '<ngx-eg-button [size]="large" [label]="label"></ngx-eg-button>',
            "",
        ]
    },
    {
        name: 'example.component.ts',
        content: [
            "import { NgxEgButton } from 'ngx-eg-app';",
            "",
            "@Component({",
            "selector: 'app-button',",
            "imports: [NgxEgButton],",
            "templateUrl: './button.component.html'",
            "})",
            "export class ExampleComponent {",
            "",
            "public small = 'small';",
            "public default = 'default';",
            "public large = 'large';",
            "public label = 'Botão';",
            "",
            "}",
        ]
    }
];
