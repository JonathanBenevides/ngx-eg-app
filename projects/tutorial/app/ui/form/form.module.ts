import { BASE_IMPORTS } from '../../shared/module/base.module';
import { AddressNumberValidatorExampleComponent } from './examples/address-number-validator-example/address-number-validator-example.component';
import { DateValidatorExampleComponent } from './examples/date-validator-example/date-validator-example.component';
import { DeepFormExampleComponent } from './examples/deep-form-example/deep-form-example.component';
import { EmailValidatorExampleComponent } from './examples/email-validator-example/email-validator-example.component';
import { GroupExampleComponent } from './examples/group-example/group-example.component';
import { NameValidatorExampleComponent } from './examples/name-validator-example/name-validator-example.component';
import { OnlyLettersValidatorExampleComponent } from './examples/only-letters-validator-example/only-letters-validator-example.component';
import { OnlyNumberValidatorExampleComponent } from './examples/only-number-validator-example/only-number-validator-example.component';
import { ValidatorsExampleComponent } from './examples/validators-example/validators-example.component';

export const IMPORTS = [
  ...BASE_IMPORTS,
  GroupExampleComponent,
  DeepFormExampleComponent,
  EmailValidatorExampleComponent,
  ValidatorsExampleComponent,
  OnlyLettersValidatorExampleComponent,
  OnlyNumberValidatorExampleComponent,
  NameValidatorExampleComponent,
  AddressNumberValidatorExampleComponent,
  DateValidatorExampleComponent,
];
