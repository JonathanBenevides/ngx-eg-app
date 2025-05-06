import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonBackButton, IonButton, IonButtons, IonHeader, IonMenuButton, IonProgressBar, IonTitle, IonToolbar } from '@ionic/angular/standalone';

const MODULES = [IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonProgressBar, MatIconModule, IonMenuButton];

@NgModule({ imports: MODULES, exports: MODULES })
export class EgHeaderModule { }
