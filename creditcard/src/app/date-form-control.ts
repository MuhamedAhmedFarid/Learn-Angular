import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {
  override setValue(value: String | null, options: any) {

    if(!value){
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }

    if (value && value.match(/[^0-9\/]/g)) {
      value = value.replace(/[^0-9\/]/g, ''); // Remove any non-digit/non-slash characters
      super.setValue(value, { ...options, emitModelToViewChange: true });
    }

    if (value.length >= 5) {
      value = value.slice(0, 5); // Limit the value to a maximum of five characters
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length === 3 && this.value.length === 4 && value.endsWith("/")) {
      value = value.slice(0, 2); // Remove the slash if the user deleted two numbers
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true })
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true })

  }
}
