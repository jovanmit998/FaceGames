import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChatComponent } from './chat-feature/chat.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { selectIsLoginPage } from './store/router.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    RouterModule,
    NavigationComponent,
    ChatComponent,
    CommonModule,
  ],
})
export class AppComponent {
  private readonly store = inject(Store);
  readonly isLoginPage = this.store.select(selectIsLoginPage);
}
