import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorPipe } from '../errors.pipe';
import { loginForm } from '../form-configurations';
import { getPasswordControl, getUsernameControl } from '../form-controls';
import { LoginStore } from '../login.store';

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
  private readonly loginStore = inject(LoginStore);
  readonly orderDefault = this.loginStore.orderById;

  form = new FormGroup({
    username: getUsernameControl(),
    password: getPasswordControl(),
  });

  onPasswordReset() {
    this.loginStore.navigateTo('forgotPassword');
  }

  onRegister() {
    this.loginStore.navigateTo('register');
  }

  login() {}
}
