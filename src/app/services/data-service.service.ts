import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Game, Comment } from '../models/data.mode';

interface httpResponse {
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);

  getGames(): Observable<Game[]> {
    return this.http
      .get<Game[]>('http://localhost:3000/data')
      .pipe(delay(1000));
  }

  getOneGame(gameId: number): Observable<{ game: Game }> {
    return this.http.get<{ game: Game }>(
      `http://localhost:3000/game/${gameId}`
    );
  }

  postComment(id: number, comment: Comment): Observable<httpResponse> {
    return this.http.post<httpResponse>('http://localhost:3000/addComment', {
      id: id,
      comment: comment,
    });
  }

  postRating(id: number, rate: number): Observable<httpResponse> {
    return this.http.post<httpResponse>('http://localhost:3000/addRating', {
      id,
      rate,
    });
  }

  removeComment(gameId: number, commentId: number): Observable<httpResponse> {
    return this.http.post<httpResponse>('http://localhost:3000/removeComment', {
      gameId,
      commentId,
    });
  }

  updateComment(
    gameId: number,
    commentId: number,
    comment: string
  ): Observable<httpResponse> {
    return this.http.post<httpResponse>(
      `http://localhost:3000/updateComment?gameId=${gameId}&commentId=${commentId}`,
      {
        comment,
      }
    );
  }
}
