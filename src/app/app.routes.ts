import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login-feature/login.component';
import { Games404 } from './games-feature/games-404/games404.component';
import { GamesListContainerComponent } from './games-feature/games-list-container/games-list-container.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'games', component: GamesListContainerComponent },
  { path: 'games404', component: Games404 },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
