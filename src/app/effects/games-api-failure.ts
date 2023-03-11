import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { gamesApiActions } from '../actions/games-api.actions';

@Injectable()
export class GameApiFailureEffects {
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  readonly gamesLoadFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(gamesApiActions.gamesLoadedFailure),
        tap(() => this.router.navigate(['/games404']))
      );
    },
    { dispatch: false }
  );

  readonly gamesApiFailureNotifications$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        gamesApiActions.commentEditFailure,
        gamesApiActions.commentRemoveFailure,
        gamesApiActions.gameRatedFailure,
        gamesApiActions.postCommentFailure
      ),
      tap(() =>
        this.snackBar.open('Action Failed', 'close', {
          duration: 1000,
        })
      )
    );
  });
}
