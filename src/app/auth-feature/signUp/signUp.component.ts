import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorPipe } from '../errors.pipe';
import {
  getDateOfBirthControl,
  getEmailControl,
  getPasswordControl,
  getUsernameControl,
} from '../util/form-controls';
import { MatNativeDateModule } from '@angular/material/core';
import { signUpForm } from '../util/form-configurations';
import { defaultOrder, navigate } from '../util/form-helper';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    ErrorPipe,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  formConfig = signUpForm;
  readonly orderDefault = defaultOrder;
  private readonly navigateTo = navigate();

  form = new FormGroup({
    email: getEmailControl(),
    username: getUsernameControl(),
    password: getPasswordControl(),
    dateOfBirth: getDateOfBirthControl(),
  });

  backToLogin() {
    this.navigateTo(null);
  }

  signUp() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
  }
}
