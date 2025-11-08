import { ReactiveFormsModule } from "@angular/forms";
import { NgxEgInput } from "ngx-eg-app";
import { BASE_IMPORTS } from "../../../shared/module/base.module";
import { JsonPipe } from "@angular/common";

export const IMPORTS = [
  ...BASE_IMPORTS,
  ReactiveFormsModule,
  NgxEgInput,
  JsonPipe
];
