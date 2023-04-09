import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginStore } from '../login.store';
import { LetModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ForgotPasswordComponent } from '../forgotPassword/forgotPassword.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorPipe } from '../errors.pipe';
import { SignUpComponent } from '../signUp/signUp.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['login-container.component.scss'],
  standalone: true,
  providers: [LoginStore],
  imports: [
    LoginComponent,
    LetModule,
    CommonModule,
    MatCardModule,
    ForgotPasswordComponent,
    SignUpComponent,
    MatFormFieldModule,
    MatInputModule,
    ErrorPipe,
    RouterModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {}
