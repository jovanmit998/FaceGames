import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorPipe } from '../errors.pipe';
import { loginForm } from '../util/form-configurations';
import { getPasswordControl, getUsernameControl } from '../util/form-controls';
import { defaultOrder, navigate } from '../util/form-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ErrorPipe,
    ReactiveFormsModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  formConfig = loginForm;
  readonly orderDefault = defaultOrder;
  private readonly navigateTo = navigate();

  form = new FormGroup({
    username: getUsernameControl(),
    password: getPasswordControl(),
  });

  onPasswordReset() {
    this.navigateTo('forgotPassword');
  }

  onRegister() {
    this.navigateTo('register');
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
  }
}
