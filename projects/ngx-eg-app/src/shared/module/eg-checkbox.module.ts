import { ReactiveFormsModule } from '@angular/forms';
import { IonCheckbox, IonLabel, IonNote } from '@ionic/angular/standalone';

import { FormControlWrapperComponent } from '../components/form-control-shell/form-control-wrapper.component';
import { IdPipe } from '../pipes/id/id.pipe';

export const IMPORTS = [IonCheckbox, ReactiveFormsModule, IdPipe, IonLabel, IonNote, FormControlWrapperComponent];
