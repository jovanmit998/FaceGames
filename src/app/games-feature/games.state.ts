import {
  EntityAdapter,
  createEntityAdapter,
  EntityState,
  Dictionary,
} from '@ngrx/entity';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { gamesApiActions } from './actions/games-api.actions';
import { navigationComponentActions } from '../actions/navigation-component.actions';
import { Game } from './models/games-data.model';
import { getRouterSelectors } from '@ngrx/router-store';
import { gamesPageActions } from './actions/games.page.actions';

type gameProperties = 'comments' | 'name' | 'rate' | 'description';

const test = {
  comments: null as Comment[],
  name: null as string,
  rate: null as number,
  description: null as string,
};

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

const { selectQueryParams } = getRouterSelectors();

export const gamesFeature = createFeature({
  name: 'games',
  reducer,
  extraSelectors: ({ selectGamesState, selectEntities }) => {
    const { selectAll } = adapter.getSelectors(selectGamesState);

    return {
      selectAll,
      selectGameProperty: <T>(property: gameProperties, id: number) =>
        createSelector(
          selectEntities,
          (games: Dictionary<Game>) => games[id][property] as T
        ),
      selectGameName: (partialName: string) =>
        createSelector(selectAll, (games: Game[]) =>
          games.filter((game) =>
            game.name
              .toLowerCase()
              .startsWith(partialName.toLowerCase() || null)
          )
        ),
      selectGameFromQueryParams: createSelector(
        selectQueryParams,
        selectAll,
        (query, games) => {
          if (query?.['gameName']) {
            return games.filter((game) =>
              game.name
                .toLowerCase()
                .startsWith(query['gameName'].toLowerCase() || null)
            );
          }

          return null;
        }
      ),
    };
  },
});
