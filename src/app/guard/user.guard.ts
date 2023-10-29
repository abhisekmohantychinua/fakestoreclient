import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  authService.isLoggedIn$.subscribe((status) => {
    if (!status) {
      router.navigate(['/login']);
    }
  });
  return authService.isLoggedIn$;
};
