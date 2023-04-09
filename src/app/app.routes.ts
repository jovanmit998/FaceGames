import { Routes } from '@angular/router';
import { Games404 } from './games-feature/games-404/games404.component';
import { GamesListContainerComponent } from './games-feature/games-list-container/games-list-container.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login-feature/forgotPassword/forgotPassword.component';
import { LoginContainerComponent } from './login-feature/login-container/login-container.component';
import { LoginComponent } from './login-feature/login/login.component';
import { SignUpComponent } from './login-feature/signUp/signUp.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginContainerComponent,
    children: [
      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
      },
      {
        path: 'register',
        component: SignUpComponent,
      },
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        component: LoginComponent,
      },
    ],
  },
  { path: 'games', component: GamesListContainerComponent },
  { path: 'games404', component: Games404 },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
