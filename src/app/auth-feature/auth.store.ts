import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs';

export interface AuthState {
  loading: boolean;
}

const initialState: AuthState = {
  loading: true,
};

@Injectable()
export class AuthStore extends ComponentStore<AuthState> {
  private readonly query = inject(ActivatedRoute);
  constructor() {
    super(initialState);
  }

  readonly currentAuthForm = this.query.queryParams.pipe(
    map((query) => query['form'])
  );
}
