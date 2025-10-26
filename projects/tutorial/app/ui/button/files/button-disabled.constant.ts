export const BUTTON_DISABLED_FILES = [
    {
        name: 'example.component.html',
        content: [
            '<ngx-eg-button [color]="color" [disabled]="true" [icon]="icon"></ngx-eg-button>',
            "",
            '<ngx-eg-button [disabled]="true" [label]="label"></ngx-eg-button>',
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
            "public color = 'danger';",
            "public label = 'Botão';",
            "",
            "}",
        ]
    }
];
