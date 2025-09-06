import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonProgressBar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { logOut, logOutOutline, notifications, notificationsOutline, settings, settingsOutline } from 'ionicons/icons';

export const IMPORTS = [
  IonIcon,
  IonTitle,
  IonHeader,
  IonButton,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonBackButton,
  IonProgressBar
];

export const ICONS = {
  settings,
  settingsOutline,
  notifications,
  notificationsOutline,
  logOut,
  logOutOutline
};
