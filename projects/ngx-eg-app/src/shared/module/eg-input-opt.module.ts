import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonInputOtp, IonNote } from '@ionic/angular/standalone';

export const IMPORTS = [
  IonInputOtp,
  ReactiveFormsModule,
  CommonModule,
  FormsModule,
  IonNote
];
