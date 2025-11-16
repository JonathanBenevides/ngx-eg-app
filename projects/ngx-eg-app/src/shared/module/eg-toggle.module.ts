import { ReactiveFormsModule } from '@angular/forms';
import { IonToggle } from '@ionic/angular/standalone';

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';

export const IMPORTS = [IonToggle, ReactiveFormsModule, IdGenerator];
