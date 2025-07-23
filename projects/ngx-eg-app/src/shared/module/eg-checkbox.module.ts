import { IonCheckbox, IonLabel, IonNote } from '@ionic/angular/standalone';
import { IdPipe } from '../pipes/id/id.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlWrapperComponent } from '../components/form-control-shell/form-control-wrapper.component';

export const IMPORTS = [IonCheckbox, ReactiveFormsModule, IdPipe, IonLabel, IonNote, FormControlWrapperComponent];
