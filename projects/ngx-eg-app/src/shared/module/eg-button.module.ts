import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IonButton } from '@ionic/angular/standalone';

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';

export const IMPORTS = [NgClass, IonButton, MatIconModule, IdGenerator];
