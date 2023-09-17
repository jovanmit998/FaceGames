import { KeyValue } from '@angular/common';
import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type loginRoutes = 'forgotPassword' | 'register' | null;

export function defaultOrder(
  a: KeyValue<string, string>,
  b: KeyValue<string, string>
): number {
  return 0;
}

export const navigate = () => {
  const router = inject(Router);
  const activatedRoute = inject(ActivatedRoute);

  return (route: loginRoutes) => {
    router.navigate([], {
      relativeTo: activatedRoute,
      queryParams: { form: route },
    });
  };
};
