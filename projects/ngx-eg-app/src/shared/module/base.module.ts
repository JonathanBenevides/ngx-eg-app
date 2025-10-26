import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonContent, IonHeader, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/angular/standalone';

const MODULES = [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, CommonModule];

@NgModule({ imports: MODULES, exports: MODULES })
export class EgMenuModule { }
