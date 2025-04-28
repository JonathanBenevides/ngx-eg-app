import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IonButton } from '@ionic/angular/standalone';

const MODULES = [NgClass, IonButton, MatIconModule];

@NgModule({ imports: MODULES, exports: MODULES })
export class EgButtonModule { }
