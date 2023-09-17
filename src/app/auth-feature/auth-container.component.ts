import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/signUp.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { AuthStore } from './auth.store';
import { LetDirective } from '@ngrx/component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['auth-container.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    LetDirective,
    NgIf,
  ],
  providers: [AuthStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthContainerComponent {
  private readonly authStore = inject(AuthStore);

  readonly currentForm = this.authStore.currentAuthForm;
}
