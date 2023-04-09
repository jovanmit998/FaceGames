import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorPipe } from '../errors.pipe';
import { forgotPasswordForm } from '../form-configurations';
import { getEmailControl, getPasswordControl } from '../form-controls';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotPassword.component.html',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ErrorPipe,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {
  formConfig = forgotPasswordForm;
  form = new FormGroup({
    email: getEmailControl(),
    password: getPasswordControl(),
  });
}
