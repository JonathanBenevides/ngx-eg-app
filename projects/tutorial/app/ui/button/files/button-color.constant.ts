export const BUTTON_COLOR_FILES = [
    {
        name: 'example.component.html',
        content: [
            '<ngx-eg-button [color]="danger" [icon]="icon"></ngx-eg-button>',
            "",
            '<ngx-eg-button [color]="primary" [icon]="icon"></ngx-eg-button>',
            "",
            '<ngx-eg-button [color]="danger" [label]="label"></ngx-eg-button>',
            "",
            '<ngx-eg-button [color]="primary" [icon]="icon"></ngx-eg-button>',
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
            "public icon = 'content_copy';",
            "public danger = 'danger';",
            "public primary = 'primary';",
            "public label = 'Botão';",
            "",
            "}",
        ]
    }
];
