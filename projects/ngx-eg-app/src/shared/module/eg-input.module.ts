import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';

export const IMPORTS = [
  NgClass,
  FormsModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  IdGenerator
];
