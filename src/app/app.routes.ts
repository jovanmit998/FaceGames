import { Routes } from '@angular/router';
import { GamesListContainerComponent } from './games-feature/games-list-container/games-list-container.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesListContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
