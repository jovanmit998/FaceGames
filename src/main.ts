import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { GamesEffects } from './app/effects/games-api.effects';
import { GamesNotificationsEffects } from './app/effects/games-notifications.effects';
import { SideNavigationMenuEffects } from './app/effects/sideMenu.effects';
import { gamesFeature } from './app/store/games.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom([MatSnackBarModule, MatDialogModule]),
    provideStore({
      [gamesFeature.name]: gamesFeature.reducer,
      router: routerReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(
      GamesEffects,
      SideNavigationMenuEffects,
      GamesNotificationsEffects
    ),
    provideRouterStore(),
    provideRouter(APP_ROUTES),
  ],
});
