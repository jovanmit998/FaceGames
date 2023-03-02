import { Dictionary } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { Game } from '../models/data.mode';
import { gamesFeature } from './games.reducer';
import { getSelectors } from '@ngrx/router-store';

export const {
  selectIsLoading,
  selectIsSideMenuOpened,
  selectGamesState,
  selectEntities,
  selectAll,
  selectIds,
} = gamesFeature;

export const { selectQueryParams } = getSelectors();

export const selectComments = (id: number) =>
  createSelector(
    selectEntities,
    (games: Dictionary<Game>) => games[id].comments
  );

export const selectName = (id: number) =>
  createSelector(selectEntities, (game: Dictionary<Game>) => game[id].name);

export const selectDescription = (id: number) =>
  createSelector(
    selectEntities,
    (game: Dictionary<Game>) => game[id].description
  );

export const selectRate = (id: number) =>
  createSelector(selectEntities, (game: Dictionary<Game>) => game[id].rate);

export const selectGameName = (partialName: string) =>
  createSelector(selectAll, (games: Game[]) =>
    games.filter((game) =>
      game.name.toLowerCase().startsWith(partialName.toLowerCase() || null)
    )
  );

export const selectGameFromQueryParams = createSelector(
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
);
