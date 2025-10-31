import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import hljs from 'highlight.js';
import { NgxEgButton, ONE, TWO, ZERO } from 'ngx-eg-app';

interface Projection { name: string; content: { indentation: number, value: string }[] };
interface RawProjection { name: string; content: string[] };
const indentationValue = 16;

@Component({
  selector: 'app-code',
  imports: [MatTabsModule, NgxEgButton],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
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
      const fileExtension = file.name.split('.').pop();
      file.content.forEach((line) => {
        const value = this.styleLine(line, fileExtension!);
        if (line) {
          if (
            (!line.match(/[{\[<(]/g) && line.match(/<\/|[)\]}>]/g)) ||
            (line.substring(ZERO, TWO).match(/<\//g))
          ) {
            indentation -= indentationValue;
            content.push({ indentation, value });
            return;
          } else if (
            (line.match(/[{\[<(]/g) && !line.match(/<\/|[)\]}>]/g)) ||
            (line.substring(ZERO, ONE).match(/</g) && !line.match(/<\//g))
          ) {
            content.push({ indentation, value });
            indentation += indentationValue;
            return;
          }
        }
        line = fileExtension === 'ts' ? line.trim().slice(-ONE) : line;
        if (line.match(/[{\[<(]/g) && !line.match(/</g)) {
          content.push({ indentation, value });
          indentation += indentationValue;
          return;
        }
        content.push({ indentation, value });
      });

      return { ...file, content };
    });
  }

  private styleLine(line: string, fileExtension: string): string {
    switch (fileExtension) {
      case 'ts':
        line = this.styleTsLine(line);
        break;
      case 'html':
        line = this.styleHtmlLine(line);
        break;
      case 'scss':
        line = this.styleScssLine(line);
        break;
    }
    return line;
  }

  private styleHtmlLine(line: string): string {
    return hljs.highlight(line, { language: 'html' }).value;
  }

  private styleTsLine(line: string): string {
    return hljs.highlight(line, { language: 'typescript' }).value;
  }

  private styleScssLine(line: string): string {
    return hljs.highlight(line, { language: 'scss' }).value;
  }
}
