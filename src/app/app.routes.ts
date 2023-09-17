import { Routes } from '@angular/router';
import { Games404 } from './games-feature/games-404/games404.component';
import { GamesListContainerComponent } from './games-feature/games-list-container/games-list-container.component';
import { HomeComponent } from './home/home.component';
import { AuthContainerComponent } from './auth-feature/auth-container.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: AuthContainerComponent,
  },
  { path: 'games', component: GamesListContainerComponent },
  { path: 'games404', component: Games404 },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
