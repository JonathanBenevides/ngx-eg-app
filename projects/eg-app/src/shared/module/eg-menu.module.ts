import { NgModule } from '@angular/core';
import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from '@ionic/angular/standalone';

const MODULES = [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent];

@NgModule({ imports: MODULES, exports: MODULES })
export class EgMenuModule { }
