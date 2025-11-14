import { ReactiveFormsModule } from "@angular/forms";
import { NgxEgGroup, NgxEgInput } from "ngx-eg-app";
import { BASE_IMPORTS } from "../../../shared/module/base.module";
import { IonToggle } from "@ionic/angular/standalone";

export const IMPORTS = [
  ...BASE_IMPORTS,
  ReactiveFormsModule, NgxEgInput, NgxEgGroup, IonToggle
];
