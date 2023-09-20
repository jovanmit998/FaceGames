import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { navigationComponentActions } from '../actions/navigation-component.actions';
import { SideNavContentComponent } from '../side-nav-content/side-nav-content.component';
import { gamesFeature } from '../games-feature/games.state';
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatSidenavModule, SideNavContentComponent, CommonModule],
})
export class SideNavigationComponent {
  private readonly store = inject(Store);
  readonly isSideNavigationOpened = this.store.select(
    gamesFeature.selectIsSideMenuOpened
  );

  closeNavigationSideMenu() {
    this.store.dispatch(
      navigationComponentActions.toggleSideNavigation({ isOpen: false })
    );
  }
}
