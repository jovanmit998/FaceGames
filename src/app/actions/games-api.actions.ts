import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { Game } from '../models/data.mode';

export const gamesApiActions = createActionGroup({
  source: 'Games Api',
  events: {
    'Games Loaded Success': props<{ games: Game[] }>(),
    'Games Loaded Failure': props<{ errorMsg: HttpErrorResponse }>(),
    'Post comment success': props<{ successMsg: string }>(),
    'Post comment failure': props<{ errorMsg: HttpErrorResponse }>(),
    'Game rated success': props<{ successMsg: string }>(),
    'Game rated failure': props<{ errorMsg: HttpErrorResponse }>(),
    'Comment remove success': props<{ successMsg: string }>(),
    'Comment remove failure': props<{ errorMsg: HttpErrorResponse }>(),
    'Comment edit success': props<{ successMsg: string }>(),
    'Comment edit failure': props<{ errorMsg: HttpErrorResponse }>(),
    'Game Loaded Success': props<{ game: Game }>(),
    'Game Loaded Failure': props<{ errorMsg: HttpErrorResponse }>(),
  },
});
