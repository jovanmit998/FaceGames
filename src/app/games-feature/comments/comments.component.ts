import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Comment } from 'src/app/models/data.mode';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class CommentsComponent {
  @Input() gameComments: Comment[];
  @Input() selectedCommentForEdit: string;
  @Output() deleteComment = new EventEmitter<number>();
  @Output() enableCommentEditing = new EventEmitter<string>();
  @Output() disableCommentEditing = new EventEmitter<string>();
  @Output() editComment = new EventEmitter<{
    comment: string;
    index: number;
  }>();
  commentFormControl = new FormControl<string>('');

  enableEditing({ comment }) {
    this.commentFormControl.setValue(comment);
    this.enableCommentEditing.emit(comment);
  }

  disableEditing() {
    this.disableCommentEditing.emit('');
  }

  saveEditedComment(comment: string, index: number) {
    const newComment = this.commentFormControl.value;
    if (comment && newComment) {
      this.editComment.emit({ comment: newComment, index });
    }

    this.disableEditing();
  }
}
