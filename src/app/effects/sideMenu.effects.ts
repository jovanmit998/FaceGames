import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { navigationComponentActions } from '../actions/navigation-component.actions';

@Injectable()
export class SideNavigationMenuEffects {
  private readonly chatModal = inject(MatDialog);
  private readonly actions$ = inject(Actions);

  readonly closeChatModal$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(navigationComponentActions.toggleSideNavigation),
        tap(() => this.chatModal.closeAll())
      );
    },
    { dispatch: false }
  );
}
