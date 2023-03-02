import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ComponentStore } from '@ngrx/component-store';
import { DialogChatComponent } from '../dialog-chat/dialog-chat.component';

interface ChatState {
  isDialogOpened: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentStore],
  standalone: true,
  imports: [MatIconModule, CommonModule],
})
export class ChatComponent {
  private readonly chatDialog = inject(MatDialog);
  private readonly componentStore = inject(ComponentStore<ChatState>);
  readonly isChatOpened$ = this.componentStore.select(
    (state) => state.isDialogOpened
  );

  openChatDialog() {
    const chatDialogRef = this.chatDialog.open(DialogChatComponent, {
      width: '200px',
      height: '400px',
      data: {},
      hasBackdrop: false,
      position: {
        top: '100px',
        right: '0px',
      },
    });

    this.componentStore.setState({ isDialogOpened: true });

    chatDialogRef
      .afterClosed()
      .subscribe(() => this.componentStore.setState({ isDialogOpened: false }));
  }
}
