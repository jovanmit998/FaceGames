import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { SideNavigationMenuEffects } from './app/effects/sideMenu.effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GameApiFailureEffects } from './app/games-feature/effects/games-api-failure';
import { gamesFeature } from './app/games-feature/games.state';
import { GamesNotificationsEffects } from './app/games-feature/effects/games-notifications.effects';
import { GamesEffects } from './app/games-feature/effects/games-api.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom([MatSnackBarModule, MatDialogModule]),
    provideStore({
      router: routerReducer,
    }),
    provideState(gamesFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(
      GamesEffects,
      SideNavigationMenuEffects,
      GamesNotificationsEffects,
      GameApiFailureEffects
    ),
    provideRouterStore(),
    provideRouter(APP_ROUTES),
  ],
});
