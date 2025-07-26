import { ReactiveFormsModule } from '@angular/forms';
import { IonCheckbox, IonLabel, IonNote } from '@ionic/angular/standalone';

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';
import { FormControlWrapperComponent } from '../components/form-control-shell/form-control-wrapper.component';

export const IMPORTS = [IonCheckbox, ReactiveFormsModule, IdGenerator, IonLabel, IonNote, FormControlWrapperComponent];
