import { CommonModule } from "@angular/common";
import { IonIcon } from "@ionic/angular/standalone";

import { IdGenerator } from '../../lib/pipes/id-generator/id-generator.pipe';
import { call, location, lockClosed, person } from 'ionicons/icons';

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
