import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonList, IonNote, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';
import { FormControlWrapperComponent } from '../components/form-control-shell/form-control-wrapper.component';

export const IMPORTS = [CommonModule, IonList, IonItem, IonSelect, IonSelectOption, ReactiveFormsModule, IdGenerator, IonNote, FormControlWrapperComponent];
