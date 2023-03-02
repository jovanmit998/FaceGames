import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Dictionary } from '@ngrx/entity';
import { Game } from 'src/app/models/data.mode';

@Component({
  selector: 'app-games',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
})
export class GamesListComponent {
  @Input() allGames: Dictionary<Game>;
  @Output() openGameDialog = new EventEmitter<number>();
  @Output() rateGame = new EventEmitter<{ index: number; rate: number }>();
}
