import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

const errorList = {
  required: 'This field is required',
  minlength: (minLength: number) => `Min length is ${minLength}`,
  pattern:
    'Password must have one uppercase character and one numeric character',
  email: 'Email is not in valid',
};

@Pipe({
  name: 'error',
  standalone: true,
})
export class ErrorPipe implements PipeTransform {
  transform(value: ValidationErrors) {
    const error = value ? Object.keys(value)[0] : null;
    if (error === 'minlength') {
      return errorList[error](value['minlength']?.requiredLength);
    }
    return error ? errorList[error] : null;
  }
}
