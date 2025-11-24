import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';
import { IonButton, IonIcon, IonInput, IonNote } from '@ionic/angular/standalone';
import { MaskitoDirective } from '@maskito/angular';

export const IMPORTS = [
  IonIcon,
  FormsModule,
  ReactiveFormsModule,
  IonInput,
  NgClass,
  IdGenerator,
  IonNote,
  IonButton,
  MaskitoDirective
];
