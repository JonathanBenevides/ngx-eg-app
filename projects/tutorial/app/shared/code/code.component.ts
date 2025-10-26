import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxEgButton, ZERO } from 'ngx-eg-app';

interface Projection { name: string; content: { indentation: number, value: string }[] };
interface RawProjection { name: string; content: string[] };
const indentationValue = 16;

@Component({
  selector: 'app-code',
  imports: [MatTabsModule, NgxEgButton],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CodeComponent {
  private _files: Projection[] = [];

  public get files(): Projection[] {
    return this._files;
  }

  @Input() public set files(_files: RawProjection[]) {
    this._files = this.parseContent(_files);
  };

  private parseContent(_files: RawProjection[]): Projection[] {
    return _files.map((file) => {
      let indentation = ZERO;
      const content: { indentation: number; value: string }[] = [];
      file.content.forEach((line) => {
        if (line) {
          if (line.match(/[{\[<]/g) && !line.match(/<\/|[)\]}>]/g)) {
            content.push({ indentation, value: line });
            indentation += indentationValue;
            return;
          } else if (!line.match(/[{\[<]/g) && line.match(/<\/|[)\]}>]/g)) {
            indentation -= indentationValue;
            content.push({ indentation, value: line });
            return;
          }
        }
        content.push({ indentation, value: line });
      });

      return { ...file, content };
    });
  }
}
