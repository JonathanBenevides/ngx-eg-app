export const LINK_FILES = [
    {
        name: 'example.component.html',
        content: [
            '<ngx-eg-button [type]="type" [size]="size" [label]="Link"></ngx-eg-button>'
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
            "public type = 'link';",
            "public size = 'small';",
            "public label = 'Link';",
            "",
            "}",
        ]
    }
];
