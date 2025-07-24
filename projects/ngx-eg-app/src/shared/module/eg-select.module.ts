import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonList, IonNote, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

import { FormControlWrapperComponent } from '../components/form-control-shell/form-control-wrapper.component';
import { IdPipe } from '../pipes/id/id.pipe';

export const IMPORTS = [CommonModule, IonList, IonItem, IonSelect, IonSelectOption, ReactiveFormsModule, IdPipe, IonNote, FormControlWrapperComponent];
