import { getRouterSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

const { selectUrl } = getRouterSelectors();

export const selectIsLoginPage = createSelector(selectUrl, (url) =>
  url ? url.includes('/login') : false
);
