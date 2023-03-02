import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SideNavigationComponent],
})
export class HomeComponent {}
