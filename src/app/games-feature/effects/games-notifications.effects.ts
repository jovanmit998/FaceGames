import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { gamesApiActions } from '../actions/games-api.actions';

@Injectable()
export class GamesNotificationsEffects {
  private readonly actions$ = inject(Actions);
  private readonly snackBar = inject(MatSnackBar);
  readonly gamesApiSuccessNotifications$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          gamesApiActions.gameRatedSuccess,
          gamesApiActions.commentRemoveSuccess,
          gamesApiActions.postCommentSuccess,
          gamesApiActions.commentEditSuccess
        ),
        tap(({ successMsg }) =>
          this.snackBar.open(successMsg, 'close', {
            duration: 1000,
          })
        )
      );
    },
    { dispatch: false }
  );
}
