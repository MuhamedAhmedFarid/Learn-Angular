import { FormGroup, Validator } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MathPassword implements Validator {
  validate(formGroup: any) {
    const { password, passwordConfirmation } = formGroup.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
