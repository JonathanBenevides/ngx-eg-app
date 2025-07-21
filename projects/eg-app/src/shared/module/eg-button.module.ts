import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IonButton } from '@ionic/angular/standalone';
import { IdPipe } from '../pipes/id/id.pipe';

export const IMPORTS = [NgClass, IonButton, MatIconModule, IdPipe];
