import { CommonModule } from '@angular/common';
import { IonItem, IonList, IonNote, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { IdPipe } from '../pipes/id/id.pipe';
import { ReactiveFormsModule } from '@angular/forms';

export const IMPORTS = [CommonModule, IonList, IonItem, IonSelect, IonSelectOption, ReactiveFormsModule, IdPipe, IonNote];
