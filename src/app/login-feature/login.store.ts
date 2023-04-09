import { KeyValue } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';

type loginRoutes = 'forgotPassword' | 'register' | '';

const localStorageKey = 'loginStatus' as const;

export interface LoginState {}

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  orderById(a: KeyValue<string, string>, b: KeyValue<string, string>): number {
    return 0;
  }

  navigateTo(route: loginRoutes) {
    this.router.navigate([route], {
      relativeTo: this.activatedRoute,
    });
  }
}
