// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { FooterComponent } from './footer/footer.component';
// import { LetModule } from '@ngrx/component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatCardModule } from '@angular/material/card';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { MatBadgeModule } from '@angular/material/badge';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatTreeModule } from '@angular/material/tree';
// import { DialogChatComponent } from './dialog-chat/dialog-chat.component';
// import { StoreModule } from '@ngrx/store';
// import { gamesFeature } from './store/games.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { GamesEffects } from './effects/games-api.effects';
// import { SideNavigationMenuEffects } from './effects/sideMenu.effects';
// import { GamesNotificationsEffects } from './effects/games-notifications.effects';
// import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     NoopAnimationsModule,
//     MatToolbarModule,
//     MatCardModule,
//     MatAutocompleteModule,
//     MatInputModule,
//     MatIconModule,
//     MatDialogModule,
//     MatButtonModule,
//     MatBadgeModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     BrowserAnimationsModule,
//     MatDividerModule,
//     MatTabsModule,
//     MatSidenavModule,
//     MatSnackBarModule,
//     MatMenuModule,
//     MatTreeModule,
//     HttpClientModule,
//     MatProgressSpinnerModule,
//     LetModule,
//     StoreDevtoolsModule.instrument({ maxAge: 25 }),
//     StoreModule.forRoot({
//       [gamesFeature.name]: gamesFeature.reducer,
//       router: routerReducer,
//     }),
//     EffectsModule.forRoot([
//       GamesEffects,
//       SideNavigationMenuEffects,
//       GamesNotificationsEffects,
//     ]),
//     StoreRouterConnectingModule.forRoot(),
//   ],
//   exports: [],
//   providers: [],
//   //bootstrap: [AppComponent],
// })
// export class AppModule {}
