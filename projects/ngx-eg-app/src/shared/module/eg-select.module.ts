import { CommonModule } from '@angular/common';
import { IonItem, IonList, IonNote, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { IdPipe } from '../pipes/id/id.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlWrapperComponent } from '../components/form-control-shell/form-control-wrapper.component';

export const IMPORTS = [CommonModule, IonList, IonItem, IonSelect, IonSelectOption, ReactiveFormsModule, IdPipe, IonNote, FormControlWrapperComponent];
