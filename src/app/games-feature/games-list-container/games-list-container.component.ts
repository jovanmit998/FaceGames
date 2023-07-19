import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LetDirective } from '@ngrx/component';
import { createSelector, Store } from '@ngrx/store';
import { gamesPageActions } from 'src/app/actions/games.page.actions';
import { SideNavigationComponent } from 'src/app/side-navigation/side-navigation.component';
import { selectEntities, selectIsLoading } from 'src/app/store/games.selectors';
import { DialogMainComponent } from '../games-dialog-container/games-dialog-container';
import { GamesListComponent } from '../games-list/games-list.component';

@Component({
  selector: 'app-games-list-container',
  templateUrl: './games-list-container.component.html',
  styleUrls: ['./games-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    SideNavigationComponent,
    LetDirective,
    CommonModule,
    GamesListComponent,
  ],
})
export class GamesListContainerComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly dialog = inject(MatDialog);

  readonly vm$ = this.store.select(viewModel);

  ngOnInit(): void {
    this.store.dispatch(gamesPageActions.initialLoad());
  }

  onOpenGameDialog(id: number) {
    const dialogRef = this.dialog.open(DialogMainComponent, {
      width: '550px',
      data: { id },
    });
  }

  onGameRated({ index, rate }) {
    this.store.dispatch(
      gamesPageActions.gameRated({
        update: {
          id: index + 1,
          changes: { rate },
        },
      })
    );
  }
}

const viewModel = createSelector({
  isLoading: selectIsLoading,
  games: selectEntities,
});
