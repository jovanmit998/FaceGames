import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['login-container.component.scss'],
  standalone: true,
  imports: [MatCardModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {}
