import { IonCheckbox, IonLabel, IonNote } from '@ionic/angular/standalone';
import { IdPipe } from '../pipes/id/id.pipe';
import { ReactiveFormsModule } from '@angular/forms';

export const IMPORTS = [IonCheckbox, ReactiveFormsModule, IdPipe, IonLabel, IonNote];
