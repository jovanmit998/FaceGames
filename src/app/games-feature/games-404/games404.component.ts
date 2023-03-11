import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SideNavigationComponent } from 'src/app/side-navigation/side-navigation.component';

@Component({
  selector: 'games-404',
  templateUrl: './games404.component.html',
  styles: [
    `
      .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
  standalone: true,
  imports: [SideNavigationComponent, MatButtonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Games404 {}
