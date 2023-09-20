import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { LetDirective } from '@ngrx/component';
import { ComponentStore } from '@ngrx/component-store';
import { createSelector, Store } from '@ngrx/store';
import { gamesFeature } from '../games.state';
import { CommentsComponent } from '../comments/comments.component';
import { Comment } from 'src/app/games-feature/models/games-data.model';
import { gamesPageActions } from '../actions/games.page.actions';

interface LocalState {
  comment: string;
}

@Component({
  selector: 'app-dialog-main',
  templateUrl: './games-dialog.html',
  styleUrls: ['./games-dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentStore],
  standalone: true,
  imports: [
    CommentsComponent,
    LetDirective,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
  ],
})
export class DialogMainComponent implements OnInit {
  private readonly dialogData: { id: number } = inject(MAT_DIALOG_DATA);
  private readonly store = inject(Store);
  private readonly componentStore = inject(ComponentStore<LocalState>);

  readonly vm$ = this.store.select(viewModelGameDialog(this.dialogData.id));
  readonly commentForEdit$ = this.componentStore.select(
    (state) => state.comment
  );

  dialogForm: UntypedFormGroup = new UntypedFormGroup({
    comment: new UntypedFormControl(''),
  });

  openGameInTab() {
    this.store.dispatch(
      gamesPageActions.getGame({ gameId: this.dialogData.id })
    );
  }

  ngOnInit(): void {
    this.componentStore.setState({ comment: '' });
  }

  onEnableDisableCommentEditing(comment: string) {
    this.componentStore.patchState({ comment });
  }

  onDeleteComment(index: number) {
    this.store.dispatch(
      gamesPageActions.deleteComment({
        gameId: this.dialogData.id,
        commentId: index,
      })
    );
  }

  onEditComment({ comment, index }) {
    this.store.dispatch(
      gamesPageActions.editComment({
        gameId: this.dialogData.id,
        commentId: index,
        comment: comment,
      })
    );
  }

  onSubmitComment() {
    const comment = this.dialogForm.get('comment').value;
    if (!comment) return;

    this.store.dispatch(
      gamesPageActions.postComment({
        gameId: this.dialogData.id,
        comment: {
          comment: comment,
          datePosted: new Date().toLocaleDateString('de-DE'),
          isEdited: false,
        },
      })
    );
    this.dialogForm.get('comment').setValue('');
  }
}

const viewModelGameDialog = (id: number) =>
  createSelector({
    name: gamesFeature.selectGameProperty<string>('name', id),
    description: gamesFeature.selectGameProperty<string>('description', id),
    comments: gamesFeature.selectGameProperty<Comment[]>('comments', id),
  });
