import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { call, location, lockClosed, person } from 'ionicons/icons';

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';

export const IMPORTS = [
  IonIcon,
  IdGenerator,
  CommonModule
];

export const ICONS = {
  call,
  person,
  location,
  lockClosed
};
