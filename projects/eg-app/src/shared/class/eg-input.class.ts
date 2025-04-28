import { AbstractControl, FormControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class EgInputStateMatcher implements ErrorStateMatcher {

    constructor(public control: AbstractControl<FormControl>) { }

    public isErrorState(): boolean {
        return !this.control?.valid && (this.control?.dirty || this.control?.touched);
    }
}
