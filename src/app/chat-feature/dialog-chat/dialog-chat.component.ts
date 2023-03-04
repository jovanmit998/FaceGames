import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-chat',
  templateUrl: './dialog-chat.component.html',
  styleUrls: ['./dialog-chat.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
})
export class DialogChatComponent {}
