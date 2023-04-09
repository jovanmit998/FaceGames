import { FormControl, Validators } from '@angular/forms';

export function getPasswordControl() {
  return new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('(.*[A-Z].*)'),
    Validators.pattern('(.*[0-9].*)'),
  ]);
}

export function getEmailControl() {
  return new FormControl('', [Validators.required, Validators.email]);
}

export function getUsernameControl() {
  return new FormControl('', [Validators.required, Validators.minLength(2)]);
}

export function getDateOfBirthControl() {
  return new FormControl<Date>(null, Validators.required);
}
