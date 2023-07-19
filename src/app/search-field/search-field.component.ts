import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { debounceTime, tap } from 'rxjs';
import { DialogMainComponent } from '../games-feature/games-dialog-container/games-dialog-container';
import { selectGameFromQueryParams } from '../store/games.selectors';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    LetDirective,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
  ],
})
export class SearchFieldComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);

  readonly filteredGames$ = this.store.select(selectGameFromQueryParams);
  navForm = new FormGroup({
    searchInput: new FormControl(''),
  });

  ngOnInit(): void {
    this.searchForGame();
  }

  searchForGame() {
    this.navForm
      .get('searchInput')
      .valueChanges.pipe(
        debounceTime(400),
        tap((val) =>
          this.router.navigate([], { queryParams: { gameName: val } })
        )
      )
      .subscribe();
  }

  openGame(id: number) {
    const dialogRef = this.dialog.open(DialogMainComponent, {
      width: '550px',
      data: { id: id },
    });
    this.navForm.get('searchInput').setValue('');
  }
}
