import { Update } from '@ngrx/entity';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Comment, Game } from '../models/games-data.model';

export const gamesPageActions = createActionGroup({
  source: 'Games Page',
  events: {
    'Initial Load': emptyProps(),
    'Post comment': props<{ gameId: number; comment: Comment }>(),
    'Game rated': props<{ update: Update<Game> }>(),
    'Edit comment': props<{
      gameId: number;
      commentId: number;
      comment: string;
    }>(),
    'Delete comment': props<{ gameId: number; commentId: number }>(),
    'Get game': props<{ gameId: number }>(),
  },
});
