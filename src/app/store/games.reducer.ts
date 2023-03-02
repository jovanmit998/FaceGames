import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { gamesApiActions } from '../actions/games-api.actions';
import { gamesPageActions } from '../actions/games.page.actions';
import { navigationComponentActions } from '../actions/navigation-component.actions';
import { Game } from '../models/data.mode';

interface State extends EntityState<Game> {
  isLoading: boolean;
  isSideMenuOpened: boolean;
}

export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>();

const initialState: State = adapter.getInitialState({
  isLoading: false,
  isSideMenuOpened: false,
});

export const reducer = createReducer(
  initialState,
  on(gamesPageActions.initialLoad, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(gamesApiActions.gamesLoadedSuccess, (state, { games }) =>
    adapter.setAll(games, {
      ...state,
      isLoading: false,
    })
  ),
  on(gamesApiActions.gamesLoadedFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(navigationComponentActions.toggleSideNavigation, (state, { isOpen }) => ({
    ...state,
    isSideMenuOpened: isOpen,
  })),
  on(gamesPageActions.gameRated, (state, { update }) => {
    return adapter.updateOne(update, {
      ...state,
    });
  }),

  on(gamesPageActions.postComment, (state, { gameId, comment }) =>
    adapter.updateOne(
      {
        id: gameId,
        changes: {
          comments: [...state.entities[gameId].comments, comment],
        },
      },
      state
    )
  ),

  on(gamesPageActions.deleteComment, (state, { gameId, commentId }) =>
    adapter.updateOne(
      {
        id: gameId,
        changes: {
          comments: state.entities[gameId].comments.filter(
            (cm, index) => index !== commentId
          ),
        },
      },
      state
    )
  ),
  on(gamesPageActions.editComment, (state, { gameId, commentId, comment }) =>
    adapter.updateOne(
      {
        id: gameId,
        changes: {
          comments: state.entities[gameId].comments.map((cm, index) =>
            index === commentId
              ? { comment: comment, datePosted: cm.datePosted, isEdited: true }
              : cm
          ),
        },
      },
      state
    )
  ),
  on(gamesApiActions.gameLoadedSuccess, (state, { game }) => ({
    ...state,
  }))
);

const feature = createFeature({ name: 'games', reducer });
const entitySelector = adapter.getSelectors(feature.selectGamesState);

export const gamesFeature = { ...feature, ...entitySelector };
