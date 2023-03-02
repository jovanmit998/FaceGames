import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, switchMap } from 'rxjs';
import { gamesApiActions } from '../actions/games-api.actions';
import { gamesPageActions } from '../actions/games.page.actions';
import { DataService } from '../services/data-service.service';

Injectable();
export class GamesEffects {
  private readonly gamesService = inject(DataService);
  private readonly actions$ = inject(Actions);

  readonly loadGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(gamesPageActions.initialLoad),
      switchMap(() => {
        return this.gamesService.getGames().pipe(
          map((games) => gamesApiActions.gamesLoadedSuccess({ games })),
          catchError((error: HttpErrorResponse) =>
            of(gamesApiActions.gamesLoadedFailure({ errorMsg: error }))
          )
        );
      })
    );
  });

  readonly postComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(gamesPageActions.postComment),
      concatMap(({ gameId, comment }) => {
        return this.gamesService
          .postComment(Number(gameId), {
            comment: comment.comment,
            datePosted: comment.datePosted,
            isEdited: comment.isEdited,
          })
          .pipe(
            map(({ message }) =>
              gamesApiActions.postCommentSuccess({ successMsg: message })
            ),
            catchError((error: HttpErrorResponse) =>
              of(gamesApiActions.postCommentFailure({ errorMsg: error }))
            )
          );
      })
    );
  });

  readonly rateGame$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(gamesPageActions.gameRated),
      switchMap(({ update }) => {
        return this.gamesService
          .postRating(Number(update.id), update.changes.rate)
          .pipe(
            map(({ message }) =>
              gamesApiActions.gameRatedSuccess({ successMsg: message })
            ),
            catchError((error: HttpErrorResponse) =>
              of(gamesApiActions.gameRatedFailure({ errorMsg: error }))
            )
          );
      })
    );
  });

  readonly removeComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(gamesPageActions.deleteComment),
      mergeMap(({ gameId, commentId }) => {
        return this.gamesService.removeComment(gameId, commentId).pipe(
          map(({ message }) =>
            gamesApiActions.commentRemoveSuccess({ successMsg: message })
          ),
          catchError((error: HttpErrorResponse) =>
            of(gamesApiActions.commentRemoveFailure({ errorMsg: error }))
          )
        );
      })
    );
  });

  readonly updateComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(gamesPageActions.editComment),
      mergeMap(({ gameId, commentId, comment }) => {
        return this.gamesService.updateComment(gameId, commentId, comment).pipe(
          map(({ message }) =>
            gamesApiActions.commentEditSuccess({ successMsg: message })
          ),
          catchError((error: HttpErrorResponse) =>
            of(gamesApiActions.commentEditFailure({ errorMsg: error }))
          )
        );
      })
    );
  });

  readonly getGame = createEffect(() => {
    return this.actions$.pipe(
      ofType(gamesPageActions.getGame),
      switchMap(({ gameId }) => {
        return this.gamesService.getOneGame(gameId).pipe(
          map(({ game }) => {
            console.log(game);
            return gamesApiActions.gameLoadedSuccess({ game });
          }),
          catchError((error: HttpErrorResponse) =>
            of(gamesApiActions.gameLoadedFailure({ errorMsg: error }))
          )
        );
      })
    );
  });
}
