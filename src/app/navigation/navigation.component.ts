import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { navigationComponentActions } from '../actions/navigation-component.actions';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { selectIsSideMenuOpened } from '../store/games.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('navToggle', [
      state(
        'open',
        style({
          width: '180px',
        })
      ),
      state(
        'close',
        style({
          width: '*',
        })
      ),
      transition('open => close', [animate('0.1s')]),
      transition('close => open', [animate('0.2s')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    SearchFieldComponent,
    LetModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class NavigationComponent {
  private readonly store = inject(Store);
  readonly isSideMenuOpened = this.store.select(selectIsSideMenuOpened);

  openSideMenu(isCurrentlyOpen: boolean) {
    this.store.dispatch(
      navigationComponentActions.toggleSideNavigation({
        isOpen: !isCurrentlyOpen,
      })
    );
  }
}
