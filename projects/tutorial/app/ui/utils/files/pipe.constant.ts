export const PIPE_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<p>{{ \'jonathan_benevides@gmail.com\' | mask: \'email\' }}</p>',
      '<p>{{ \'jonathanfbenevides@gmail.com\' | mask: \'email\' }}</p>',
      '<p>{{ \'jonathanfbenevides@f1rst.com.br\' | mask: \'email\' }}</p>',
      '<p>{{ \'(11) 9 5356 - 4438\' | mask: \'phone\' }} </p>',
      '<p> {{ \'+ 55(11) 9 5356 - 4438\' | mask: \'phone\' }}</p>',
      '<p> {{ \'55 11 9 5356 4438\' | mask: \'phone\' }}</p>',
      '<p>{{ \'1.150,50\' | mask: \'currency\' }}</p>',
      '<p>{{ \'1, 150.50\' | mask: \'currency\' }}</p>',
      '<p>{{ \'1 150.50\' | mask: \'currency\' }}</p>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { MaskPipe } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [MaskPipe],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {}'
    ]
  }
];