import { AbstractControl } from "@angular/forms";

export function ageValidator(control:AbstractControl){
    if(control.value < 0 || control.value > 100){
        return {range:true};
    }

    return null;
}

export function emailValidator(control: AbstractControl) {
  const regExp = new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}');
  if (!regExp.test(control.value)) {
    return { range: true };
  }
  return null;
}




