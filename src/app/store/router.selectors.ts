import { getSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

const { selectUrl } = getSelectors();

export const selectIsLoginPage = createSelector(selectUrl, (url) =>
  url ? url === '/login' : false
);
